import Titulo from '@/components/template/Titulo'
import BotaoAlternarTema from '@/components/template/BotaoAlternarTema'
import useAppData from '@/data/hook/useAppData'

interface ICabecalhoProps {
	titulo: string
	subtitulo: string
}

export default function Cabecalho(props: ICabecalhoProps) {
	const ctx = useAppData()
	return (
		<div className={`flex`}>
			<Titulo
				titulo={props.titulo}
				subtitulo={props.subtitulo}
			/>
			<div className={`flex flex-grow justify-end`}>
				<BotaoAlternarTema
					tema={ctx.tema}
					alternarTema={ctx.alternarTema}
				/>
			</div>
		</div>
	)
}
