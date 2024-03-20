import questoes from '@/pages/api/bancoDeQuestoes'

export default function handler (req, res) {
    const enviarQuestao = Q => res.status(200).json(Q.paraObjeto())

    const id  = +req.query.id

    const questao = questoes.filter(questao => questao.id === id)

    questao.length === 1 ? enviarQuestao(questao[0]) : res.status(204).send()
}