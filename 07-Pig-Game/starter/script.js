'use strict';
//Selecting element
const player0SectionEl = document.querySelector('.player--0');
const player1SectionEl = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');
/**Learning** Here we are using # because score--0 is an id and '.' is only used for class */
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');
/**Learning** Here we are using getElementById so # is not required as above. getElementById is little bit 
faster than querySelector */
const diceEl = document.querySelector('.dice');
/**For creating flow chart we can use diagrams.net and it is free */
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');
const btnRollEl = document.querySelector('.btn--roll');
let playing = true;
let currentScore = 0; /**Learning** This variable needs to be let because we are keep updating it*/
let activePlayer = 0; //If player 1 is active then 0 , if player 2 is active then 1
const scores = [0, 0]; //Index 0 value will contain total score of player1 and index1 will contain total score of player2

const init = function () {
  const RESET_SCORE = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  /**Learning**in style.css file we created a .hidden class
style, which will hide element and here above we are adding that class style to dice element */

  playing = true;
  currentScore = 0; /**Learning** This variable needs to be let because we are keep updating it*/
  activePlayer = 0; //If player 1 is active then 0 , if player 2 is active then 1

  current0El.textContent = RESET_SCORE;
  current1El.textContent = RESET_SCORE;
  activePlayer = 0;
  score0El.textContent = RESET_SCORE;
  score1El.textContent = RESET_SCORE;

  diceEl.classList.remove('hidden');

  player0SectionEl.classList.remove('player--winner');
  player1SectionEl.classList.remove('player--winner');

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
};

init(); //As the page loads it will run it function which will reset page content as required in initial condition

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  /**Learning**toggle method will add class if it is not there and remove if it is there */
  player0SectionEl.classList.toggle('player--active');
  player1SectionEl.classList.toggle('player--active');
};

//Rolling dice functionality
btnRollEl.addEventListener('click', function () {
  if (playing) {
    //1.Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`Random dice value : ${dice}`);
    /**Learning**we are creating local varible above because we want new random value everytime when we roll dice*/
    //2. Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for the rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next place
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      /**Learning**toggle method will add class if it is not there and remove if it is there */
      console.log(activePlayer);
      player0SectionEl.classList.toggle('player--active');
      player1SectionEl.classList.toggle('player--active');
    }
  }
});

//Button hold functionality
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check score is already 100. If player's score >=100
    if (scores[activePlayer] >= 20) {
      //Finish game and make player will
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }

    //Switch to next player
    switchPlayer();
  }
});

btnNewEl.addEventListener('click', init);
