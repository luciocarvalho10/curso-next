import { NextApiRequest, NextApiResponse } from 'next'
import questoes from '@/pages/api/bancoDeQuestoes'
import { embaralhar } from '@/functions/arrays'

export default function questionario(req: NextApiRequest, res: NextApiResponse){
	return res.status(200).json(embaralhar(questoes.map(q => q.getId())))
}
