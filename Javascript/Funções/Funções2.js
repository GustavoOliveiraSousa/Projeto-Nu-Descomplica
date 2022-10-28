function multiplicar(a, b) {
    return a * b
}

var x = multiplicar(23, 32)
console.log(x);

function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2)

function teste(...args) {
    console.log(args);
}
teste(1, "Hello", 2022)