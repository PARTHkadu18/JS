let num = parseInt(Math.random()*100+1)
// let num=77

const userInput=document.querySelector('#guess')
const submit=document.querySelector('#sub')
const result=document.querySelector('.result')
const prev=document.querySelector('.prev')
const rem=document.querySelector('.rem')
const startOver=document.querySelector('.foot')

const p=document.createElement('p');

let playGame=true;
let numGuess=10;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        if(numGuess===0){
            displayAns();
            endGame();
            return;   
        }
        const guess=parseInt(userInput.value);
        isValid(guess)
        userInput.value=''
    })
}

function displayAns(){
    result.innerHTML=`<h3>Correct answer is ${num}</h3>`
}

function isValid(guess){
    if(isNaN(guess)||guess<1||guess>100){
        alert('Enter a valid number')
    }
    else{
        numGuess--;
        isCorrect(guess)
    }
}

function isCorrect(guess){
    if(guess==num){ 
        display(guess);
        result.innerHTML='<h3>You guessed it right</h3>'
        endGame()
    }
    else if(guess>num){
        display(guess);
        result.innerHTML='<h3>Your guess is TOO High</h3>'
    }
    else{
        display(guess);
        result.innerHTML='<h3>Your guess is TOO Low</h3>'
    }
}

function display(guess){
    prev.innerHTML+=`${guess}; `;
    rem.innerHTML=numGuess;
}

function endGame(){

    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame=false
    newGame();
}

function newGame(){
    const newGameButton= document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        num = parseInt(Math.random()*100+1)
        numGuess=10;
        result.innerHTML='';
        userInput.value='';
        prev.innerHTML='';
        rem.innerHTML=numGuess;
        p.innerHTML='';
        userInput.removeAttribute('disabled'); 
        startOver.removeChild('p')
        result.innerHTML=''
        playGame=true;
    })
}