let markWeight;
let markHeight;
let johnWeight;
let johnHeight;
let isMarkBMIHigher;
let markBMI;
let johnBMI;

markWeight = 78;
markHeight = 1.69;

markBMI = markWeight/markHeight**2;
console.log("Mark height is "+ markHeight+ " and Mark weight is "+markWeight +" Mark BMI is "+ markBMI);


johnWeight = 92;
johnHeight = 1.95;

johnBMI = johnWeight/(johnHeight*johnHeight);
console.log("John height is "+ johnHeight + " John weight is "+ johnWeight + " and John BMI is "+ johnBMI);

isMarkBMIHigher = markBMI > johnBMI;
console.log("Mark BMI is higher then John's BMI "+isMarkBMIHigher);
//Lecture 19 assignment
if(isMarkBMIHigher){
  console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
}
else{
  console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}


/*****************************************Assignment Lecture#25**********************************/
console.log(`Assignement Lecture#25`);
const averageScoreDolphin = (96+108+89)/3 ;
const averageScoreKoala = (88+91+110)/3;
console.log(`Average score of Dolphin ${averageScoreDolphin}😫`);
console.log(`Average score of Koala ${averageScoreKoala}😋`);
const minScoreRequiredToDeclareWinner = 100;

if(averageScoreKoala > averageScoreDolphin && averageScoreKoala>=minScoreRequiredToDeclareWinner){
  console.log(`Koala's are winner`);
}else if(averageScoreDolphin > averageScoreKoala && averageScoreDolphin>=minScoreRequiredToDeclareWinner){
  console.log(`Dolphin's are winner`);
}else if(averageScoreDolphin === averageScoreKoala && averageScoreKoala === minScoreRequiredToDeclareWinner){
  console.log(`Match is tie and no one is winner😁`);
}


/**************************************Assignment Lecture#29 **************************************/
console.log(`Assignment Lecture#29`);

const billValue = 500;
const tipPercentage =  50 <= billValue <= 300 ? 15 : 20;
const tipValue = billValue*tipPercentage/100;
const  finalAmount = billValue + tipValue;
console.log(`BillValue=${billValue}, tipPercentage=${tipPercentage}, tipValue=${tipValue}, finalAmount=${finalAmount}`)