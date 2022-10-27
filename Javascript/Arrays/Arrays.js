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

console.log("Array inverso: " + valores.reverse());

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1.join("|"));

var retirado = arr1.shift();
console.log(retirado);
console.log(arr1);

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Posição do número 6: " + arr1.indexOf(6));

arr1.push(100);
console.log(arr1);

arr1.pop();
console.log(arr1);

//crie um array só com números positivos a partir do array [-2,5,-4,-8,9,3,6,-9,3,5,-3]
var arrayoriginal = [-2, 5, -4, -8, 9, 3, 6, -9, 3, 5, -3, 8, 12, 4]
var arrayPar = [];

for (let index = 0; index < arrayoriginal.length; index++) {
    if (arrayoriginal[index] % 2 == 0 && arrayoriginal[index] >= 0) {
        arrayPar.push(arrayoriginal[index]);
    }
}
console.log(arrayPar);
