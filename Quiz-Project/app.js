const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

let score = 0;
form.addEventListener('submit', e => {
    e.preventDefault(); // Default action is to refresh the page and we do not want that shit to happen
    const userAnswers = [form.q1.value, form.q1.value, form.q3.value, form.q4.value, form.q5.value];

    // Now comparing the answers to actual answers

    userAnswers.forEach((answers, index) => {
        if(answers === correctAnswers[index]){
            score += 20;
        }
    });
    scrollTo(0, 0);
    console.log(score);
});


// Learning about the window object discovering something good

setTimeout(() => {
    alert('Why are you gay?');
}, 4000);

let output =0;
setInterval(() => {
    if(output === score){
        clearInterval();
    }
    else{
        output++;
        result.querySelector('span').textContent = `${output}%`;
    }
}, 10);