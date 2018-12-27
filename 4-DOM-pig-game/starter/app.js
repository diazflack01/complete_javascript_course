/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let activePlayer = 0;

// Event listeners
function getElementFromClass(className){
    return document.querySelector(`.${className}`);
}

function getElementFromId(id){
    return document.getElementById(id);
}

// Roll Dice Button -> btn-roll

// Generate random number 1 upto max variable
function generateRandomNumber(max){
    return (Math.floor(Math.random() * max)) + 1;
}

const rollButtonElement = getElementFromClass('btn-roll');
const maxDiceNumber = 6;
const diceElement = getElementFromClass('dice');
rollButtonElement.addEventListener('click', function(){
    const randNum = generateRandomNumber(maxDiceNumber);
    
    diceElement.setAttribute('src', `dice-${randNum}.png`);

    const currentElement = getElementFromId(`current-${activePlayer}`);
    currentElement.textContent =  Number(currentElement.textContent) + randNum;
})

// Hold Button -> btn-hold
const holdButtonElement = getElementFromClass('btn-hold');
holdButtonElement.addEventListener('click', function(){
    //
})

// New Game -> btn-new
const newGameButtonElement = getElementFromClass('btn-new');
newGameButtonElement.addEventListener('click', function(){
    //
})