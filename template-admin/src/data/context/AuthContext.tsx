import route from 'next/router'
import { createContext, useState } from 'react'
import firebase from '@/firebase/config'
import IUsuario from '@/model/IUsuario'
import firebaseAuth from 'firebase/auth'

interface IAuthContextProps {
    usuario?: IUsuario
    carregando?: boolean
    loginGoogle?: () => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    cadastrar?: (email: string, senha: string) => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<IAuthContextProps>({})

async function usuarioNormalizado(user: firebaseAuth.User): Promise<IUsuario> {
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

export function AuthProvider({ children }: any) {
    const [usuario, setUsuario] = useState<IUsuario>()

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if(resp.user?.email){
            const usuario = await usuarioNormalizado(resp.user)
			setUsuario(usuario)
			route.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext