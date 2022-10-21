'use strict';
/**Learning**We can activate strict mode for whole JS file or for a perticular
block or function. Using this line at starting of file will activate strict mode for whole JS file.
*Strict mode help us avoide accedental errors.
*Without strict mode javascript will fail silently without telling developer about error.
*/

let hasDriversLicence = false;
const passTest = true;

if (passTest) {
  //hasDriverLicence = true;
  /**Learning**Since I have written wrong variable name and 
     strict mode is active so there javascript will fail and developer will be informed
     about error in console. If first line of strict mode is commented then in console there will be
     no error visisble thuse it will be difficult for developer to find out issue. */
}
if (hasDriversLicence) {
  console.log(`I can drive`);
}
//const interface = 'Audio';
/**Learning**strict mode will create list of keywords
 that might be added to language in later phase. Like here I used variable name interface
 and since strict mode is active so we will get error that unexpected strict mode 
 reserve keyword */

/*****************************Functions****************************************/
/**Learning**function is piece of code which we can use again and again */
function logger() {
  //Function declaration
  /**Learning**Function body.Function body will be executed when we will run function
   **
   *Function can also receive data and return data back.
   */
  console.log(`My name is Avnish Mishra`);
}

logger(); /**Learning**calling function */
logger();
console.log(logger);

function fruitProcessor(apples, oranges) {
  /**Learning**These two variable will
     be defined when function is called and they represent input data of this function */
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 3));
const num = Number('23');

console.log('**Function**age=' + calcAge(1991)); /**Learning**We can call a declared function
 before it is declared in code flow but same we can't do for anonymous function */
function calcAge(birthYear) {
  const currentYear = 2022;
  const age = currentYear - birthYear;
  return age;
}

/**Learning**Anonymous function or  Function expression
 * Anonymous function is a function without name. Function is expressed as expression.
 * Which function type developer should use depends on develoer choice.
 */
const ageAnonymousFunction = function (birthYear) {
  const currentYear = 2022;
  const age = currentYear - birthYear;
  return age;
};
const ageByAnonymousFunction = ageAnonymousFunction(1991);
console.log('**Function**Anonymous Function**. Age by anonymous function=' + ageByAnonymousFunction);

/**Learning**Arrow function. Came in ES6
 * Arrow function is simply special form of functional expression which is shorter and faster to write.
 * In Arrow function returns occurs implicitly so no need to use return keyword but also we can write
 * multiline code in code block with return statement.
 * Arrow function does not get this keyword
 */

const calcAgeByArrowFunction = (birthYear) /**This will work as parameter. In this arrow function there is only one parameter */ =>
  2022 - birthYear;
console.log('**Function**ArrowFunction**ageByArrowFunction=' + calcAgeByArrowFunction(1991));

/**Arrow function with more than one parameter*/
const yearOfRetirement = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  const retirementYear = currentYear + (60 - age);
  return retirementYear;
};

console.log('**Function**ArrowFunction**yearOfRetirement=' + yearOfRetirement(1995, 2000));

/************************************Calling function from inside another function********/
console.log(`**Function**function calling function**. ${fruitProcessor1(4, 6)}`);
function fruitProcessor1(apples, oranges) {
  const applePieces = cutFruitIntoPieces(apples);
  const orangesPieces = cutFruitIntoPieces(oranges);
  return `Juice is prepared using ${applePieces} apple pieces and ${orangesPieces} oranges pieces`;
}

function cutFruitIntoPieces(fruit) {
  return fruit * 4;
}

/**************************************Array**************************** */
/**Learing**two most important datastructure in js is array and object */
const friend1 = 'Neetish';
const friend2 = 'Bhanu';
const friend3 = 'Suraj';

const friends = ['Neetish', 'Bhanu', 'Suraj'];
console.log(`**Array**printing friends array content ${friends}`);

const years = new Array(1991, 1992, 1993, 2008, 2020, 2022);
console.log(`**Array**printing years array content = ${years}`);

console.log(`**Array**printing first element of array years = ${years[0]}`);
console.log(`**Array**printing second element of array years = ${years[1]}`);
console.log(`**Array**printing length of array = ${years.length}`); /**Learning**length is property of array */
console.log(`**Array**printing last element of array years = ${years[years.length - 1]}`); /**Learning**Here we
 are putting expression in square bracket */

friends[2] = 'Dheeru'; /**Learning**Now 3rd element of friends array is replaced with Dheeru. Although
array is declared as const even then we are able to update values in it becasue only premitive values
declared by const are immutable and array is not an premitive value*/
console.log(`**Array**printing updated friends array content ${friends}`);

//friends = ['Anshul', 'Yogendra', 'Gyanu'];/**Learning**This will fail because we are changing a const */

/**Learning**Array can hold values of different types at same time */
const myInfo = ['Avnish', 'Mishra', 1990, friends /**Putting an array into an array */];
console.log(`**Array**printing array which containing my info= ${myInfo}`);

//Exercise
console.log(`**Array**Exercise passing values from array into anonymous function aand calculating age = ${calcAge(years[0])}`);
console.log(`**Array**Exercise passing values from array into anonymous function aand calculating age = ${calcAge(years[1])}`);

/****************************************************Array Methods************************************ */
const countries = new Array();
console.log(`**ArrayMethod** push function returns lenght of array ${countries.push('India')}`);
/**Learning** This will add element at the end of the array and return length of array */
console.log(`**ArrayMethod** printing array after pushing element into it. Countries = ${countries}`);
countries.push(`China`);
console.log(`**ArrayMethod** printing array after pushing element into it. Countries = ${countries}`);

countries.unshift('USA'); /**Learning**unshift method adds element at the starting of the array */
console.log(`**ArrayMethod** unshift adds element at starting of array. ${countries}`);

console.log(`**ArrayMethod** pop method returns popped element ${countries.pop()}`);
/**Learning**pop method removes last element from the array and return popped element */
console.log(`**ArrayMethod** pop method removed last element from the array ${countries}`);

countries.pop(); /**Learning**pop method removes last element from the array */
console.log(`**ArrayMethod** pop method removed last element from the array ${countries}`);

console.log(`**ArrayMethod** shift method returns removed element ${countries.shift()}`);
/**Learning**shift method removes first element from the array and return removed element */
console.log(`**ArrayMethod** shift method removes top element from the array ${countries}`);

countries.push('India');
console.log(`**ArrayMethod** index of method returns index of searched element and if element is not there in 
array then it will return -1 so index of India is ${countries.indexOf('India')}`);

const isIndiaInArray = countries.includes('India'); /**Learning** includes returns true if element in 
array otherwise false. includes method do scrict checking so type coersion implicitly does not happen.
include is ES6 method */
console.log(
  `**ArrayMethod** includes method of array returns boolean value depending if element is there in array or not. So Is india in array = ${isIndiaInArray}`
);

/**************************************************Object*****************************************/
/**Learning** in array there is no way to identify elements by its properties but
 * only by its index/position. Object like arrays can hold different types of data. Even object can hold
 * object inside it.  */
const personalDetails = {
  //Object declaration. This is simplest way of declaring object
  firstName: `Avnish`, //Each of key is call properties
  lastName: `Mishra`,
  Job: `Software Engineer`,
  friends: friends,
};

console.log(`**Object**printing name of my friends using dot notation = ${personalDetails.friends} 
 and firstName = ${personalDetails.firstName}`); /**Learning**getting object data using dot notation */
console.log(`**Object**printing name of my friends using bracket notation= ${personalDetails['friends']}
 and firstName = ${personalDetails['firstName']}`); /**Learning**getting object data using bracket notation */
console.log(`**Object**printing object itself. ${personalDetails}`);
console.log(personalDetails); /**Learning**it will print information stored in object */

const nameKey = 'Name';
console.log(`**Object**printing name of my friends using bracket notation= ${personalDetails['first' + nameKey]}
 and firstName = ${personalDetails['last' + nameKey]}`); /**Learning** in bracket notation we can use computed
  property name but same is not applicable for dot notation. In dot notation we need to use final property
  name instead of computed property name. If we will try to access property which is not present then it will return undefined*/
const interestedIn = prompt('What do you want to know about Avnish. Choose between firstName, lastName,job, friends');
console.log(`**Object**printing object details of prompt property.
 Using dot notation. Dot notation will return undefined because personalDetails does not have property 
 interestedIn ${personalDetails.interestedIn}  and using bracket notation ${personalDetails[interestedIn]}`);

personalDetails.location = 'Lucknow';
personalDetails['mailId'] = 'avniniet@gmail.com';
console.log(`**Object**printing newly added properties. Location=${personalDetails.location} and mailId=${personalDetails.mailId}`);

//Challenge
console.log(`**Object**. ${personalDetails.firstName} ${personalDetails.lastName}
 has ${personalDetails.friends.length} friends and out of these friends ${personalDetails.friends[0]} 
 is his best friend`);

/*********************************************Object Methods***************************************/
/**Learning**function is just another type of value so we can add function into object
 * as key value pair when value is function */
const personalDetails1 = {
  //Object declaration. This is simplest way of declaring object
  firstName: `Avnish`, //Each of key is call properties
  lastName: `Mishra`,
  Job: `Software Engineer`,
  friends: friends,
  birthYear: 1991,

  calcAge: function (birthYear) {
    this.age = 2022 - birthYear;
    console.log(`**ObjectMethod** birthYear is ${this.birthYear} and age= ${this.age}`);
    return this.age;
  },

  checkDrivingLicenceEligibility: function () {
    this.hasDriversLicence; /**Learning**This line will created a property hasDriversLicence in object 
        and default value of it is undefined */
    this.age = 2022 - this.birthYear;
    if (this.age > 18) {
      this.hasDriversLicence = true;
      return this.hasDriversLicence;
    } else {
      this.hasDriversLicence = true;
      return this.hasDriversLicence;
    }
  },
};
personalDetails1.checkDrivingLicenceEligibility();
console.log(`**ObjectMethod**age=${personalDetails1.calcAge(personalDetails1.birthYear)} and does ${personalDetails1.firstName} 
 has driving licence =${personalDetails1.hasDriversLicence} and age = ${personalDetails1.age}`);

//Challenge lecture#44
console.log(`${personalDetails1.firstName} ${personalDetails1.lastName} is a ${personalDetails1.age}
  years old ${personalDetails1.Job} and he ${personalDetails1.hasDriversLicence ? 'has driving licence' : 'does not has driving licence'}`);

/*********************************************loop**********************************************/
console.log(`**loop**Lifting weight. repition1 😪`);
console.log(`**loop**Lifting weight. repition2 😪`);
console.log(`**loop**Lifting weight. repition3 😪`);
console.log(`**loop**Lifting weight. repition4 😪`);
console.log(`**loop**Lifting weight. repition5 😪`);

for (let rep = 1; rep <= 5 /**Learning**this condition is evaluated before each loop iteration*/; rep++) {
  console.log(`**loop**Using loop.Lifting weight. repition${rep} 😪`);
}

//loop an array and get its elements
const students = ['Avnish', 'Neetish', 'Ashish', 'Bhanu', 'Gyanu', 'Suraj'];
const types = [];
for (let itr = 0; itr < students.length; itr++) {
  types[itr] = typeof students[itr];
  console.log(`**loop**iterating array.Student${itr + 1}= ${students[itr]} and its type is ${typeof students[itr]}`);
}

console.log(`**loop**. Printing type array. ${types}`);

const yearsInLoop = [1991, 2007, 2002, 1989, 2021];
const agesInLoop = [];
const currentYearsInLoop = 2022;
for (let itr = 0; itr < yearsInLoop.length; itr++) {
  agesInLoop.push(currentYearsInLoop - yearsInLoop[itr]);
}
for (let itr = 0; itr < agesInLoop.length; itr++) {
  console.log(`**loop**printing calcuated ages in array. age${itr} = ${agesInLoop[itr]}`);
}
const continueExampleArray = [1991, 'Avnish', true, 'Neetish', 1889];
for (let itr = 0; itr < continueExampleArray.length; itr++) {
  if (typeof continueExampleArray[itr] === 'string') {
    console.log(`**loop**since array element is of type string so printing it else will continue this loop. ${continueExampleArray[itr]}`);
  } else {
    console.log(`**loop** since type of current element is not string so continuing current iteration`);
    continue; /**Learning** on continue current loop iteration will termination and next 
        iteration of same loop will start. Instead of continue if we will use break then it will terminate
        not only current iteration but also current loop*/
  }
}

/*************************************************While loop ***************************************/
let rollOfDice = Math.trunc(Math.random() * 6) + 1;
while (rollOfDice !== 6) {
  console.log(`**WhileLoop**printing rollOfDice = ${rollOfDice}`);
  rollOfDice = Math.trunc(Math.random() * 6) + 1;
}

console.log('Live server is active');
