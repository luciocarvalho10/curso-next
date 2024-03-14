import styles from '@/styles/Jogo.module.css'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Porta from '@/components/Porta'

import { criarPortas, atualizarPortas } from '@/functions/portas'

export default function Home() {
    const router = useRouter()

    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdPortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas
        setValido(qtdPortasValidas && temPresenteValido)
	}, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
		setPortas(criarPortas(portas, temPresente))
	}, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => (
            <Porta
                key={porta.numero}
                porta={porta}
                mudanca={novaPorta =>
                    setPortas(atualizarPortas(portas, novaPorta))
                }
            />
        ))
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                { valido ? renderizarPortas() : <h1>Valores inválidos</h1> }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}
