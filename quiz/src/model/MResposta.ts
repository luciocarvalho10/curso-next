/**
 * Este código TypeScript define uma classe MResposta que representa uma resposta.
 * A classe possui as seguintes propriedades: valor (string), certa (booleana) e revelada (booleana).
 *
 * A classe possui vários métodos:
 *
 * Construtor: Este método é usado para criar uma nova instância da classe MResposta.
 * Ele recebe três parâmetros: valor (string), certa (booleana) e revelada (booleana).
 * Ele atribui esses valores às respectivas propriedades do objeto.
 *
 * static certa(valor: string): MResposta:
 * Este método estático cria um novo objeto MResposta com o valor fornecido e define
 * seu status certa como true.
 *
 * static errada(valor: string): MResposta:
 * Este método também cria um novo objeto MResposta, mas define seu status certa como false.
 *
 * getValor(): string:
 * Este método retorna o valor da propriedade valor.
 *
 * getCerta(): boolean:
 * Este método retorna o valor da propriedade certa.
 *
 * getRevelada(): boolean:
 * Este método também retorna o valor da propriedade revelada.
 *
 * paraObjetos():
 * Este método retorna um objeto com as propriedades valor, certa e revelada.
 * Observação: O método paraObjetos() está comentado com uma nota dizendo que não é
 * usado neste projeto.
 */
export default class MResposta {
    private valor: string
    private certa: boolean
    private revelada: boolean

    /**
     * Construtor para criar uma nova instância da classe.
     *
     * @param {string} valor - o valor do parâmetro
     * @param {boolean} certa - o valor do parâmetro
     * @param {boolean} revelada - o valor do parâmetro
     *
     * Esta função cria um construtor chamado Resposta que recebe três parâmetros: valor (uma string), certa (um boolean) e revelada (um boolean). O construtor atribui esses valores às propriedades correspondentes do objeto.
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
     * Cria um novo objeto MResposta com o valor passado e define sua status como true.
     *
     * @param {string} valor - o valor a ser setado no objeto MResposta
     * @return {MResposta} o objeto MResposta criado
     *
     * Esta função define certa como true.
     */
    static certa(valor: string): MResposta {
        return new MResposta(valor, true)
    }

    /**
     * Define certa como false.
     *
     * @param {string} valor - o valor a ser setado no objeto MResposta
     * @return {MResposta} o objeto MResposta criado
     */
    static errada(valor: string): MResposta {
        return new MResposta(valor, false)
    }


    /**
     * Retorna o valor.
     *
     * @return {string} o valor
     */
    getValor(): string {
        return this.valor
    }

    /**
     * Retorna o valor da propriedade 'certa'.
     *
     * @return {boolean} o valor da propriedade 'certa'
     */
    getCerta(): boolean {
        return this.certa
    }

    /**
     * Retorna o valor da propriedade 'revelada'.
     *
     * @return {boolean} o valor da propriedade 'revelada'
     */
    getRevelada(): boolean {
        return this.revelada
    }

    /**
     * Revela o objeto MResposta criando uma nova instância com o mesmo valor e propriedades certas,
     * e configurando o sinalizador de revelação como verdadeiro.
     *
     * @return {MResposta} O objeto MResposta revelado.
     */
    revelar() {
        return new MResposta(this.getValor(), this.getCerta(), true)
    }

    /**
     * Gera um objeto com as propriedades valor, certa e revelada.
     *
     * @return {object} Um objeto com as propriedades valor, certa e revelada
     */

    // Nesse projeto funciona sem o paraObjetos
    paraObjeto() {
        return {
            valor: this.valor,
            certa: this.certa,
            revelada: this.revelada,
        }
    }
}