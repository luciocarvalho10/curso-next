interface IConteudoProps {
    children?: any
}

export default function Conteudo(props: IConteudoProps) {
	return (
		<div className={`
            flex flex-col mt-7
        `}>
			{props.children}
		</div>
	)
}
