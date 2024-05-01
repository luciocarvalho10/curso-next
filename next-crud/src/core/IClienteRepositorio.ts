import Cliente from "./Cliente"

export default interface IClienteRepositorio {
	salvar(cliente: Cliente): Promise<Cliente | undefined>
	excluir(cliente: Cliente): Promise<void>
	obterTodos(): Promise<Cliente[]>
}