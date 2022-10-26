var pais = "Brasil";
if (pais != "Brasil") {
    console.log("Você é estrangeiro");
} else {
    console.log("Você é brasileiro");
}

var idade = 17;
if (idade < 16) {
    console.log("Você ainda não vota");
} else if (16 <= idade < 18 || idade > 65) {
    console.log("Voto opcional");
} else {
    console.log("Você é obrigado a votar");
}