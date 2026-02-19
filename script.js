let contador = 0;

let botao = document.getElementById("botao");
let texto = document.getElementById("texto");

botao.addEventListener("click", function() {
    contador++;
    texto.textContent = `Cliques ${contador}`;
});