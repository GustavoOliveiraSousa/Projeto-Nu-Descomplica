var n = 20;
console.log(typeof (n));

var nome = "Gustavo";
console.log(typeof (nome));
console.log(nome.toLocaleUpperCase);

if (typeof (nome) == "string") {
    console.log(nome.toLocaleUpperCase());
} else {
    console.log("Você precisa inserir uma string");
}