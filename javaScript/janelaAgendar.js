// Abrir o modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

// Fechar o modal quando o 'X' for clicado
span.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal quando clicar fora da janela
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Capturar dados do formulário e armazenar (exemplo simples)
document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    
    console.log(`Agendado: Nome: ${nome}, Data: ${data}, Hora: ${hora}`);
    alert("Agendamento realizado!");

    modal.style.display = "none";  // Fecha o modal após o agendamento
});
