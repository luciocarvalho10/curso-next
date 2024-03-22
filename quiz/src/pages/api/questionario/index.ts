import questoes from "@/pages/api/bancoDeQuestoes"
import { embaralhar } from "@/functions/arrays"

export default (req, res) =>
	res.status(200).json(embaralhar(questoes.map(q => q.id)))