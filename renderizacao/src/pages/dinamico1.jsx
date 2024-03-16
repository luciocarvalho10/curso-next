export async function getServerSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1({ numero }) {
    return (
        <div>
            <h1>Dinâmico #1</h1>
            <h2>{numero}</h2>
        </div>
    )
}