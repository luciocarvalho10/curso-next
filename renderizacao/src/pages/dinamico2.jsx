export async function getServerSideProps() {
    console.log('[Server] gerando props para o componente...')
    const response = await fetch('http://localhost:3000/api/produtos')
    const produtos = await response.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Dinamico2({ produtos }) {
    console.log('[Cliente] renderizando o componente...')

    const renderizarProdutos = () => produtos.map(produto =>
		<li key={produto.id}>
            {produto.id} - {produto.nome} - {produto.preco}
        </li>
	)

    return (
        <div>
            <h1>Dinâmico #2</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}