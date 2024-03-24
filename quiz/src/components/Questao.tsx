import styles from '@/styles/Questao.module.css'
import MQuestao from '@/model/MQuestao'

interface QuestaoProps {
    questao: MQuestao
}

export default function Questao(props: QuestaoProps) {
    const { questao } = props

    return (
        <div className={styles.questao}>
            <h1>Questão</h1>
        </div>
    )
}