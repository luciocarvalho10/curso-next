export default function handler(req, res) {
	res.status(200).json([
		{ id: 1, nome: 'Notebook', preco: 2599.99 },
		{ id: 2, nome: 'Smartphone', preco: 1999.99 },
		{ id: 3, nome: 'Tablet', preco: 899.99 },
		{ id: 4, nome: 'Teclado', preco: 89.99 },
		{ id: 5, nome: 'Mouse', preco: 59.99 },
	])
}
