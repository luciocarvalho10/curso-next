export default function questao(req, res) {
    if (req.method === 'GET') {
        get(req, res)
    } else {
        res.status(405).send()
    }
}

function get(req, res) {
    res.status(200).json({
        id: req.query.id,
        enunciado: 'Qual é a sua cor preferida?',
        respostas: ['Azul', 'Vermelho', 'Verde', 'Amarelo', 'Preto', 'Branco'],
    })
}