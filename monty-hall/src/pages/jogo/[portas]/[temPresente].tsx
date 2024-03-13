import styles from '@/styles/Jogo.module.css'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Porta from '@/components/Porta'

import { criarPortas, atualizarPortas } from '@/functions/portas'

export default function Home() {
    const router = useRouter()

    const [portas, setPortas] = useState([])

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
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}
