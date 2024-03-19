import MResposta from '@/model/MResposta'

export default class MQuestao {
	private id: number
	private enunciado: string
	private respostas: MResposta[]
	private acertou: boolean

	/**
	 * A constructor for initializing the id, enunciado, respostas, and acertou properties.
	 *
	 * @param {number} id - the id for the object
	 * @param {string} enunciado - the statement/question description
	 * @param {MResposta[]} respostas - an array of possible answers
	 * @param {boolean} acertou - indicates if the answer is correct (default is false)
	 *
	 * This code snippet is a TypeScript constructor function that initializes the properties of an object. It takes in four parameters: id (a number), enunciado (a string), respostas (an array of MResposta objects), and acertou (a boolean with a default value of false). The constructor assigns these values to the corresponding properties of the object.
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
	 * A description of the entire function.
	 *
	 * @param {type} paramName - description of parameter
	 * @return {type} description of return value
	 *
	 * This code defines a function called getId that returns a number value. The function does not take any parameters.
	 */
	getId(): number {
		return this.id
	}

	/**
	 * Get the enunciado value.
	 *
	 * @return {string} the enunciado value
     *
     * This code defines a function called getEnunciado that returns a string value. The function does not take any parameters.
	 */
	getEnunciado(): string {
		return this.enunciado
	}

	/**
	 * Get the responses.
	 *
	 * @return {MResposta[]} The responses array.
     *
     * This code defines a function called getRespostas that returns an array of MResposta objects. The function does not take any parameters.
	 */
	getRespostas(): MResposta[] {
		return this.respostas
	}

	/**
	 * A description of the entire function.
	 *
	 * @return {boolean} description of return value
     *
     * This code defines a function called getAcertou that returns a boolean value. The function does not take any parameters.
	 */
	getAcertou(): boolean {
		return this.acertou
	}

	/**
	 * Returns true if any resposta in this.respostas is revealed, otherwise returns false.
	 *
	 * @return {boolean} true if any resposta is revealed, otherwise false
     *
     * This code defines a function called getRepondida that returns a boolean value. The function does not take any parameters.
	 */
	getRepondida(): boolean {
		for (let resposta of this.respostas) {
			if (resposta.getRevelada()) return true
		}
		return false
	}

    paraObjeto(){
        return {
            id: this.getId(),
            enunciado: this.getEnunciado(),
            respostas: this.respostas.map(resposta => resposta.paraObjeto()),
            acertou: this.getAcertou()
        }
    }
}