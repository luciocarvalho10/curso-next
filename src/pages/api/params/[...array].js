export default function params(req, res) {
    res.status(200).json({
        info: 'Obrigatório informar os parâmetros',
        params: req.query,
    })
}