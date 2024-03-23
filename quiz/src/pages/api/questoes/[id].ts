import { NextApiRequest, NextApiResponse } from 'next'
import MQuestao from '@/model/MQuestao'
import questoes from '@/pages/api/bancoDeQuestoes'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const enviarQuestao = (Q: MQuestao) =>
		res.status(200).json(Q.embaralharRespostas().paraObjeto())

	const id = Number(req.query.id)

	const questao: MQuestao[] = questoes.filter(
		questao => questao.getId() === id
	)

	questao.length === 1 ? enviarQuestao(questao[0]) : res.status(204).send//.send()
}