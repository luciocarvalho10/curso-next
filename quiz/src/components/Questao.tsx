import styles from '@/styles/Questao.module.css'
import MQuestao from '@/model/MQuestao'
import Enunciado from '@/components/Enunciado'
import Resposta from '@/components/Resposta'
import Temporizador from '@/components/Temporizador'

interface IQuestaoProps {
    tempoParaResposta?: number
    questao: MQuestao
    respostaFornecida: (indice: number) => void
    tempooEsgotado: () => void
}

const corFundoLetras: { [index: string]: string } = {
    A: '#f2d96d',
    B: '#a9efef',
    C: '#f29d9d',
    D: '#9de0f2',
}

const letra = (letra: number): string => String.fromCharCode(65 + letra)

export default function Questao(props: IQuestaoProps) {
    const { questao } = props

    function renderizarRespostas() {
		return questao.getRespostas().map((resposta, i) =>
            <Resposta
                key={(questao.getId() % i) * Math.random()}
                resposta={resposta}
                indice={i}
                letra={letra(i)}
                corFundoLetra={corFundoLetras[letra(i)]}
                respostaFornecida={props.respostaFornecida}
            />
		)
	}

    return (
		<div className={styles.main}>
			<Enunciado enunciado={questao.getEnunciado()} />
			<Temporizador
				duracao={props.tempoParaResposta ?? 10}
				tempoEsgotado={props.tempooEsgotado}
			/>
			{renderizarRespostas()}
		</div>
	)
}