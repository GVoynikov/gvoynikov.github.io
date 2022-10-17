const greetings = ['fantastic', 'great', 'awesome', 'marvelous', 'sensational', 'superb', 'terrific', 'outstanding', 'phenomenal', 'remarkable'];
const greeting = document.getElementById('greeting');

setInterval(() => {
    greeting.innerText = greetings[Math.floor(Math.random()*10)]
}, 500);