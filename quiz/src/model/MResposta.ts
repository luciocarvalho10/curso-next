export default class MResposta {
    private valor: string
    private certa: boolean
    pirvate revelada: boolean

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
        certa: boolean
        revelada = false
    ) {
        this.valor = valor
        this.certa = certa
        this.revelada = revelada
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

}