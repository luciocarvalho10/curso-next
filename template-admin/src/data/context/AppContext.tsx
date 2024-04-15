import { createContext, useState } from 'react'

type Tema = 'dark' | ''

interface IAppContextProps {
	tema?: Tema
    alternarTema?: () => void
}

const AppContext = createContext<IAppContextProps>({})

export function AppProvider({ children }: any) {
    const [tema,setTema] = useState<Tema>('dark')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

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
