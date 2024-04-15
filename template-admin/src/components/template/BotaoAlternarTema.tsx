import { IconeLua, IconeSol } from "@/components/icons"

interface IBotaoAlternarTemaProps {
	tema?: string
	alternarTema?: () => void
}
export default function BotaoAlternarTema(props: IBotaoAlternarTemaProps) {
    return props.tema === 'dark' ? (
		<div
			onClick={props.alternarTema}
			className={`

        `}>
			<div>{IconeSol}</div>
			<div>
				<span>Claro</span>
			</div>
		</div>
	) : (
		<div
			onClick={props.alternarTema}
			className={`

        `}>
			<div>{IconeLua}</div>
			<div>
				<span>Escuro</span>
			</div>
		</div>
	)
}