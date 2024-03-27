import { useState } from 'react'
import Questao from '@/components/Questao'
import MQuestao from '@/model/MQuestao'
import MResposta from '@/model/MResposta'

const questaoExemplo = new MQuestao(203, 'Qual é o coletivo de cães?', [
    MResposta.errada('Manada'),
    MResposta.errada('Alcateia'),
    MResposta.errada('Rebanho'),
    MResposta.certa('Matilha'),
])

export default function Quiz() {
    const [questao, setQuestao] = useState(questaoExemplo)

    function respostaFornecida(indice: number) {
        setQuestao(questao.responderCom(indice))
    }

    function tempooEsgotado() {
        if (questao.getNaoRepondida()) {
            setQuestao(questao.responderCom(-1))
        }
    }

    return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<Questao
				questao={questao}
                tempoParaResposta={5}
				respostaFornecida={respostaFornecida}
				tempooEsgotado={tempooEsgotado}
			/>
		</div>
	)
}
