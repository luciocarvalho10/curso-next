import Link from 'next/link'
import router from 'next/router'

const routes = {
    params: '/rotas/params?id=2&nome=Luciano',
    buscar: '/rotas/1/buscar',
    lucio: '/rotas/1/Lucio'
}

export default function rotas() {

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams(){
        router.push({
            pathname: '/rotas/params',
            query: {
                id: 2,
                nome: 'Luciano'
            }
        })
    }

    return (
        <div>
            <h1>Rotas</h1>
            <ul>
                <Link href={routes.params}>
                    <li>Params</li>
                </Link>
                <Link href={routes.buscar}>
                    <li>Buscar</li>
                </Link>
                <Link href={routes.lucio}>
                    <li>Lucio</li>
                </Link>
            </ul>
            <div>
                <button onClick={navegacaoComParams}>Params</button>
                <button onClick={() => router.push(routes.params)}>Buscar</button>
                <button onClick={() => navegacaoSimples(routes.lucio)}>Lucio</button>
            </div>
        </div>
    )
}