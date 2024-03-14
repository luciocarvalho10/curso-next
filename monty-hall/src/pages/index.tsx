import styles from '@/styles/Formulario.module.css'
import Cartao from '@/components/Cartao'
import EntradaNumerica from '@/components/EntradaNumerica'

import { useState } from 'react'
import Link from 'next/link'

export default function Formulario() {
    const [qtdPortas, setQtdPortas] = useState(3)
    const [portaComPresente, setPortaComPresente] = useState(1)

    return (
		<div className={styles.formulario}>
			<div>
				<Cartao corFundo='#c0392c'>
					<h1>Monty Hall</h1>
				</Cartao>
				<Cartao>
					<EntradaNumerica
						texto={'Quantas portas? '}
						valor={qtdPortas}
						trocar={novaQtd => setQtdPortas(novaQtd)}
					/>
				</Cartao>
			</div>

			<div>
				<Cartao>
					<EntradaNumerica
						texto={'Porta com Presente'}
						valor={portaComPresente}
						trocar={novaPortaComPresente => setPortaComPresente(novaPortaComPresente)}
					/>
				</Cartao>
				<Cartao corFundo='#28a085'>
					<Link
						href={`/jogo/${qtdPortas}/${portaComPresente}`}
						className={styles.link}>
						<h2>Iniciar</h2>
					</Link>
				</Cartao>
			</div>
		</div>
	)
}