function numeroAleatorio(min = 1, max = 100000) {
    return Math.floor(Math.random() * (max - min) + min)
}

export default function handler(req, res) {
	res.status(200).json([
		{ id: numeroAleatorio(), nome: 'Mouse', preco: 59.99 },
        { id: numeroAleatorio(), nome: 'Tablet', preco: 899.99 },
		{ id: numeroAleatorio(), nome: 'Teclado', preco: 89.99 },
		{ id: numeroAleatorio(), nome: 'Notebook', preco: 2599.99 },
        { id: numeroAleatorio(), nome: 'Smartphone', preco: 1999.99 },
	])
}
