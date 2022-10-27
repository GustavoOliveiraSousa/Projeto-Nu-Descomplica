var valores = [8, 3, 5, 9, 1, 4, 6, 2];
console.log(valores[4]);

for (let i = 0; i < valores.length; i++) {
    console.log("Posição: " + i + "     Valor: " + valores[i]);;
}

var carros = []
carros[0] = "Volvo";
carros[1] = "Corolla";

var motos = new Array("BMW", "Yamaha", "Honda");

//Calcular média
var aux = 0;
for (let i = 0; i < valores.length; i++) {
    aux += valores[i];
}
var media = aux / valores.length;
console.log(media);

//---------------------------------------------------------------------------------------------
