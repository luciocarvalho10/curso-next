import styles from '@/styles/Porta.module.css'
import PortaModel from '@/model/PortaModel'

import Presente from '@/components/Presente'

interface IPortaProps {
    porta: PortaModel
    mudanca: (novaPorta: PortaModel) => void
}

export default function Porta(props: IPortaProps) {
    const {porta} = props
    const selecionada = porta?.getSelecionada() && !porta.getAberta() ? styles.selecionada : ''

    const alterarSelecao = e => props.mudanca(porta.alterarSelecao())
    const abrir = e => e.stopPropagation() || props.mudanca(porta.abrir())

    const renderizarPorta = () => (
        <div className={styles.porta}>
            <div className={styles.numero}>{porta?.getNumero()}</div>
            <div className={styles.macaneta} onClick={abrir}></div>
        </div>
    )

    const renderizarPresente = () => porta.getTemPresente() && <Presente />

    return (
        <div className={styles.area} onClick={alterarSelecao}>
        <div className={`${styles.estrutura} ${selecionada}`}>
            {porta.getFechada() ? renderizarPorta() : renderizarPresente()}
        </div>
            <div className={styles.chao}></div>
        </div>
    )
}