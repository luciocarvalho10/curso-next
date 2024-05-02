import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import useClientes from '@/hooks/useClientes'

export default function Home() {
	const {
		novoCliente,
		excluirCliente,
		selecionarCliente,
		salvarCliente,
		exibirTabela,
		cliente,
		clientes,
        tabelaVisivel
	} = useClientes()

	return (
		<div
			className={`
                flex flex-col justify-center items-center h-screen
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white
            `}>
			<Layout titulo='Cadastro Simples'>
				{tabelaVisivel ? (
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
							clienteExcluido={excluirCliente}
							clienteSelecionado={selecionarCliente}
						/>
					</>
				) : (
					<Formulario
						cliente={cliente}
						cancelado={exibirTabela}
						clienteMudou={salvarCliente}
					/>
				)}
			</Layout>
		</div>
	)
}
