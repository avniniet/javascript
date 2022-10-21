'use strict';

//Assignement lecture#38  **start
const calcAvergage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const averageScoreDolphin = calcAvergage(44, 23, 71);
const averageScoreKoala = calcAvergage(65, 54, 49);
console.log(`**AssignmentLecture#38**averageScore of Dolphin =${averageScoreDolphin}
 and average score of koala = ${averageScoreKoala}`);

const checkWinner = (averageScoreDolphin, averageScoreKoala) => {
  let winner;
  if (averageScoreDolphin >= averageScoreKoala * 2) {
    //Dolphin score is 2 times of koala score
    console.log(`Dolhpine average score is ${averageScoreDolphin} 
        is more or equal to 2 times of koala average score ${averageScoreKoala}
         so Dolphin is winner `);
    winner = 'Dolhin';
  } else if (averageScoreKoala >= averageScoreDolphin * 2) {
    console.log(`Koala average score is ${averageScoreKoala} 
        is more or equal to 2 times of Dolphin average score ${averageScoreDolphin}
         so Koala is winner `);
    winner = 'Koala';
  } else {
    console.log('No one is winner');
    winner = `No one is winner`;
  }
  return winner;
};

const winner = checkWinner(averageScoreDolphin, averageScoreKoala);
console.log(`${winner}`);

//Assignment Lecture#38 **End

//Assignement Lecture#41 **Start
let tipValue;
let calcTip = (billValue) => {
  tipValue = 0;
  if (billValue >= 50 && billValue <= 300) {
    console.log(`**Assignment**bill value is between 50 and 300 and bill value is ${billValue}`);
    tipValue = (billValue * 15) / 100;
    return tipValue;
  } else if (billValue > 300) {
    tipValue = (billValue * 15) / 100;
    return tipValue;
  } else {
    return tipValue;
  }
};
let billValue = 100;
console.log(`**Assignment2** total bill = ${billValue + calcTip(billValue)}`);

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`**Assignment2** fisrt bill = ${bills[0]} firstTip =${tips[0]}  firstTotal=${total[0]}`);
console.log(`**Assignment2** fisrt bill = ${bills[1]} firstTip =${tips[1]}  firstTotal=${total[1]}`);
console.log(`**Assignment2** fisrt bill = ${bills[2]} firstTip =${tips[2]}  firstTotal=${total[2]}`);

//Assignement Lecture#41 **End

//Assignement Lecture#45 **Start
/**Learning** Here we have created two objects with near same code. When we use object Oriented programming
 * then this repetition will not be required.
 */
const user1 = {
  fullName: 'Avnish Kumar Mishra',
  mass: 80,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

user1.calcBMI(); //On calling this function a new property bmi created. Without calling value of bmi property is undefined
console.log(`**Assignment**lecture#45. BMI of ${user1.fullName} is ${user1.bmi}`);

const user2 = {
  fullName: 'Neetish Jha',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; /**Learning**This will create a property bmi for
        this object when this function is called**/
    return this.bmi;
  },
};
user2.calcBMI(); /**Learning** if this line is not written then bmi will be shown as undefined becasue
bmi property is created only from this function*/
console.log(`**Assignment**lecture#45. BMI of ${user2.fullName} is ${user2.bmi}`);

const bmiCheckMessage =
  user1.calcBMI(user1.mass, user1.height) > user2.calcBMI(user2.mass, user2.height)
    ? `BMI of ${user1.fullName} is more than ${user2.fullName} `
    : `BMI of ${user2.fullName} is more than ${user1.fullName} `;
console.log(`**Assignment**Lecture#45. ${user1.fullName} has weight ${user1.mass} and height ${user1.height}
  and BMI is ${user1.calcBMI(user1.mass, user1.height)}. ${user2.fullName} has weight ${user2.mass}
  and height ${user2.height}
  and BMI is ${user2.calcBMI(user2.mass, user2.height)}.
  ${bmiCheckMessage}`);

//Assignement Lecture#45 **End

//Assignement Lecture#50 **Start
const billsNew = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsNew = [];
const totalNew = [];

for (let i = 0; i < billsNew.length; i++) {
  tipsNew[i] = calcTip(billsNew[i]);
  totalNew[i] = tipsNew[i] + billsNew[i];
}

console.log(`**Assignment**lecture#50. Bills = ${billsNew}`);
console.log(`**Assignment**lecture#50. Tips = ${tipsNew}`);
console.log(`**Assignment**lecture#50. Total = ${totalNew}`);

let sum = 0;
let calcAverage = (arr) => {
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  } else {
    return 0;
  }
};

const arrayInAssignment = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`**Assignment**lecture#50. average of array = ${calcAverage(arrayInAssignment)}`);
console.log(`**Assignment**lecture#50. average of array = ${calcAverage(tipsNew)}`);
console.log(`**Assignment**lecture#50. average of array = ${calcAverage(totalNew)}`);

//Assignement Lecture#50 **End
