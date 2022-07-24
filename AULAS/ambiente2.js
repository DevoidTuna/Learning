function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${nome} está ${assunto}`
        }
    }
}

const p1 = criaPessoa('Patrick', 'Brining')
console.log(p1.fala('falando sobre JS'))