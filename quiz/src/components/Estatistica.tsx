import styles from '@/styles/Estatistica.module.css'

interface IEstatisticaProps {
    valor: string | number
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica(props: IEstatisticaProps) {
    return (
		<div className={styles.main}>
			<div
				className={styles.valor}
				style={{
					backgroundColor: props.corFundo ?? '#FDD60F',
					color: props.corFonte ?? '#333',
				}}>
				{Number.isNaN(props.valor) ? 0 : props.valor}
			</div>

            <div className={styles.texto}>
                <span>{props.texto}</span>
            </div>

		</div>
	)
}