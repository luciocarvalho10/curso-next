import ColecaoCliente from '@/backend/db/ColecaoCliente'
import Cliente from '@/core/Cliente'
import IClienteRepositorio from '@/core/IClienteRepositorio'
import { useEffect, useState } from 'react'
import useTabelaOuForm from './useTabelaOuForm'

export default function useClientes() {
	const clienteRepositorio: IClienteRepositorio = new ColecaoCliente()

	const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
	const [clientes, setClientes] = useState<Cliente[]>([])
	const { tabelaVisivel, exibirForm, exibirTabela } =	useTabelaOuForm()

	useEffect(obterTodos, [])

	function obterTodos() {
		clienteRepositorio.obterTodos().then(clientes => {
			setClientes(clientes)
			exibirTabela()
		})
	}

	function selecionarCliente(cliente: Cliente) {
		setCliente(cliente)
		exibirForm()
	}

	async function excluirCliente(cliente: Cliente) {
		await clienteRepositorio.excluir(cliente)
		obterTodos()
	}

	function novoCliente() {
		setCliente(Cliente.vazio())
		exibirForm()
	}

	async function salvarCliente(cliente: Cliente) {
		await clienteRepositorio.salvar(cliente)
		obterTodos()
	}

	return {
		cliente,
		clientes,
		tabelaVisivel,
		novoCliente,
		salvarCliente,
		excluirCliente,
		selecionarCliente,
		obterTodos,
		exibirTabela,
	}
}
