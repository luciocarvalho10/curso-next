import {useRouter} from 'next/router'
import Link from 'next/link'

export default function buscar(){
    const router = useRouter()
    const {codigo} = router.query

    return (
        <div>
            <h1>Parâmentro na pasta</h1>
            <h2>rotas / {codigo} / Buscar</h2>
            <Link href="/rotas">
                <button>Rotas</button>
            </Link>
        </div>
    )
}