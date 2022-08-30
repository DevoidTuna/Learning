const Apresentação = `Bem vindo ao script básico de banco. Caso precise de ajuda, digite: ajuda()\n`

const ajuda = () =>
    console.log(
        `
        Acessar o Usuário -> listaUsuarios[n°ID] {alterar n°ID pelo número do ID}.
        -----------------
        criarUsuario(CPF, 'nome') -> Retornará o ID do Usuário caso seu CPF já esteja cadastrado,
        ou criará um novo Usuário.
        -----------------
        buscarUsuario(CPF ou ID) -> Buscará o Usuário com o CPF ou o ID cadastrado.
        buscarUsuario('nome') -> Buscará *todos* os Usuários com o mesmo nome.
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
    \n\n`)

console.log(Apresentação)

const listaUsuarios = [
    // UsuarioMaster = {id: 999, cpf: 99999999999, nome: 'Master',
    // ContaCorrente: {id: 1999, saldo: 99999999}, 
    // ContaPoupanca:{id: 2999, saldo: 99999999}}
]

let contUsuario = 0
let contCorrente = 1000
let contPoupanca = 2000

class Usuario {
    constructor(cpf, nome) {
        this.id = contUsuario
        this.cpf = cpf
        this.nome = nome
        this.ContaCorrente = null
        this.ContaPoupanca = null
    }

    criarContaPoupanca() {
        if(this.ContaPoupanca == null) {
            this.ContaPoupanca = new ContaPoupanca(contPoupanca + this.id)
        } else {
            console.log(`Usuário já tem Conta Poupança. ID da conta: ${this.ContaPoupanca.id}`)
        }
    }

    criarContaCorrente() {
        if(this.ContaCorrente == null) {
            this.ContaCorrente = new ContaCorrente(contCorrente + this.id)
        } else {
            console.log(`Usuário já tem Conta Corrente. ID da conta: ${this.ContaCorrente.id}`)
        }
    }
}

class _Conta {
    constructor(id) {
        this.id = id
    }

    deposito(valor) {
        this.saldo += valor
        console.log(`Depósito de R$ ${valor} efetuado com sucesso.`)
    }

    saque(valor) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            console.log(`Saque de R$ ${valor} efetuado com sucesso.`)
        } else {
            console.log(`Saldo insuficiente para saque. Saldo total: R$ ${this.saldo}`)
        }
    }
}

class ContaCorrente extends _Conta {
    constructor(id) {
        super(id)
        this.saldo = 1050
    }

    transferencia(valor, destinatarioConta) {
        let filtroCorrente = listaUsuarios.filter(conta => (conta.ContaCorrente != null) && destinatarioConta == conta.ContaCorrente.id)
        let filtroPoupanca = listaUsuarios.filter(conta => (conta.ContaPoupanca != null) && destinatarioConta == conta.ContaPoupanca.id)

        if(filtroCorrente.length > 0 || filtroPoupanca.length > 0) {

            if(valor <= this.saldo) {
                if(filtroCorrente.length > 0) {
                    filtroCorrente[0].ContaCorrente.saldo += valor

                } else if(filtroPoupanca.length > 0) {
                    filtroPoupanca[0].ContaPoupanca.saldo += valor
                }
                this.saldo -= valor
                console.log(`Transferencia efetuada com sucesso. Saldo restante em conta: R$ ${this.saldo}`)

            } else if(valor >= this.saldo) {
                console.log(`Saldo insuficiente para realizar transferência. Saldo em conta: R$ ${this.saldo}`)
            }
        } else {
            console.log('Conta do destinatário não encontrada, gentileza conferir as informações.')
        }
    }
}

class ContaPoupanca extends _Conta {
    constructor(id) {
        super(id)
        this.saldo = 480
    }
}

function criarUsuario(cpfInformado, nome) {
    let filtro = listaUsuarios.filter(usuario => cpfInformado == usuario.cpf)

    if(filtro.length > 0) {
        return console.log(`Este usuario já está cadastrado. ID: ${filtro[0].id} \n`)
    } else {
        listaUsuarios.push(
            new Usuario(cpfInformado, nome)
        )
        let novoUser = listaUsuarios.filter(usuario => cpfInformado == usuario.cpf)
        console.log(`Novo Usuário. ID: ${novoUser[0].id}, nome: ${novoUser[0].nome} \n`)
        contUsuario++
    }
}

function buscaUsuario(busca) {
    if(typeof busca == "string") {
        for(users in listaUsuarios) {
            if(busca == listaUsuarios[users].nome) {
                console.log(`Usuário encontrado: ID: ${listaUsuarios[users].id}, Nome: ${listaUsuarios[users].nome}, CPF: ${listaUsuarios[users].cpf};`)
            }
        }
    } else {
        let filtro = listaUsuarios.filter(usuario => busca == usuario.id || busca == usuario.cpf)
        if(filtro.length > 0) {
            console.log(`Usuário encontrado. ID: ${filtro[0].id}, Nome: ${filtro[0].nome}, CPF: ${filtro[0].cpf} \n`)
        } else {
            console.log('Usuário não encontrado. Poderá criá-lo utilizando a função criarUsuario() ou checar o CPF/ID informado. \n')
        }
    }
}
