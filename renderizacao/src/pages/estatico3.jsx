export function getStaticProps() {
    return {
        revalidate: 3,
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2({ numero }) {
    return (
        <div>
            <h1>Estático #3</h1>

            <h2>Usando a opção "revalidate" dentro de getStaticProps</h2>
            <h2>O resultado é atualizado depois do tempo especificado quando rodado em produção</h2>
            <br /><br />
            <h3>{numero}</h3>
        </div>
    )
}