export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2({ numero }) {
    return (
        <div>
            <h1>Estático #2</h1>

            <h2>Não gera erro no browser</h2>
            <h2>Pois está usando a função getStaticProps</h2>
            <h2>O resultado fica estático quando rodado em produção</h2>
            <br /><br />
            <h3>{numero}</h3>
        </div>
    )
}