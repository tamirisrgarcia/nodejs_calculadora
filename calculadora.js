function soma(n1,n2) {
    return (`A soma dos números ${n1} + ${n2} é igual a: ${n1 + n2}`)
}

function subtracao(n1,n2) {
    return(`A subtração dos números ${n1} - ${n2} é igual a: ${n1 - n2}`)
}

function divisao(n1, n2) {
    return(`A divisao dos números ${n1} / ${n2} é igual a: ${n1/n2}`)
}

function multiplicacao(n1,n2) {
    return(`A multiplicação dos números ${n1} x ${n2} é igual a: ${n1*n2}`)
}

module.exports = {soma, subtracao, divisao, multiplicacao}