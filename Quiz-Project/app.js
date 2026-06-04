const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault(); // Default action is to refresh the page and we do not want that shit to happen
    let score = 0;
    const userAnswers = [form.q1.value, form.q1.value, form.q3.value, form.q4.value, form.q5.value];

    // Now comparing the answers to actual answers

    userAnswers.forEach((answers, index) => {
        if(answers === correctAnswers[index]){
            score += 20;
        }
    });
    console.log(score);
});