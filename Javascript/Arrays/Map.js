var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numeros.map(function (valor) {
    return valor * 2;
})
console.log(num);

var funcionarios = [
    { nome: "Gustavo", idade: 19 },
    { nome: "Davi", idade: 34 },
    { nome: "Hércules", idade: 14 },
    { nome: "Tainá", idade: 27 },
]
var nomes = funcionarios.map(pessoa => pessoa.nome)
console.log(nomes);

