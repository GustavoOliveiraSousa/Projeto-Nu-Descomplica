var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let valor of a) {
    console.log(valor);
}

a.forEach(valor => console.log(valor))

var tot = 0
a.forEach(valor => {
    tot += valor
})
console.log(tot);