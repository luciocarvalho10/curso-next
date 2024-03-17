export async function getStaticPaths() {
    const response = await fetch(`http://localhost:3000/api/alunos/tutores`)
    const tutores = await response.json()

    const paths = tutores.map(id => ({ params: { id: `${id}` } }))

    return {
        paths,
        fallback: true
        // fallback: false //gera página 404
    }
}

export async function getStaticProps({params}) {
    const response = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await response.json()
    return {
        props: {
            aluno
        }
    }
}

export default function AlunoPorId({ aluno }) {
    const renderizarAluno = () =>
        aluno ? //condicional usado quando fallback for true
            <ul>
                <li>Id: {aluno.id}</li>
                <li>Nome: {aluno.nome}</li>
                <li>Email: {aluno.email}</li>
            </ul>
        : false

    return (
        <div>
            <h1>Aluno por ID</h1>
            <br /><br />
            <h3>{renderizarAluno()}</h3>
        </div>
    )
}