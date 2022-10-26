var nome = "Gustavo";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor, preencha seu nome completo";
console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Kurama sola todas as bijus ";
console.log(jogo);
var posicao = jogo.indexOf("sola");
console.log(posicao);

var cortado = jogo.slice(0, 11)
console.log(cortado);

var val = jogo.includes("bijus");
console.log(val);

var str1 = "Hello "
var str2 = "Mars"
var str3 = str1.concat(str2);
console.log(str3);

var frase = "  Olá meu parceiro DEV, não desista            ";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8,9"
var array = num.split(",");
console.log(array);