import { useEffect, useState } from 'react'
import Questionario from '@/components/Questionario'
import MQuestao from '@/model/MQuestao'
import MResposta from '@/model/MResposta'

const questaoExemplo = new MQuestao(203, 'Qual é o coletivo de cães?', [
    MResposta.errada('Manada'),
    MResposta.errada('Alcateia'),
    MResposta.errada('Rebanho'),
    MResposta.certa('Matilha'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Quiz() {
    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
    const [questao, setQuestao] = useState<MQuestao>(questaoExemplo)
    const [respostasCertas, setRespostasCertas] = useState<number>(0)

    async function carregarIdsDasQuestoes() {
        const res = await fetch(`${BASE_URL}/questionario`)
        const idsDasQuestoes = await res.json()
        setIdsDasQuestoes(idsDasQuestoes)
    }

    async function carregarQuestao(idQuestao: number) {
        const res = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
        const obj = await res.json()
        const novaQuestao = MQuestao.criarUsandoObjeto(obj)
        setQuestao(novaQuestao)
    }

    useEffect(() => {
        carregarIdsDasQuestoes()
    }, [])

    useEffect(() => {
        idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
    },[idsDasQuestoes])

    function questaoResposndida(questaoRespondida: MQuestao) {
        setQuestao(questaoRespondida)
        const acertou = questaoRespondida.getAcertou()
        setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    }

    function irPraProximoPasso() {}

    return (
		<div>
            <Questionario
                questao={questao}
                ultima={true}
                questaoRespondida={questaoResposndida}
                irPraProximoPasso={irPraProximoPasso}
            />
		</div>
	)
}
