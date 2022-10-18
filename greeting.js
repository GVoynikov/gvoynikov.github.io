const greetings = ['fantastic', 'great', 'awesome', 'marvelous', 'sensational', 'superb', 'terrific', 'outstanding', 'phenomenal', 'remarkable'];
let greeting = document.getElementById('greeting');

function greet() {
    let randomPick = Math.floor(Math.random()*greetings.length) - 1;
    for (let i=1; i<(randomPick+1); i++) {
        setTimeout(() => {greeting.innerText = greetings[i]}, i*50);
    }
};



setInterval(greet, 2000);