var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var filtrados = numeros.filter(
    function (valor) {
        return valor > 5
    }
)
console.log(filtrados);

function buscarValores(valor) {
    return valor > 5
};
var numerosEncontrados = numeros.filter(buscarValores)
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) => {
    return valor > 5
})
console.log(r1);

var funcionarios = [
    { nome: "Gustavo", idade: 19 },
    { nome: "Davi", idade: 34 },
    { nome: "Hércules", idade: 14 },
    { nome: "Tainá", idade: 27 },
]

var pessoasListagem = funcionarios.filter(
    function (valor) {
        return valor.nome.length <= 4;
    }
)
console.log(pessoasListagem);

// com base no array
// var produts = [
//     { id: "Celular", categoria: "Eletrônico" },
//     { id: "Geladeira", categoria: "Eletrodoméstico" },
//     { id: "Ar-condicionado", categoria: "Eletrodoméstico" },
//     { id: "Laptop", categoria: "Eletrônico" },
// ]
// crie um novo array só com eletrodomésticos

var produtos = [
    { id: "Celular", categoria: "Eletrônico" },
    { id: "Geladeira", categoria: "Eletrodoméstico" },
    { id: "Ar-condicionado", categoria: "Eletrodoméstico" },
    { id: "Laptop", categoria: "Eletrônico" },
]

var Eletrodomestico = produtos.filter(function (produto) {
    if (produto.categoria == "Eletrodoméstico") {
        return produto
    }
})
console.log(Eletrodomestico);