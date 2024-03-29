import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Questionario from '@/components/Questionario'
import MQuestao from '@/model/MQuestao'

const BASE_URL = 'http://localhost:3000/api'

export default function Quiz() {
    const router = useRouter()

    const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
    const [questao, setQuestao] = useState<MQuestao>()
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

    function idProximaPergunta() {
        if (questao) {
			const proximoIndice = idsDasQuestoes.indexOf(questao.getId()) + 1
			return idsDasQuestoes[proximoIndice]
		}
    }

    function irPraProximoPasso() {
        const proximoId = idProximaPergunta()
        proximoId ? irPraProximaQuestao(proximoId) : finalizar()
    }

    function irPraProximaQuestao(proximoId: number) {
        carregarQuestao(proximoId)
    }

    function finalizar() {
        router.push({
            pathname: '/resultado',
            query: {
                total: idsDasQuestoes.length,
                certas: respostasCertas
            }
        })
    }

    return questao ? (
        <Questionario
            questao={questao}
            ultima={idProximaPergunta() === undefined}
            questaoRespondida={questaoResposndida}
            irPraProximoPasso={irPraProximoPasso}
        />
    ) : false
}
