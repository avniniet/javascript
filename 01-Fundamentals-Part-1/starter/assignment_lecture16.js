let markWeight;
let markHeight;
let johnWeight;
let johnHeight;
let markHigherBMI;
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

markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI is higher then John's BMI "+markHigherBMI);