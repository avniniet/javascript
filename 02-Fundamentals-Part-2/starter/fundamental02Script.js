'use strict';
/**Learning**We can activate strict mode for whole JS file or for a perticular
block or function. Using this line at starting of file will activate strict mode for whole JS file.
*Strict mode help us avoide accedental errors.
*Without strict mode javascript will fail silently without telling developer about error.
*/

 let hasDriversLicence = false;
 const passTest = true;

 if(passTest){
     //hasDriverLicence = true;
     /**Learning**Since I have written wrong variable name and 
     strict mode is active so there javascript will fail and developer will be informed
     about error in console. If first line of strict mode is commented then in console there will be
     no error visisble thuse it will be difficult for developer to find out issue. */
 }
 if(hasDriversLicence){
      console.log(`I can drive`);
 }
 //const interface = 'Audio';
 /**Learning**strict mode will create list of keywords
 that might be added to language in later phase. Like here I used variable name interface
 and since strict mode is active so we will get error that unexpected strict mode 
 reserve keyword */


 /*****************************Functions****************************************/
 /**Learning**function ids piece of code which we can use again and again */
 function logger() {//Function declaration
    /**Learning**Function body.Function body will be executed when we will run function
    **
    *Function can also receive data and return data back.
    */
   console.log(`My name is Avnish Mishra`);
 }
 
 logger();/**Learning**calling function */
 logger();
 console.log(logger);

 function fruitProcessor(apples , oranges){/**Learning**These two variable will
     be defined when function is called and they represent input data of this function */
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
 }

 console.log(fruitProcessor(5,3));
 const num = Number('23');


 console.log("**Function**age="+calcAge(1991));/**Learning**We can call a declared function
 before it is declared in code flow but same we can't do for anonymous function */
function calcAge(birthYear){
    const currentYear = 2022;
    const age = currentYear - birthYear;
    return age;
}


/**Learning**Anonymous function or  Function expression
 * Anonymous function is a function without name. Function is expressed as expression.
 * Which function type developer should use depends on develoer choice.
 */
const ageAnonymousFunction = function(birthYear){
    const currentYear = 2022;
    const age = currentYear - birthYear;
    return age;
}
const ageByAnonymousFunction = ageAnonymousFunction(1991);
console.log("**Function**Anonymous Function**. Age by anonymous function="+ageByAnonymousFunction);

/**Learning**Arrow function. Came in ES6
 * Arrow function is simply special form of functional expression which is shorter and faster to write.
 * In Arrow function returns occurs implicitly so no need to use return keyword but also we can write 
 * multiline code in code block with return statement.
 * Arrow function does not get this keyword
*/

const calcAgeByArrowFunction = birthYear/**This will work as parameter. In this arrow function there is only one parameter */=>2022  - birthYear;
console.log("**Function**ArrowFunction**ageByArrowFunction="+calcAgeByArrowFunction(1991));

/**Arrow function with more than one parameter*/
const yearOfRetirement = (birthYear, currentYear) =>{
    const age = currentYear - birthYear;
    const retirementYear = currentYear + (60 - age); 
    return retirementYear;

};

console.log("**Function**ArrowFunction**yearOfRetirement="+yearOfRetirement(1995,2000));


/************************************Calling function from inside another function********/
console.log(`**Function**function calling function**. ${fruitProcessor1(4,6)}`);
function fruitProcessor1(apples, oranges){
    const applePieces = cutFruitIntoPieces(apples);
    const orangesPieces = cutFruitIntoPieces(oranges);
    return `Juice is prepared using ${applePieces} apple pieces and ${orangesPieces} oranges pieces`;
}

function cutFruitIntoPieces(fruit){
    return fruit*4;

}
