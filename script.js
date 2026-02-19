
mostrar = document.getElementById("mostrar")
let vezescliques = 2
let up = document.getElementById("up");
let preco = 30
let valorClique = 1
let botao = document.getElementById("botao");
let texto = document.getElementById("texto");
let score = 0;

botao.addEventListener("click", function() {
    score = score + valorClique
    texto.textContent = `score ${score}`
});

up.addEventListener("click", function() {
  if (score >= preco)  {
      valorClique = valorClique + 1 
      score = score - preco
      texto.textContent = `score ${score}`
      preco = preco*3
      vezescliques = vezescliques +1     
      mostrar.textContent = `cliques vezes: ${valorClique}`
      up.textContent =  `${vezescliques}x clique preço:${preco}`
      
      
  }
  });
