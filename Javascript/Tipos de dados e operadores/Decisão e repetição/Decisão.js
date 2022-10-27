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
//---------------------------------------------------------------------------------------------

var diaSem = "Sexta"
switch (diaSem) {
    case "Segunda":
        console.log("Coragem guerreiro(a), a semana só começou");
        break;
    case "Terça":
        console.log("Faltam só 3 dias para o fds 😎");
        break;
    case "Quarta":
        console.log("Faltam só 2 dias para o fds 😎");
        break;
    case "Quinta":
        console.log("Faltam só 1 dias para o fds 😎");
        break;
    case "Sexta":
        console.log("Hoje é sexta feira 🤩🤗");
        break;
    case "Sábado":
        console.log("Curta o fds como se não houvesse amanhã");
        break;
    case "Domingo":
        console.log("Curta o fds como se não houvesse amanhã");
        break;
    default:
        break;
}
//---------------------------------------------------------------------------------------------

var carro = [{ modelo: "HB20", marca: "Uknown", ano: 2020 },
{ modelo: "Compass", marca: "Jeep", ano: 2021 },
]
for (let caracteristica in carro) {
    console.log(carro[caracteristica]);
}
for (let c of carro) {
    console.log(c.marca);
}
//---------------------------------------------------------------------------------------------
var c = 1;
while (c <= 10) {
    console.log(c);
    c++;
}

var t = 1
do {
    console.log(t);
    t++;
} while (t <= 15);