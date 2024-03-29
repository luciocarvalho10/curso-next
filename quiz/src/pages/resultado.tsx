import { useRouter } from 'next/router'
import styles from '@/styles/Resultado.module.css'
import Estatistica from '@/components/Estatistica'
import Botao from '@/components/Botao'

export default function Resultado() {
    const router: any = useRouter()

    const perguntas = +router.query.perguntas
    const certas = +router.query.certas
    const percentual = Math.round((certas / perguntas ) * 100)

    return (
		<div className={styles.main}>
			<h1>Resultado Final</h1>
			<div className={styles.resultado}>
				<Estatistica
					texto='Perguntas'
					valor={perguntas}
				/>
				<Estatistica
					texto='Certas'
					valor={certas}
                    corFundo='#9cd2a4'
				/>
				<Estatistica
					texto='Percentual'
					valor={`${percentual}%`}
                    corFundo='#de6a33'
				/>
			</div>
			<Botao
				href='/'
				texto='Reiniciar'
			/>
		</div>
	)
}