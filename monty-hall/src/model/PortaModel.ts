export default class PortaModel {
    private numero: number
    private temPresente: boolean
    private selecionada: boolean
    private aberta: boolean

    constructor(
        numero: number,
        temPresente = false,
        selecionada = false,
        aberta = false
    ) {
        this.numero= numero
        this.temPresente= temPresente
        this.selecionada = selecionada
        this.aberta = aberta
    }

    getNumero() {
        return this.numero
    }

    getTemPresente() {
        return this.temPresente
    }

    getSelecionada() {
        return this.selecionada
    }

    getAberta() {
        return this.aberta
    }

    getFechada() {
        return !this.aberta
    }

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alterarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}