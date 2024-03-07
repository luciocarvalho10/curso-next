import { useState } from 'react'

export default function form() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvarUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({ nome, idade })
        })

        setNome('')
        setIdade(0)

        await fetch('/api/form')
            .then(res => res.json())
            .then(setUsuarios)
    }

    function renderizarUsuarios(){
        return usuarios.map(
            ({ nome, idade }, i) => <li key={i}>{nome} - {idade}</li>
        )
    }

    return (
        <div>
            <h1>'Integrando com API #02'</h1>
            <input
                value={nome}
                type='text'
                onChange={e => setNome(e.target.value)}
            />
            <input
                value={idade}
                type='number'
                onChange={e => setIdade(e.target.value)}
            />
            <button onClick={salvarUsuario}>
                Enviar
            </button>

            <h3>Usuários</h3>
            <ul>{renderizarUsuarios()}</ul>
        </div>
    )
}