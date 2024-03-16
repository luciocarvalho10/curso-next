export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/produtos')
    const produtos = await response.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4({ produtos }) {
    const renderizarProdutos = () => produtos.map(produto =>
		<li key={produto.id}>
            {produto.id} - {produto.nome} - {produto.preco}
        </li>
	)

    return (
        <div>
            <h1>Estático #4</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}