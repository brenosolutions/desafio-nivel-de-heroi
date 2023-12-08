/**
 * Desafio Classificador de nível de Herói
 * Potência Tech iFood - Programação do Zero
 * Desafio proposto por: Felipe Aguiar - dio.me
*/

// Armazenar os nomes e as quantidades de experiência (XP) dos heróis
const herois = [
    { name: 'GameBR', xp: 7500 },
    { name: 'Chuvarada', xp: 1000 },
    { name: 'Froyd', xp: 8550 },
    { name: 'Wesker', xp: 20000 }
]

// Função de decisão para classificar o nível do herói com base na XP
const levelHeroi = (xp) => {
    let level
    if (xp < 1000) {
        level = "Ferro"
    } else if (xp >= 1001 && xp <= 2000) {
        level = "Bronze"
    } else if (xp >= 2001 && xp <= 5000) {
        level = "Prata"
    } else if (xp >= 6001 && xp <= 7000) {
        level = "Ouro"
    } else if (xp >= 7001 && xp <= 8000) {
        level = "Platina"
    } else if (xp >= 8001 && xp <= 9000) {
        level = "Ascendente"
    } else if (xp >= 9001 && xp <= 10000) {
        level = "Imortal"
    } else {
        level = "Radiante"
    }
    return level
}

// Exiba a mensagem com o nome e o nível do herói
herois.forEach((value) => {
    console.log(`O Herói de nome ${value.name} está no nível de ${levelHeroi(value.xp)}`)
})
