import { IconeEdicao, IconeLixeira } from "@/components/icons"
import Cliente from "@/core/Cliente"

interface ITabelaProps {
    clientes: any[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: ITabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {exibirAcoes ? <th className={`p-4`}>Ações</th> : false}
            </tr>
        )
    }

    const bgColor = (key: number): string =>
		key % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'

    function renderizarDados() {
        return props.clientes?.map((cliente, i) =>
            <tr key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                <td className={`text-left p-4`}>{cliente.id}</td>
                <td className={`text-left p-4`}>{cliente.nome}</td>
                <td className={`text-left p-4`}>{cliente.idade}</td>
                {exibirAcoes ? renderizarAcoes(cliente, bgColor( i )) : false}
            </tr>
        )
    }

    function renderizarAcoes(cliente: Cliente, cor: string) {
        return (
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button
                        onClick={() => props.clienteSelecionado?.(cliente)}
                        className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:${cor}`}>
                        {IconeEdicao()}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button
                        onClick={() => props.clienteExcluido?.(cliente)}
                        className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:${cor}`}>
                        {IconeLixeira()}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`
                text-gray-300
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}