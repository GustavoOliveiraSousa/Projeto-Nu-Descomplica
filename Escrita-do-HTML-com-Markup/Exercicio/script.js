function nome() {
    var nome = document.getElementById('input').value;
    var changer = document.getElementById('changer');
    var display = document.getElementById('bemvindo');
    var sair = document.getElementById('sair');
    var entrar = document.getElementById('entrar');
    var input = document.getElementById('input');

    display.style.display = "block";
    entrar.style.display = "none";
    sair.style.display = "block";
    input.style.display = "none";

    changer.innerHTML = nome;

}

function sair() {
    var display = document.getElementById('bemvindo');
    var changer = document.getElementById('changer');
    var entrar = document.getElementById('entrar');
    var sair = document.getElementById('sair');
    var input = document.getElementById('input');

    display.style.display = "none";
    changer.innerHTML = "";
    entrar.style.display = "block";
    sair.style.display = "none";
    input.style.display = "block";
}
