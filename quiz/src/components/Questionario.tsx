import style from '@/styles/Questionario.module.css'
import MQuestao from '@/model/MQuestao'
import Questao from '@/components/Questao'
import Botao from '@/components/Botao'

interface IQuestionarioProps {
	questao: MQuestao
    ultima: boolean
	questaoRespondida: (questao: MQuestao) => void
	irPraProximoPasso: () => void
}

export default function Questionario(props: IQuestionarioProps) {

    function respostaFornecida(indice: number) {
        if(props.questao.getNaoRespondida()) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={style.questionario}>
            {
                props.questao ?
                <Questao
                    questao={props.questao}
                    tempoParaResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irPraProximoPasso}
                />
                : false
            }

            <Botao onClick={props.irPraProximoPasso} texto={props.ultima ? 'Finalizar' : 'Proximo'} />
        </div>
    )
}