'use strict';

//Assignement lecture#38  **start
const calcAvergage = (score1, score2, score3) =>{
    return(score1 + score2 + score3)/3;  
};

const averageScoreDolphin = calcAvergage(44, 23,71);
const averageScoreKoala = calcAvergage(65, 54, 49);
console.log(`**AssignmentLecture#38**averageScore of Dolphin =${averageScoreDolphin}
 and average score of koala = ${averageScoreKoala}`);

 const checkWinner = (averageScoreDolphin, averageScoreKoala)=>{
    let winner ;
    if(averageScoreDolphin >=averageScoreKoala*2){ //Dolphin score is 2 times of koala score
        console.log(`Dolhpine average score is ${averageScoreDolphin} 
        is more or equal to 2 times of koala average score ${averageScoreKoala}
         so Dolphin is winner `);
         winner = 'Dolhin';
    }else if(averageScoreKoala >= averageScoreDolphin*2){
        console.log(`Koala average score is ${averageScoreKoala} 
        is more or equal to 2 times of Dolphin average score ${averageScoreDolphin}
         so Koala is winner `);
         winner = 'Koala';
    }
    else{
        console.log("No one is winner");
        winner = `No one is winner`;
    }
    return winner;

 }

 const winner = checkWinner(averageScoreDolphin, averageScoreKoala);
 console.log(`${winner}`);

//Assignment Lecture#38 **End


//Assignement Lecture#41 **Start
let tipValue;
let calcTip = (billValue) =>{
   tipValue =0;
   if( billValue >= 50 && billValue <= 300){
       console.log(`**Assignment**bill value is between 50 and 300 and bill value is ${billValue}`);
       tipValue =  billValue*15/100;
       return tipValue;
       
   }
   else if(billValue > 300){
    tipValue =  billValue*15/100;  
    return tipValue;  
   }
   else{
       return tipValue;
   }
};
let billValue = 100;
console.log(`**Assignment2** total bill = ${billValue + calcTip(billValue)}`);

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]) ,calcTip(bills[1]), calcTip(bills[2]) ];
let total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2] ];
console.log(`**Assignment2** fisrt bill = ${bills[0]} firstTip =${tips[0]}  firstTotal=${total[0]}`);
console.log(`**Assignment2** fisrt bill = ${bills[1]} firstTip =${tips[1]}  firstTotal=${total[1]}`);
console.log(`**Assignment2** fisrt bill = ${bills[2]} firstTip =${tips[2]}  firstTotal=${total[2]}`);



//Assignement Lecture#41 **End