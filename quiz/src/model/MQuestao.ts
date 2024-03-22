import { embaralhar } from "@/functions/arrays"
import MResposta from '@/model/MResposta'

/**
 * Uma classe que representa uma questão em um quiz.
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
		for (let resposta of this.respostas) {
			if (resposta.getRevelada()) return true
		}
		return false
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
	// Nesse projeto funciona sem o paraObjetos
	paraObjeto() {
		return {
			id: this.getId(),
			enunciado: this.getEnunciado(),
			respostas: this.getRespostas(),
			acertou: this.getAcertou(),
			// Não funciona
			// respostas: this.respostas.map(resposta => resposta.paraObjeto()),
		}
	}
}