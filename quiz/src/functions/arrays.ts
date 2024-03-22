export function embaralhar(array: number[]):number[] {
    return array
        .map(valor => ({ valor, aleatorio: Math.random() }))
        .sort((a, b) => a.aleatorio - b.aleatorio)
        .map(objeto => objeto.valor)
}