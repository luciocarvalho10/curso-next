import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const clientes = [
        new Cliente('Ana', 22, '1'),
        new Cliente('Maria', 23, '2'),
        new Cliente('Pedro', 24, '3'),
        new Cliente('Joaquim', 25, '4'),
        new Cliente('Lucas', 26, '5'),
        new Cliente('Gabriel', 27, '6'),
        new Cliente('Arthur', 28, '7'),
        new Cliente('Gabriela', 29, '8'),
        new Cliente('Vitor', 30, '9'),
        new Cliente('Vitoria', 31, '10')
    ]

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        setVisivel('form')
    }

    function clienteExcluido(cliente: Cliente) {
        console.log(cliente.id)

    }

    function novoCliente() {
		setCliente(Cliente.vazio())
		setVisivel('form')
	}

    const salvarCliente = (cliente: Cliente) => setVisivel('tabela')
    const cancelado = () => setVisivel('tabela')

  return (
		<div
			className={`
                flex flex-col justify-center items-center h-screen
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white
            `}>
			<Layout titulo='Cadastro Simples'>
				{visivel === 'tabela' ? (
					<>
						<div className='flex justify-end'>
							<Botao
								onClick={novoCliente}
								cor='green'
								className='mb-4'>
								Novo Cliente
							</Botao>
						</div>
						<Tabela
							clientes={clientes}
							clienteExcluido={clienteExcluido}
							clienteSelecionado={clienteSelecionado}
						/>
					</>
				) : (
					<Formulario
						cliente={cliente}
						cancelado={cancelado}
                        clienteMudou={() =>salvarCliente}
					/>
				)}
			</Layout>
		</div>
  )
}
