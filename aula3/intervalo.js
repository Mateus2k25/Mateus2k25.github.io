
setTimeout(function () {
    document.getElementById("timeout").textContent = "Bem-Vindo";
}, 5000);

var contador = 0;

setInterval(function () {
    contador = contador + 1;
    document.getElementById("contador-elemento").textContent = contador;
}, 1000);