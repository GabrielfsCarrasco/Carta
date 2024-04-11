document.getElementById("heart").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
});

document.getElementById("yes").addEventListener("click", function() {
    alert("Ps: você está muito linda hoje 🥰🥰🥰"); // Ação ao clicar em "Sim"
    document.getElementById("modal").style.display = "none";
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
    alert("Diga SIM Logo!!!"); // Mensagem ao clicar em "Não"
});

document.getElementById("modal").addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    }
});
document.getElementById("no").addEventListener("click", function() {
  this.classList.add("clicked"); // Adiciona a classe "clicked" ao botão "Não"
});