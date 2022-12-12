'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

console.log(
  btnsOpenModal
); /**Learning**Although there are 3 buttons with show-modal class
but in consol we will see only first button 'Show Modal 1'. This is due to limitation of 
querySelector. Whenever we are using querySelector with some selector, if there are more 
than one element with that selector then only first one is selected. To get rid of this 
limitation we use querySelectorAll*/

const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove(
    'hidden'
  ); /**Learning**This will remove class from an element. Using this we can remove 
    multiple classes by giving class name in comma seprated. We no need to use '.' here*/

  /*modal.style.display = 'block'; /**Learning**instead of above we can use this code as well. Here we are
    setting display propery to block which is earlier set to none and in above code display is set to none in
    hidden class and we are removing it*/
  overlay.classList.remove('hidden');
};

console.log(
  btnsShowModal
); /**Learning**This time we will get node list in console which 
will contain all elements with same selector name and it will be like an array*/

for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(`${btnsShowModal[i].textContent}  button clicked`);
  btnsShowModal[i].addEventListener('click', openModal);
}
/**Learning**eventListener are invoked by javascript engine when that specific event occurs */
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
/**Learning**some events are global events because thay are not happenning on specific element like keypress
event.  */
document.addEventListener(
  'keydown',
  function (
    event /**Learning**we can give any name to this oject. It is actually
an event object which contains all information related to event. When event occurs javascript calls this 
function with event object. Even we add event object in function it means we are telling javascript
engine to send even object in event handler function when specific event occurs*/
  ) {
    /**Learning**This function will be executed for anykey down. Which key is pressed, this information is 
  stored in event that occurs as soon as event occurs. When this event occurs javascript generates an object
  which contains all information regarding event itself */
    console.log('A key is pressed');
    console.log(event);
    console.log(event.key, typeof event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      /**On clicking Esc button we want to close modal but before this we need to check that is 
      modal is currently open or not. If modal does not contain class hidden it means modal is visible
      otherwise  not */
      closeModal(); /**Learning**Here we are calling it as function which in overylay and btnsShowModal we 
      called it as const. This is because if we call closeModal as function in overlay and btnsShowModal event
      Listener then it will trigger even without event occurs */
    }
  }
); /**Learning**Adding eventlistener on document means we are adding eventlistener 
everywhere. There are 3 types of events on keyboard. Key-down, key-press, key-up */
