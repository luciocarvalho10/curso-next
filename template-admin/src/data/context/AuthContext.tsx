import route from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '@/firebase/config'
import IUsuario from '@/model/IUsuario'
import { User as IFirebaseUser } from 'firebase/auth'
import Cookies from 'js-cookie'

interface IAuthContextProps {
    usuario?: IUsuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    cadastrar?: (email: string, senha: string) => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<IAuthContextProps>({})

async function usuarioNormalizado(user: IFirebaseUser): Promise<IUsuario> {
	const token = await user.getIdToken()
	return {
		uid: user.uid,
		email: user.email,
		nome: user.displayName,
		token,
		provedor: user.providerData[0].providerId,
		imagemUrl: user.photoURL,
	}
}

function gerenciarCookie( logado: string ) {
    if(logado === 'logado') {
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }

}

export function AuthProvider({ children }: any) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<IUsuario>()

    async function configurarSessao(user: any) {
        if(user?.email) {
            const usuario = await usuarioNormalizado(user)
            setUsuario(usuario)
            gerenciarCookie('logado')
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(undefined)
            gerenciarCookie('deslogado')
            setCarregando(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase
				.auth()
				.signInWithPopup(new firebase.auth.GoogleAuthProvider())

			configurarSessao(resp.user)
			route.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function logout() {
        try {
            setCarregando(true)
			await firebase.auth().signOut()
			await configurarSessao(null)
		} finally {
            setCarregando(false)
		}
    }

    useEffect(() => {
        if(Cookies.get('admin-template-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
			return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            loginGoogle,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext