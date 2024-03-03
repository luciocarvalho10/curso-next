import {useRouter} from 'next/router'
import Link from 'next/link'

export default function nome(){
    const router = useRouter()
    const {codigo, nome} = router.query

    return (
        <div>
            <h1>Parâmentro na pasta e no arquivo</h1>
            <h2>
                rotas / {codigo} / {nome}
            </h2>
            <Link href="/rotas">
                <button>Rotas</button>
            </Link>
        </div>
    )
}