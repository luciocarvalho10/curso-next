/**
 * Embaralha os elementos de um array de números usando um algoritmo de ordenação aleatória.
 *
 * @param {number[]} array - O array de números a ser embaralhado.
 * @returns {number[]} Um novo array com os elementos embaralhados.
 */

export function embaralhar(array: number[]):number[] {
    return array
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((a, b) => a.aleatorio - b.aleatorio)
        .map(objeto => objeto.valor)
}
