import style from '@/styles/Resposta.module.css'
import MResposta from '@/model/MResposta'

interface IRespostaProps {
	resposta: MResposta
	indice: number
	letra: string
	corFundoLetra: string
	respostaFornecida: (indice: number) => void
}
export default function Resposta(props: IRespostaProps) {
	const respostaRevelada = props.resposta.getRevelada()
		? style.respostaRevelada
		: ''

	return (
		<div
			className={style.cartao}
			onClick={() => props.respostaFornecida(props.indice)}>
			<div className={`${respostaRevelada} ${style.conteudo}`}>
				<div className={style.frente}>
					<div
						className={style.letra}
						style={{ backgroundColor: props.corFundoLetra }}>
						{props.letra}
					</div>
					<div className={style.resposta}>
						{props.resposta.getValor()}
					</div>
				</div>
				<div className={style.verso}>
					{props.resposta.getCerta() ? (
						<div className={style.certa}>
							<div>A reposta certa é...</div>
							<div className={style.resposta}>
								{props.resposta.getValor()}
							</div>
						</div>
					) : (
						<div className={style.errada}>
							<div>A reposta informada está errada...</div>
							<div className={style.resposta}>
								{props.resposta.getValor()}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
