import Botao from '@/components/Botao'

export default function Resultado() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <h1>Parabéns!</h1>
            {/* <span>Voce acertou 80% das questões</span> */}
            <Botao href='/' texto='Reiniciar' />
        </div>
    )
}