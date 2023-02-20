function Pessoa(nome, cpf, rg) {
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
}

function Funcionario(nome, cpf, rg, cargo, salario) {

    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function () {
        return _salario;
    }

    this.setSalario = function (valor) {
        if (typeof valor === 'number') {
            _salario = valor
        } else {
            console.log('Erro, Somente valores Númericos');
        }
    }
    Pessoa.call(this, nome, cpf, rg);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 122334, 2345567, ' Estágiario', 1200);
}

function Gerente(nome) {
    Funcionario.call(this, nome, 3459434, 56655567, 'Gerente', 4000);
}




const trabalhador1 = new Funcionario('Ronaldo byte', 1234567, 1122334455, 'soldador', 2100);
const trabalhador2 = new Gerente('Java Nildo Script');
const trabalhador3 = new Gerente('Mike Santos');

