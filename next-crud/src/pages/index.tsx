import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import IClienteRepositorio from "@/core/IClienteRepositorio";
import { useEffect, useState } from "react";

export default function Home() {
    const clienteRepositorio: IClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect(obterTodos, [])

    function obterTodos() {
        clienteRepositorio.obterTodos().then(clientes => {
            setClientes(clientes)
            setVisivel('tabela')
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente)
        setVisivel('form')
    }

    async function clienteExcluido(cliente: Cliente) {
        await clienteRepositorio.excluir(cliente)
        obterTodos()
    }

    function novoCliente() {
		setCliente(Cliente.vazio())
		setVisivel('form')
	}

    async function salvarCliente(cliente: Cliente) {
        await clienteRepositorio.salvar(cliente)
        obterTodos()
    }
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
                        clienteMudou={salvarCliente}
					/>
				)}
			</Layout>
		</div>
  )
}
