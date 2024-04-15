import MenuLateral from '@/components/template/MenuLateral'
import Cabecalho from '@/components/template/Cabecalho'
import Conteudo from '@/components/template/Conteudo'
import useAppData from '@/data/hook/useAppData'

interface ILayoutProps {
	children?: any
	subtitulo: string
	titulo: string
}

export default function Layout(props: ILayoutProps) {
    const ctx = useAppData()

	return (
		<div
			className={`
            ${ctx.tema}
            flex h-screen w-screen
        `}>
			<MenuLateral />
			<div
				className={`
                flex flex-col w-full p-7
                bg-gray-300 dark:bg-gray-800
            `}>
				<Cabecalho
					titulo={props.titulo}
					subtitulo={props.subtitulo}
				/>
				<Conteudo>{props.children}</Conteudo>
			</div>
		</div>
	)
}
