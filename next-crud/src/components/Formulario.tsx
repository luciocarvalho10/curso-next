import Entrada from './Entrada'
import { useState } from 'react'
import Botao from './Botao'
import Cliente from '@/core/Cliente'

interface IFormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: IFormularioProps) {
    const id = props.cliente?.id

	const [nome, setNome] = useState(props.cliente?.nome ?? '')
	const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

	return (
		<div
			className={`
            bg-gray-300 rounded-md px-8 pt-6 pb-6 mb-2
        `}>
			<form>
				{id && (
					<Entrada
						texto='ID'
						valor={id}
                        className='mb-4'
					/>
				)}
				<Entrada
					texto='Nome'
					valor={nome}
                    valorMudou={setNome}
                    className='mb-4'
				/>
				<Entrada
					texto='Idade'
					tipo='number'
					valor={idade}
                    valorMudou={setIdade}
				/>
			</form>
			<div className='flex justify-end mt-6'>
				<Botao
					cor={id ? 'green' : 'blue'}
					className='mr-2'
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
					{ id ? 'Alterar' : 'Salvar' }
				</Botao>
				<Botao onClick={props.cancelado}>Cancelar</Botao>
			</div>
		</div>
	)
}
