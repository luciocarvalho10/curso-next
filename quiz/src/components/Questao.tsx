import styles from '@/styles/Questao.module.css'
import MQuestao from '@/model/MQuestao'
import Enunciado from '@/components/Enunciado'

interface IQuestaoProps {
    questao: MQuestao
}

export default function Questao(props: IQuestaoProps) {
    const { questao } = props

    return (
        <div className={styles.main}>
            <Enunciado enunciado={questao.getEnunciado()} />
        </div>
    )
}