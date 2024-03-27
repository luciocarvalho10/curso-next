import styles from '@/styles/Questao.module.css'
import MQuestao from '@/model/MQuestao'
import Enunciado from '@/components/Enunciado'
import Resposta from '@/components/Resposta'

interface IQuestaoProps {
    questao: MQuestao
    respostaFornecida: (indice: number) => void
}

function gerarCorHexadecimal() {
	let cor = '#'
	for (let i = 0; i < 6; i++) {
		const valor = Math.floor(Math.random() * 16)
		cor += valor.toString(16)
	}
	return cor
}

export default function Questao(props: IQuestaoProps) {
    const { questao } = props

    function renderizarRespostas() {
		return questao.getRespostas().map((resposta, i) =>
            <Resposta
                key={(questao.getId() % i) * Math.random()}
                resposta={resposta}
                indice={i}
                letra={String.fromCharCode(65 + i)}
                corFundoLetra={gerarCorHexadecimal()}
                respostaFornecida={props.respostaFornecida}
            />
		)
	}

    return (
        <div className={styles.main}>
            <Enunciado enunciado={questao.getEnunciado()} />
            {renderizarRespostas()}
        </div>
    )
}