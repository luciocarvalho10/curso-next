import Questao from '@/components/Questao'
import MQuestao from '@/model/MQuestao'
import MResposta from '@/model/MResposta'

export default function Quiz() {
    const questao = new MQuestao(203, 'Qual é o coletivo de cães?', [
		MResposta.errada('Manada'),
		MResposta.errada('Alcateia'),
		MResposta.errada('Rebanho'),
		MResposta.certa('Matilha'),
	])
    return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
        >
			<Questao questao={questao} />
		</div>
	)
}
