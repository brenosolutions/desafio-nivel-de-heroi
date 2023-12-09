/**
 * Desafio Escrevendo as classes de um Jogo
 * Potência Tech iFood - Programação do Zero
 * Desafio proposto por: Felipe Aguiar - dio.me
*/

class MMORPG {
    constructor(serverName, ip, port) {
        this.serverName = serverName
        this.ip = ip
        this.port = port
    }

    //simulação de inicialização do servidor
    async loadServer() {
        console.log(`-------- Server ${this.serverName} --------`)
        setTimeout(() => { console.log('>> Carregando o mapa...') }, 200)
        setTimeout(() => { console.log('>> Carregando os magias...') }, 500)
        setTimeout(() => { console.log('>> Carregando os items...') }, 800)
        setTimeout(() => { console.log('>> Abrindo o servidor...') }, 1200)
        setTimeout(() => { console.log(`>> Server Online`) }, 1500)
        setTimeout(() => { console.log(`>> ${this.serverName} - IP: ${this.ip} | PORT: ${this.port}`) }, 1600)
        setTimeout(() => { console.log(``) }, 1650)
        await new Promise(resolve => setTimeout(resolve, 1700));
    }
}

class Player {

    constructor(name, level, vocationId) {
        this.name = name
        this.level = level
        this.vocationId = vocationId
    }

    login() {
        console.log('LOGIN: ' + this.name + ' entrou no mapa')
    }

    // mensagem
    attack() {
        let { vocName, typeAtk } = this.vocationType(this.vocationId)
        console.log(`ATTACK: ${this.name} (${vocName}) de level ${this.level} atacou o DRAGON usando ${typeAtk}`)
    }

    death() {
        console.log(`DEATH: ${this.name} - Morreu para o DRAGON`)
    }

    vocationType(id) {
        if (id === 1) {
            return { vocName: 'Knight', typeAtk: 'Sword' }
        } else if (id === 2) {
            return { vocName: 'Sorcerer', typeAtk: 'Magic Death' }
        } else if (id === 3) {
            return { vocName: 'Druid', typeAtk: 'Magic Ice' }
        } else {
            return { vocName: 'Paladin', typeAtk: 'Arrow' }
        }
    }

}

// iniciar o servidor do jogo
const main = async () => {
    // ligando o servidor
    const MMO = new MMORPG('LastWarBR', '127.0.0.1', 7171)
    await MMO.loadServer();

    /**
     * DATABASE
     *
     * name - nome do persoangem
     * level - nivel do persoagem
     * vocationId - id da vocação do persosagem
     *      1 = Knight (ataque espada)
     *      2 = Sorcerer (ataque mágico death)
     *      3 = Druid (ataque mágico ice)
     *      4 = Paladin (ataque flecha)
     */
    const database = [
        { name: 'GameBR', level: 122, vocationId: 1 },
        { name: 'Chuvarada', level: 133, vocationId: 2 },
        { name: 'Froyd', level: 148, vocationId: 3 },
        { name: 'Wesker', level: 8, vocationId: 4 }
    ]

    //intevalos
    let timeoutLogin = 200
    let intervalAttack = 3000
    let intervalDeath = 10000

    //Simulação de ações dos players
    database.forEach(({ name, level, vocationId }) => {
        let player = new Player(name, level, vocationId)
        setTimeout(() => { player.login() }, timeoutLogin)
        setInterval(() => { player.attack() }, intervalAttack)
        setInterval(() => {
            player.death()
            player.login()
        }, intervalDeath)

        timeoutLogin += 500
        intervalAttack += 1500
        intervalDeath += 10000
    })
}

//executar o inicializador
main()

