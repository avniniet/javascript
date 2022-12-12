// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const tempreture = [-3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/**Understanding problem*********
 *
 * What is tempreture aplitude
 *    Difference between highest and lowest tempreture in array
 *
 *  How to deal with sensor error
 *    When there is input value like 'error' in array then ignore that value
 */

/**Breaking problem into sub problem***
 * Ignore sensor error
 * Find max value in array
 * Find max value in array
 * Calculate ampliture
 *
 */

const calcTemppretureAmplitude = (tempretures) => {
  let max = tempretures[0];
  let min = tempretures[0];
  for (let i = 1; i < tempretures.length; i++) {
    if (tempretures[i] > max) {
      max = tempretures[i];
    }
    if (tempretures[i] < min) {
      min = tempretures[i];
    }
  }
  const tempreturAmplitude = max - min;
  console.log(
    `**DeveloperSkill**max tempreture = ${max} and min tempreture = ${min} and tempretureAmplitude= ${tempreturAmplitude}`
  );

  return tempreturAmplitude;
};
const tempreturAmplitude = calcTemppretureAmplitude(tempreture);
console.log(`**DeveloperSkill** tempreture amplitude = ${tempreturAmplitude}`);

//Now there will be two arrays of tempreture and we need to find tempreture aplitude
/**
 * Understanding problem
 * Do we need to calcluate tempreture ampliture twice.
 *     No. We need to merge both arrays and then calculate tempreture amplitude on merged array
 *
 * SubProblem:
 *   Merge both array
 *   Find max , min on merged array
 *   Calculate tempreture amplitude using this max and min
 */

const tempreture2 = [10, 20, -3, "error", -10, 15, 4, 13, 8];
const mergedTempreture = [...tempreture, ...tempreture2]; //tempreture.concat(tempreture2);
console.log(`**developerSkill**mergedTempretureArray = ${mergedTempreture}`);
const tempretureAmplitude = calcTemppretureAmplitude(mergedTempreture);
console.log(
  `**developerSkill**mergedTempretureArray**TempretureAmplitude = ${tempretureAmplitude}`
);

/****************************************Debugging******************************* */

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt(`Degree Celcius`)),
  };
  debugger; /**Learning**When we use debugger syntax then at this line code will automatially
  open debuggging tool in browser */
  console.table(`**DeveloperSkill**Debugging**${measurement.value}`);
  const kelvin = measurement.value + 273;
  console.log(`**DeveloperSkill**debugging**kelvinValue = ${kelvin}`);
};

measureKelvin();

/**************************************Assignment Lecture#62**********************************************/
const maxTempreture = [17, 21, 23];

const printForecast = (maxTempreture) => {
  let statement = "";
  for (let i = 0; i < maxTempreture.length; i++) {
    statement += `...${maxTempreture[i]}C in ${i + 1} days`;
  }
  console.log(statement);
};

printForecast(maxTempreture);
