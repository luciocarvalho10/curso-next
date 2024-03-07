import { useState, useEffect } from 'react'

export default function questao() {
    const [questao, setQuestao] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/1')
            .then(res => res.json())
            .then(setQuestao)
    }, [])

    function respostas() {
        if(questao) return questao.respostas?.map(
            (resposta, i) => <li key={i}>{i+1} - {resposta}</li>
        )
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao.id} - {questao?.enunciado}</span>
                <ul>
                    {respostas()}
                </ul>
            </div>
        </div>
    )
}