const botao = document.querySelector("button");
botao.addEventListener("click",botaoClicado);

fuction botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;
}