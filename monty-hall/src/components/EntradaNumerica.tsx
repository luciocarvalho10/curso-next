import styles from '@/styles/EntradaNumerica.module.css'

interface IEntradaNumericaProps {
    texto: string
    valor: number
    trocar: (novaQtd: number) => void
}

export default function EntradaNumerica(props: IEntradaNumericaProps){
    const dec = valor => props.trocar(props.valor - 1)
    const inc = valor => props.trocar(props.valor + 1)

    return (
		<div className={styles.entradaNumerica}>
			<span className={styles.texto}>{props.texto}</span>
			<span className={styles.valor}>{props.valor}</span>
            <div className={styles.botoes}>
                <button className={styles.botao} onClick={dec}>-</button>
                <button className={styles.botao} onClick={inc}>+</button>
            </div>
		</div>
	)
}