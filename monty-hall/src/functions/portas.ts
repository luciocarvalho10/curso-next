import PortaModel from '@/model/PortaModel'

export function criarPortas(qtd: number, comPresente: number): PortaModel[] {
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1
        const temPresente = numero === comPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(porta => {
        const igualAModificada = portaModificada.getNumero() === porta.getNumero()
        if (igualAModificada) {
            return portaModificada
        } else {
            return portaModificada.getAberta() ? porta : porta.desselecionar()
        }
    })
}