import MResposta from "@/model/MResposta";

/**
 * Embaralha os elementos de um array de respostas usando um algoritmo de ordenação aleatória.
 *
 * @param {MResposta[]} respostas - O array de respostas a ser embaralhado.
 * @returns {MResposta[]} Um novo array com os elementos (respostas) embaralhados.
 */
export function embaralhar(respostas: MResposta[]): MResposta[] {
    return respostas
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((a, b) => a.aleatorio - b.aleatorio)
        .map(objeto => objeto.valor)
}
