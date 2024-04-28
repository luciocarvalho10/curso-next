interface IEntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
    className?: string
}

export default function Entrada(props: IEntradaProps) {
    return (
		<div className={` flex flex-col ${props.className}`}>
			<label
				className='mb-2'
				htmlFor={props.texto.toLowerCase()}>
				{props.texto}
			</label>
			<input
				type={props.tipo ?? 'text'}
				name={props.texto.toLowerCase()}
				id={props.texto.toLowerCase()}
				value={props.valor}
				readOnly={props.somenteLeitura}
				onChange={e => props.valorMudou?.(e.target.value)}
				className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
			/>
		</div>
	)
}