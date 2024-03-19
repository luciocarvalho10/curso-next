export default class MResposta {
    private valor: string
    private certa: boolean
    private revelada: boolean

    /**
     * Constructor for creating a new instance of the class.
     *
     * @param {string} valor - the value parameter
     * @param {boolean} certa - the certa parameter
     * @param {boolean} revelada - the revelada parameter
     *
     * This code defines a constructor called Resposta that takes in three parameters: valor (a string), certa (a boolean), and revelada (a boolean). The constructor assigns these values to the corresponding properties of the object.
     */
    constructor(
        valor: string,
        certa: boolean,
        revelada = false
    ) {
        this.valor = valor
        this.certa = certa
        this.revelada = revelada
    }

    /**
     * Creates a new MResposta object with the given valor and sets its status to true.
     *
     * @param {string} valor - the value to be set in the MResposta object
     * @return {MResposta} the newly created MResposta object
     *
     * This code defines a function called certa that takes in a string value and returns a MResposta object. The function sets the 'certa' property of the object to true.
     */
    static certa(valor: string): MResposta {
        return new MResposta(valor, true)
    }

    /**
     * A description of the entire function.
     *
     * @param {string} valor - description of parameter
     * @return {MResposta} description of return value
     *
     * This code defines a function called errada that takes in a string value and returns a MResposta object. The function sets the 'certa' property of the object to false.
     */
    static errada(valor: string): MResposta {
        return new MResposta(valor, false)
    }


    /**
     * Get the value.
     *
     * @return {string} the value
     *
     * This code defines a function called getValor that returns a string value. The function does not take any parameters.
     */
    getValor(): string {
        return this.valor
    }

    /**
     * A description of the entire function.
     *
     * @return {boolean} description of return value
     *
     * This code defines a function called getCerta that returns a boolean value. The function does not take any parameters.
     */
    getCerta(): boolean {
        return this.certa
    }

    /**
     * Get the value of the 'revelada' property.
     *
     * @return {boolean} The value of the 'revelada' property.
     *
     * This code defines a function called getRevelada that returns a boolean value. The function does not take any parameters.
     */
    getRevelada(): boolean {
        return this.revelada
    }

    paraObjetos() {
        return {
            valor: this.getValor(),
            certa: this.getCerta(),
            revelada: this.getRevelada()
        }
    }
}