var tamanhoTela = window.innerWidth;

if (tamanhoTela <= 553) {
    var img = document.querySelector("#input-o"); // Procurando o elemento que você quer alterar
    img.classList.remove("w-100"); //Adicionando a classe 'W-75'
    img.classList.add("w-25");
}

// var tamanhoTela = window.innerWidth;

// if (tamanhoTela <= 1500) {
//     var img = document.querySelector("#img-carrosel"); // Procurando o elemento que você quer alterar
//     img.classList.remove("w-75");
//     img.classList.add("w-50"); //Adicionando a classe 'W-75'
// }

console.log("oi");
