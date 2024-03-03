import { useRouter } from 'next/router'

export default function params() {
    const router = useRouter()

    const {id, nome} = router.query

    return (
        <div>
            <h1>Parâmentro na rota</h1>
            <h2>Paramentros: {id} / {nome}</h2>
        </div>
    )
}