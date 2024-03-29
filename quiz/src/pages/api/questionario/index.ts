import { NextApiRequest, NextApiResponse } from 'next'
import questoes from '@/pages/api/bancoDeQuestoes'
import { embaralhar } from '@/functions/arrays'

export default (req: NextApiRequest, res: NextApiResponse) =>
	res.status(200).json(embaralhar(questoes.map(q => q.getId())))
