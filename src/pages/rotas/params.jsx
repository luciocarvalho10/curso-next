import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
    const router = useRouter()

    const {id, nome} = router.query

    return (
        <div>
            <h1>Parâmentro na rota</h1>
            <h2>Paramentros: {id} / {nome}</h2>
            <Link href="/rotas">
                <button>Rotas</button>
            </Link>
        </div>
    )
}