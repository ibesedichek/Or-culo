const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
let estadoInicial = true;
let posicionTexto = 0;
const textos = ["Hola","Bienvenidos", "a", "mi","página","web"];

textoInicial.innerText = textos[posicionTexto];

textoInicial.addEventListener("click", () => {
    if (posicionTexto < textos.length - 1) {
    posicionTexto = posicionTexto + 1; 
    textoInicial.innerText = textos[posicionTexto];
    } else {
        posicionTexto = 0;
        textoInicial.innerText = textos[posicionTexto];
    }

})

titulo.addEventListener("click", () => {
    if (estadoInicial === true) {
    titulo.innerText = "Bienvenidos";
    } else {
        titulo.innerText = "Hola, soy la Carita Lunar";
    }
    estadoInicial = !estadoInicial;
})