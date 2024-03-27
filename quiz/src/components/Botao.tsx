import styles from '@/styles/Botao.module.css'
import Link from 'next/link'

interface IBotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: IBotaoProps) {
    function renderizarBotao() {
        return (
            <button
                className={styles.botao}
                onClick={props.onClick}
            >
                {props.texto}
            </button>
        )
    }

    return  props.href
        ? <Link href={props.href}>{renderizarBotao()}</Link>
        : renderizarBotao()
}