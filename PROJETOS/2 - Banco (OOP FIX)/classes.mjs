const listaUsuarios = [

]

class Usuario {
    constructor(cpf, nome, identificador) {
        this.cpf = cpf
        this.nome = nome
        this.identificador = identificador
    }

    criarUsuario() {
        listaUsuarios.push(
            this.identificador = {
                cpf: this.cpf,
                nome: this.nome,
                identificador: this.identificador
            }
        )
    }
}

class Conta {
    constructor(saldo, identificador) {
        this.saldo = saldo
        this.identificador = identificador
    }

    deposito(valor) {
        if(valor <= this.saldo) {
            return true
        } else {
            return false
        }
    }

    saque(valor) {
        if(valor <= this.saldo) {
            return true
        } else {
            return false
        }
    }
}

class ContaCorrente extends Conta {
    transferencia(destinatario, valor) {
        if(valor <= this.saldo) {
            
        } else {
            console.log('SALDO INSUFICIENTE!')
        }
    }
}

class ContaPoupanca extends Conta {

}

// export default {
//     contaCorrente: contaCorrente,
//     contaPoupanca: contaPoupanca,
//     Usuario: Usuario
// }

console.log(listaUsuarios)
const patrick = new Usuario(12345678998, 'patrick brining', 001)

patrick.criarUsuario()
console.log(listaUsuarios)

const joao = new Usuario(123456765432, 'joao vitor', 002)
joao.criarUsuario()

console.log(listaUsuarios)
console.log(listaUsuarios[1])
console.log(listaUsuarios[1]['nome'])
listaUsuarios.pop()
console.log(listaUsuarios)