import { embaralhar } from "@/functions/arrays"
import MResposta from '@/model/MResposta'

/**
 * Este código TypeScript define uma classe MQuestao que representa uma questão em um quiz.
 * A classe possui as seguintes propriedades: id (number), enunciado (string), respostas (array de MResposta), e acertou (booleano).
 *
 * A classe possui vários métodos:
 *
 * Construtor: Este método é usado para criar uma nova instância da classe MQuestao.
 * Ele recebe quatro parâmetros: id (number), enunciado (string), respostas (array de MResposta), e acertou (booleano).
 * Ele atribui esses valores às respectivas propriedades do objeto.
 *
 * getId(): number:
 * Este método retorna o valor da propriedade id.
 *
 * getEnunciado(): string:
 * Este método retorna o valor da propriedade enunciado.
 *
 * getRespostas(): MResposta[]:
 * Este método retorna o valor da propriedade respostas.
 *
 * getAcertou(): boolean:
 * Este método retorna o valor da propriedade acertou.
 *
 * getRepondida(): boolean:
 * Este método retorna true se alguma resposta no array respostas estiver revelada, caso contrário, retorna false.
 *
 * responderCom(indice: number): MQuestao:
 * Este método permite responder à questão com base no índice fornecido.
 *
 * embaralharRespostas(): MQuestao:
 * Este método embaralha as respostas da questão e retorna uma nova instância de MQuestao.
 *
 * paraObjeto(): Object:
 * Este método converte o objeto MQuestao para um objeto JavaScript padrão.
 */
export default class MQuestao {
	private id: number
	private enunciado: string
	private respostas: MResposta[]
	private acertou: boolean

	/**
	 * Construtor para inicializar as propriedades id, enunciado, respostas e acertou.
	 *
	 * @param {number} id - o id da questão
	 * @param {string} enunciado - a descrição/pergunta do enunciado
	 * @param {MResposta[]} respostas - um array de possíveis respostas
	 * @param {boolean} acertou - indica se a resposta está correta (padrão é false)
	 *
	 * Este trecho de código é uma função construtora em TypeScript que inicializa as propriedades de um objeto. Ela recebe quatro parâmetros: id (um número), enunciado (uma string), respostas (um array de objetos MResposta) e acertou (um booleano com um valor padrão de false). A função atribui esses valores às respectivas propriedades do objeto.
	 */
	constructor(
		id: number,
		enunciado: string,
		respostas: MResposta[],
		acertou = false
	) {
		this.id = id
		this.enunciado = enunciado
		this.respostas = respostas
		this.acertou = acertou
	}

	/**
	 * Retorna o id da questão.
	 *
	 * @return {number} O id da questão.
	 *
	 * Este trecho de código define uma função chamada getId que retorna um valor numérico. A função não recebe nenhum parâmetro.
	 */
	getId(): number {
		return this.id
	}

	/**
	 * Retorna o enunciado da questão.
	 *
	 * @return {string} O enunciado da questão.
	 *
	 * Este trecho de código define uma função chamada getEnunciado que retorna um valor string. A função não recebe nenhum parâmetro.
	 */
	getEnunciado(): string {
		return this.enunciado
	}

	/**
	 * Retorna o array de respostas da questão.
	 *
	 * @return {MResposta[]} O array de respostas da questão.
	 *
	 * Este trecho de código define uma função chamada getRespostas que retorna um array de objetos MResposta. A função não recebe nenhum parâmetro.
	 */
	getRespostas(): MResposta[] {
		return this.respostas
	}

	/**
	 * Retorna se a questão foi respondida corretamente.
	 *
	 * @return {boolean} True se a questão foi respondida corretamente, caso contrário, false.
	 *
	 * Este trecho de código define uma função chamada getAcertou que retorna um valor booleano. A função não recebe nenhum parâmetro.
	 */
	getAcertou(): boolean {
		return this.acertou
	}

	/**
	 * Retorna true se alguma resposta no array respostas estiver revelada, caso contrário, retorna false.
	 *
	 * @return {boolean} True se alguma resposta estiver revelada, caso contrário, false.
	 *
	 * Este trecho de código define uma função chamada getRepondida que retorna um valor booleano. A função não recebe nenhum parâmetro.
	 */
	getRepondida(): boolean {
		for (let resposta of this.getRespostas()) {
			if (resposta.getRevelada()) return true
		}
		return false
	}

    /**
     * Permite ao usuário responder a uma questão com base no índice da resposta escolhida.
     * Atualiza a questão com as respostas reveladas e marca a questão como acertada ou não.
     *
     * @param {number} indice - O índice da resposta escolhida pelo usuário.
     * @return {MQuestao} Uma nova instância de MQuestao com as respostas atualizadas e o estado de acerto correspondente.
     */
    responderCom(indice: number): MQuestao {
        const acertou = this.respostas[indice]?.certa
        const respostas = this.respostas.map((resposta, i) =>
            indice === i || resposta.certa ? resposta.revelar() : resposta
        )
        return new MQuestao(this.getId(), this.getEnunciado(), respostas, acertou)
    }

    /**
     * Embaralha as respostas da questão e retorna uma nova instância de MQuestao.
     *
     * @return {MQuestao} Uma nova instância de MQuestao com as respostas embaralhadas.
     */
    embaralharRespostas(): MQuestao {
        let respostasEmbaralhadas = embaralhar(this.respostas)
        return new MQuestao(this.id, this.enunciado, respostasEmbaralhadas, this.acertou)
    }

	/**
	 * Converte o objeto MQuestao para um objeto JavaScript padrão.
	 *
	 * @return {Object} Um objeto JavaScript padrão representando o objeto MQuestao.
	 *
	 * Este trecho de código define uma função chamada `paraObjeto` que converte a instância atual da classe `MQuestao` para um objeto JavaScript padrão. A função retorna um objeto com as propriedades `id`, `enunciado` e `respostas`, que correspondem aos valores respectivos das propriedades do objeto `MQuestao`.
	 */
	paraObjeto() {
		return {
            id: this.getId(),
			acertou: this.getAcertou(),
            respondida: this.getRepondida(),
			enunciado: this.getEnunciado(),
			respostas: this.respostas.map(resposta => resposta.paraObjeto()),
		}
	}
}
