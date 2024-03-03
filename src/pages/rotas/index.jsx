import Link from 'next/link'

export default function rotas() {
    return (
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href="/rotas/params?id=2&nome=Luciano">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/1/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/1/Lucio">
                    <li>Lucio</li>
                </Link>
            </ul>
        </div>
    )
}