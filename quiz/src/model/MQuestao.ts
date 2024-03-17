export default class MQuestao {
    private id: number
    private enunciado: string
    private respostas: any[]
    private acertou: boolean
    // private respondida: boolean

    constructor(
        id: number,
        enunciado: string,
        respostas: any[],
        acertou = false
    ) {
        this.id = id
        this.enunciado = enunciado
        this.respostas = respostas
        this.acertou = acertou
    }

    getId(): number {
        return this.id
    }

    getEnunciado(): string {
        return this.enunciado
    }

    getRespostas(): any[] {
        return this.respostas
    }

    getAcertou(): boolean {
        return this.acertou
    }

    getRepondida(): boolean {
        // FIXME: implementar
        return false
    }
}