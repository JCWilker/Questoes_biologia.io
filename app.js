function checkAnswers() {
    let score = 0;
    const questions = document.querySelectorAll('.options');
    questions.forEach((question, index) => {
        const correctAnswer = question.dataset.correct;
        const selectedOption = question.querySelector(`input[name="q${index + 1}"]:checked`);
        const correctOption = question.querySelector(`input[name="q${index + 1}"][value="${correctAnswer}"]`);
        
        if (selectedOption && selectedOption.value === correctAnswer) {
            score++;
        }
        
        if (correctOption) {
            correctOption.parentElement.classList.add('correct-answer');
        }
    });

    const totalQuestions = questions.length;
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Você acertou ${score} de ${totalQuestions} questões.`;
    resultElement.style.display = "block";
}
document.querySelector('button').addEventListener('click', checkAnswers);
