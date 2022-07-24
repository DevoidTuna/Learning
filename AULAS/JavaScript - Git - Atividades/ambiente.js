let user = {
    nome: "Patrick",
    idade: 18,
    cidade: "Itajaí"
}

console.log(user["nome"])

user.sobrenome = "Brining"

console.log(user["sobrenome"])

console.log(user)

delete user.cidade

console.log(user)

console.log(`Nome do usuário: ${user.nome}, idade: ${user.idade}.`)

(function() {
    console.log(123456)
    let nome = 'Patrick'
})()

console.log(nome) //não está pegando o let "patrick"

var nome = 'Brining'

console.log(nome) // Pegando o "Brining"