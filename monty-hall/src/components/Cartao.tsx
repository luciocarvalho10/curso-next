import styles from '@/styles/Cartao.module.css'

interface ICartaoProps {
    corFundo?: string
    children?: any
}

export default function Cartao(props: ICartaoProps) {
    return (
        <div
            className={styles.cartao}
            style={{backgroundColor: props.corFundo ?? '#fff'}}
        >
            {props.children}
        </div>
    )
}