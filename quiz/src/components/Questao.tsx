import styles from '@/styles/Questao.module.css'
import MQuestao from '@/model/MQuestao'
import Enunciado from '@/components/Enunciado'
import Resposta from '@/components/Resposta'

interface IQuestaoProps {
    questao: MQuestao
}

export default function Questao(props: IQuestaoProps) {
    const { questao } = props

    function renderizarRespostas() {
        return questao.getRespostas().map((resposta, i) => {
            return (
                <Resposta
                    // key={`${questao.getId()}-${i}`}
                    key={questao.getId() % i * Math.random()}
                    resposta={resposta}
                    indice={i}
                    letra={String.fromCharCode(65 + i)}
                    corFundoLetra='#F2C866'
                />
            )
        })
    }

    return (
        <div className={styles.main}>
            <Enunciado enunciado={questao.getEnunciado()} />
            {renderizarRespostas()}
        </div>
    )
}