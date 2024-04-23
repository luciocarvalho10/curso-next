import { createContext, useEffect, useState } from 'react'

// type Tema = 'dark' | '' //será retirado do localStorage

interface IAppContextProps {
	tema?: string | null
    alternarTema?: () => void
}

const AppContext = createContext<IAppContextProps>({})

export function AppProvider({ children }: any) {
    const [tema,setTema] = useState<string | null>('dark')

    function alternarTema() {
        const novoTema = tema === '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema')
        setTema(temaSalvo)
    })

	return (
		<AppContext.Provider
			value={{
				tema,
                alternarTema
			}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContext
