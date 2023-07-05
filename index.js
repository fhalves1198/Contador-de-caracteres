

const botao = document.getElementById("botão")

let espacoResult = document.querySelector(".coolor") 

botao.addEventListener("click", clicar)




function clicar() {

  const caixaTexto = document.getElementById("texto").value
  const resulFinal = caixaTexto.length
  espacoResult.textContent = `O seu texto tem ${resulFinal} caracteres`
  espacoResult.classList.remove("invisible")
  

}