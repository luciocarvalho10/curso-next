import styles from '@/styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface ITemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: ITemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#f7b801', '#ED827A']}
                colorsTime={[+`${props.duracao}`, +`${props.duracao/2}`, 0]}
                children={({ remainingTime }) => remainingTime}
            />
        </div>
    )
}