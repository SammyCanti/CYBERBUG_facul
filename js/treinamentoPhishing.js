let currentLevel = 0;
let score = 0;

const levels = document.querySelectorAll('.level');
const progressElement = document.getElementById('progress');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('nextButton');
const progressBar = document.getElementById('progressBar');
const completionPopup = document.getElementById('completionPopup');
const completionMessage = document.getElementById('completionMessage');

function updateProgress() {
    const progress = Math.round((currentLevel / levels.length) * 100);
    progressElement.innerText = `Progresso: ${progress}%`;
    progressBar.style.width = `${progress}%`;
}

function updateScore(isCorrect) {
    if (isCorrect) {
        score += 10;
    } else {
        score = Math.max(0, score - 5);
    }
    scoreElement.innerText = `Pontuação: ${score}`;
}

function showLevel(levelIndex) {
    levels.forEach(level => level.classList.add('hidden'));
    levels[levelIndex].classList.remove('hidden');
}

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const isCorrect = this.dataset.answer === 'correct';
        updateScore(isCorrect);

        const feedback = this.closest('.level').querySelector('.feedback');
        feedback.innerText = isCorrect ? "Correto! Boa decisão." : "Incorreto. Essa ação poderia comprometer a segurança.";
        feedback.classList.remove('hidden');

        this.closest('.level').querySelectorAll('.option').forEach(opt => opt.disabled = true);

        nextButton.classList.remove('hidden');
    });
});

nextButton.addEventListener('click', function() {
    currentLevel++;
    if (currentLevel < levels.length) {
        showLevel(currentLevel);
        updateProgress();
    } else {
        completionMessage.innerText = `Treinamento Concluído! Pontuação final: ${score}. Parabéns por completar o treinamento!`;
        completionPopup.classList.remove('hidden');
        nextButton.disabled = true;
    }
    this.classList.add('hidden');
});

// Inicialização
updateProgress();
showLevel(currentLevel);
