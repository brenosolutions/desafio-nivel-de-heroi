/**
 * Desafio Calculadora de partidas Rankeadas
 * Potência Tech iFood - Programação do Zero
 * Desafio proposto por: Felipe Aguiar - dio.me
*/

// Dados dos personagens
const herois = [
    { nome: 'GameBR', vitorias: 66, derrotas: 2 },
    { nome: 'Chuvarada', vitorias: 90, derrotas: 5 },
    { nome: 'Froyd', vitorias: 80, derrotas: 37 },
    { nome: 'Wesker', vitorias: 126, derrotas: 20 }
]

// Função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogado
const calcularRank = (vitorias, derrotas) => {
    let nivelRank
    let saldoRank = vitorias - derrotas

    if (saldoRank < 10) {
        nivelRank = 'Ferro'
    } else if (saldoRank <= 20) {
        nivelRank = 'Bronze'
    } else if (saldoRank <= 50) {
        nivelRank = 'Prata'
    } else if (saldoRank <= 80) {
        nivelRank = 'Ouro'
    } else if (saldoRank <= 90) {
        nivelRank = 'Diamante'
    } else if (saldoRank <= 100) {
        nivelRank = 'Lendário'
    } else {
        nivelRank = 'Imortal'
    }

    return { saldo: saldoRank, nivel: nivelRank }
}

//ordernar rank
herois.sort(function (a, b) {
    let aSort = a.vitorias - a.derrotas
    let bSort = b.vitorias - b.derrotas
    return aSort < bSort ? 1 : aSort > bSort ? -1 : 0;
});

// Exiba a mensagem
herois.forEach((value) => {
    let rank = calcularRank(value.vitorias, value.derrotas)
    console.log(`O Herói ${value.nome} tem de saldo de ${rank.saldo} está no nível de ${rank.nivel}`)
})
