const contas = {

}

class usuario {
    constructor(cpf, nome, identificador) {
        this.cpf = cpf
        this.nome = nome
        this.identificador = identificador
    }

    criarUsuario(cpf, nome, identificador) {
        this.cpf = cpf
        this.nome = nome
        this.identificador = identificador

        contas.push(
            this.identificador = {
                cpf: this.cpf,
                nome: this.nome,
                identificador: this.identificador
            }
        )
    }
}

class conta {
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

class contaCorrente extends conta {
    transferencia(destinatario, valor) {
        if(valor <= this.saldo) {
            
        } else {
            console.log('SALDO INSUFICIENTE!')
        }
    }
}

class contaPoupanca extends conta {

}

// export default {
//     contaCorrente: contaCorrente,
//     contaPoupanca: contaPoupanca,
//     usuario: usuario
// }

console.log(contas)
const patrick  = usuario.criarUsuario(123456789, 'patrick brining', 001)
console.log(contas)