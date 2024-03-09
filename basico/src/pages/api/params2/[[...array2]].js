export default function params(req, res) {
    res.status(200).json({
        info: 'Não é obrigatório informar os parâmetros',
        params: req.query,
    })
}