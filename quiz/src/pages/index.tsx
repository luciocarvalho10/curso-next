import { useState } from 'react'
import Questionario from '@/components/Questionario'
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

    function questaoResposndida(questao: MQuestao) {}

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
