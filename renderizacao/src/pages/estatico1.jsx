import { useEffect, useState } from 'react'

export default function Estatico1() {
    const [numero, setNumero] = useState(0)

    useEffect(() => {
        setNumero(Math.random())
    }, [])

    return (
        <div>
            <h1>Estático #1</h1>

            <h2>Não gera erro no browser</h2>
            <h3>{numero}</h3>
            <button onClick={() => setNumero(Math.random())}>Alterar</button>

            <br /><br />
            <h2>Gera erro no browser</h2>
            <h3>{Math.random()}</h3>

            <br /><br />
            <h4>Ao clicar no botão o elemento é recarregado, resultando na atualização de ambos os números</h4>
        </div>
    )
}