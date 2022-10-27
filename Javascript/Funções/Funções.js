var pessoa = {
    nome: "Gustavo",
    sobrenome: "Sousa"
}
console.log(pessoa.sobrenome);

var pessoa1 = new Object();
pessoa1.nome = "Guilherme",
    pessoa1.sobrenome = "Bittencourt",
    pessoa1.falarNome = function () {
        return ("Meu nome é: " + this.nome)
    }
console.log(pessoa1.falarNome());

function criarPessoa(nome, sobrenome) {
    return [nome, sobrenome]
}
var pessoa2 = criarPessoa("Gustavo", "Oliveira")
var pessoa3 = criarPessoa("Arthur", "Josef")
console.log(pessoa2);
console.log(pessoa3);
