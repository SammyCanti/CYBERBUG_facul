// Variáveis para armazenar pontuação e progresso
let userScore = 0;
let levelsCompleted = 0;

// Função para atualizar pontuação e progresso na tela
function updateProgress() {
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("levelsCompleted").innerText = levelsCompleted;
}

// Simulação de completar um nível (apenas exemplo)
document.querySelectorAll(".start-btn").forEach(button => {
    button.addEventListener("click", () => {
        userScore += 100;  // Adiciona pontos
        levelsCompleted += 1;  // Incrementa níveis completos
        updateProgress();
    });
});

// Chama a função ao carregar a página
updateProgress();
