const greetings = ['fantastic', 'great', 'beautiful', 'marvelous', 'sensational', 'superb', 'terrific', 'outstanding', 'phenomenal', 'remarkable','fantastic', 'great', 'beautiful', 'marvelous', 'sensational', 'superb', 'terrific', 'outstanding', 'phenomenal', 'remarkable'];
let greeting = document.getElementById('greeting');

function greet() {
    let randomPick = Math.floor(Math.random()*(greetings.length/2)) + greetings.length/2 - 1;
    for (let i=1; i<(randomPick+1); i++) {
        setTimeout(() => {greeting.innerText = greetings[i]}, i*50);
    };
};

setInterval(greet, 2000);