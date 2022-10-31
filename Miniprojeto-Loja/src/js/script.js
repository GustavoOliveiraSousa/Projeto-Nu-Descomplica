var tamanhoTela = window.innerWidth;
var img = document.getElementById('#img-carrosel'); // Procurando o elemento que você quer alterar poderia procurar por id também

if (tamanhoTela <= 1500) {
    img.classList.remove('w-75')
    img.classList.add('w-50'); //Adicionando a classe 'W-75'
}

console.log("oi");
