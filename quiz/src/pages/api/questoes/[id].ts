import questoes from '@/pages/api/bancoDeQuestoes'

export default function handler (req, res) {
    res.status(200).json(questoes[0].paraObjeto())
}