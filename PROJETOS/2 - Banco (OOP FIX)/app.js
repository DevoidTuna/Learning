const Apresentação = `Bem vindo ao script básico de banco. Caso precise de ajuda, digite: ajuda()\n`

const ajuda = () =>
        console.log(`
        Acessar o Usuário -> listaUsuarios[n°ID] {alterar n°ID pelo número do ID}.
        -----------------
        criarUsuario(CPF, 'nome') -> Retornará o ID do Usuário caso seu CPF já esteja cadastrado,
        ou criará um novo Usuário.
        -----------------
        cpfOuIDrUsuario(CPF ou ID) -> cpfOuIDrá o Usuário com o CPF ou o ID cadastrado.
        -----------------
        Usuario.criarContaCorrente() -> Caso o Usuário já tenha Conta Corrente, retornará o ID da sua Conta,
        caso o Usuário não tenha, será criada uma Conta Corrente com o saldo de R$ 1050.
        -----------------
        Usuario.criarContaPoupanca() -> Caso o Usuário já tenha Conta Poupança, retornará o ID da sua Conta,
        caso o Usuário não tenha, será criada uma Conta Poupança com o saldo de R$ 480.
        -----------------
        Usuario.ContaCorrente.transferencia(valor, n°ContaDoDestinatario) -> Transferências apenas de Contas
        Correntes para qualquer tipo de Conta, ao qual informa o valor da transferência em "valor" e o n° da
        Conta do Destinatário.
        EX: listaUsuarios[ID].ContaCorrente.transferencia(100, 2003) - {transferido R$ 100 para a Conta 2003}.
        -----------------
        Usuario.ContaXXX.deposito(valor) -> Deposita o "valor" na Conta informada.
        -----------------
        Usuario.ContaXXX.saque(valor) -> Saca o "valor" da Conta informada.
        \n\n`
)

console.log(Apresentação)

const listaUsuarios = [
    // UsuarioMaster = {id: 999, cpf: 99999999999, nome: 'Master',
    // contaCorrente: {id: 1999, saldo: 99999999}, 
    // contaPoupanca:{id: 2999, saldo: 99999999}}
]


class Usuario {
    constructor(cpf, nome) {
        this.id = Usuario.contadorUsuario
        this.cpf = cpf
        this.nome = nome
        this.contaCorrente = null
        this.contaPoupanca = null

        Usuario.contadorUsuario++
    }

    static contadorUsuario = 0

    criarContaPoupanca() {
        if(this.contaPoupanca == null) {
            this.contaPoupanca = new ContaPoupanca(1000 + this.id)
            return true
        } else {
            return false
        }
    }

    criarContaCorrente() {
        if(this.contaCorrente == null) {
            this.contaCorrente = new ContaCorrente(2000 + this.id)
            return true
        } else {
            return false
        }
    }
}

class Conta {
    constructor(id) {
        this.id = id
    }

    deposito(valor) {
        this.saldo += valor
        return true
    }

    saque(valor) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }
}

class ContaCorrente extends Conta {
    constructor(id) {
        super(id)
        this.saldo = 1050
    }

    transferencia(valor, destinatarioConta) {
        let filtroCorrente = listaUsuarios.filter(conta => (conta.contaCorrente != null) && destinatarioConta == conta.contaCorrente.id)
        let filtroPoupanca = listaUsuarios.filter(conta => (conta.contaPoupanca != null) && destinatarioConta == conta.contaPoupanca.id)

        if(filtroCorrente.length > 0 || filtroPoupanca.length > 0) {

            if(valor <= this.saldo) {
                if(filtroCorrente.length > 0) {
                    filtroCorrente[0].contaCorrente.deposito(valor)

                } else if(filtroPoupanca.length > 0) {
                    filtroPoupanca[0].contaPoupanca.deposito(valor)
                }
                this.saque(valor)
                return true

            } else if(valor >= this.saldo) {
                return false
            }
        } else {
            return 'Conta do destinatário não encontrada, gentileza conferir as informações.'
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(id) {
        super(id)
        this.saldo = 480
    }
}

function criarUsuario(cpfInformado, nome) {
    let filtro = listaUsuarios.filter(usuario => cpfInformado == usuario.cpf)

    if(filtro.length == 0) {
        listaUsuarios.push(
            new Usuario(cpfInformado, nome)
        )
        return true
    } else if(cpfInformado == undefined || nome == undefined) {
        throw new Error('Gentileza chamar a função informando dentro dos parênteses seu CPF e NOME.')
    } else {
        throw new Error('Usuário já tem conta no sistema.')
    }
}
function buscaUsuario(cpfOuID) {
    let filtro = listaUsuarios.filter(usuario => cpfOuID == usuario.id || cpfOuID == usuario.cpf)

    if(filtro.length == 1) {
        return filtro[0]
    } else {
        throw new Error('Usuário não encontado.');
    }
}

criarUsuario(111, 'patrick')
console.log(listaUsuarios)
criarUsuario(222, 'abcdefghijk')
console.log(listaUsuarios)
criarUsuario()
buscaUsuario(111)