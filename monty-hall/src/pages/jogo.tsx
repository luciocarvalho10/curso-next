import styles from '@/styles/Jogo.module.css'
import { useState } from 'react'
import Link from 'next/link'

import Porta from '@/components/Porta'

import { criarPortas, atualizarPortas } from '@/functions/portas'

export default function Home() {
    const [portas, setPortas] = useState(criarPortas(4, 1))

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
