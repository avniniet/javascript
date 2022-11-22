'use strict';

const MAX_SCORE = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score =
  MAX_SCORE; /**Learning**We can read the value from DOM and save it in score variable but in
this way we dont have way to keep updating value of score so we are creating variable and updating DOM
with this score variable. This variable is called state variable because this variable is part of application
state. */
console.log(`Secret number is ${secretNumber}`);

console.log(
  document.querySelector('.message').textContent
); /**Learning*querySelector() is method available on document 
object. In this method we need to pass a selector and this selector would be same 
as selector we use in css. Since message is a class in HTML file so we are using 
'.' otherwise for id we would have used '#'*/

/**Learning**Document Object Model(DOM) 
1. It is structured representation on HTML documents.
2. It allows access to HTML element and styles to manipulate them.

DOM is automatically created by browser as soon as page loads and it is stored in a 
tree structure. In this tree each HTML element is an object.

For each HTML element there is a DOM tree node. Root element is document. document is
a special object that  we have access to in javascript. This object serve as entry
point in DOM.

First child element in document is usually HTML element. HTML element represents 
whole HTML file. Child element of HTML element is HEAD and BODY and so on.

DOM tree has not only HTML element nodes. It also has nodes for all the text for 
example there will a child node of paragraph node which contains its text.

DOM , DOM methods and properties for DOM manipulation is not part of javascript.

DOM, DOM methods and properties for DOM manipulation are part of WebAPIs. WebAPIs 
are like libraries which browser implements and we can access that from our javascript
code. WebAPIs are also written in javascript and automatically available for use. There
is actually official DOM specification that browser implements and due to this DOM manipulation
works same in all browser. Besides DOM there are lots more WebAPI like fetchAPI, timer and manymore.

We can access these node elements using javascript.

DOM also includes CSS style so using DOM manipulation we can also change style.

*/

//document.querySelector(  '.message').textContent = `Correct Number🍕`;
/**Learning**this code will update text node content in  paragraph with class name 'message'*/
//document.querySelector('.highscore').textContent = highScore;
console.log(document.querySelector('.message').textContent);
document;
//document.querySelector('.number').textContent = 13;

//document.querySelector('.score').textContent = score;

console.log(document.querySelector('.guess').value);

//document.querySelector('.guess').value = 23;

/**Learning**Event listener* event is something that happens on the page like mouse click, mouse moving and many other.
With event listener we can wait for event to happen and when specific event occurrs using event listener
we can react to it. */

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
  console.log(
    typeof guess
  ); /**Learning**Usually whenever we get something from user interface it is of string type */

  if (!guess) {
    /**Learning** if there is no value in guess input field it will come as 0 which will be evaluated as false */
    //document.querySelector('.message').textContent = 'No number entered🍘';
    displayMessage('No number entered🍘');
  } else if (parseInt(guess) === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number🍕';
    displayMessage('Correct Number🍕');
    console.log(`Gussed secret number correctly`);
    //making screen green
    document.querySelector('body').style.backgroundColor =
      '#60b347'; /**Changing style using DOM manipulation */
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      score = score - 1;
      displayMessage(guess > secretNumber ? 'Too High 🌴' : 'Too Low 🌾');
      //document.querySelector('.message').textContent =guess > secretNumber ? 'Too High 🌴' : 'Too Low 🌾';
      document.querySelector('.score').textContent = score;
      //document.querySelector('body').style.backgroundColor = 'lightcoral';
    } else {
      displayMessage('You Lost Game 🌶');
      //document.querySelector('.message').textContent = 'You Lost Game 🌶';
      score = 0;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'Red';
    }
  }
}); /**class = 'btn check' . Here btn is generic class which are part of other
elements as well but check class is more specific to this button so  in query selector we will use 
check instead of btn . After getting this element we added an event on this element like for this button 
we added click event. Now we need an event handler code which will be executed on occurrance of this event.
We will specify eventHandler function as second argument. Since in javascript function is also just like another
value so we can speficy function code as second argument just like other value. Event handler function will 
not called immediatly, javascript engine will call this function as soon as event occurs.
*/

document.querySelector('.again').addEventListener('click', function () {
  /**Learning**Ths is handler function and also an anonymous function */
  score = MAX_SCORE;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing...🧐');
  //document.querySelector('.message').textContent = 'Start Guessing...🧐';
});
