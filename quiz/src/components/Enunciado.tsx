import style from '@/styles/Enunciado.module.css'

interface IEnunciadoProps {
    enunciado: string
}

export default function Enunciado(props: IEnunciadoProps) {
    return (
        <div className={style.main}>
            <span className={style.enunciado}>
                {props.enunciado}
            </span>
        </div>
    )
}