/**Learning**javascript is high-level, object oriented, multiparadigm programming language
 * High Level: During writting code in this language we dont need to go for low level
 * management like mamory management and etc
 * 
 * Object Oriented: Language is mostly based on concept of object for storing most kind of data
 * 
 * Multi-paradigm: Javascript is so flexible that we can use different coding styles
 * like imperative or declarative programming style. These difference styles are way of 
 * stucturing your code 
 */


/**Learning**
 * HTML: responsible for concept of page. Noun
 * CSS: responsible for presentation of page. Adjective
 * Javascript: programming language of internet. Verb
 * 
 * 
 * We can run javascript outside web browser ie web server using nodeJS so in this way
 * this allowes to create backend code
 * 
 * When we write code to run in browser then it is called  frontend code
 * 
 * We can also use javascript to write native mobile application as well native desktop
 * application
 */

let js = 'amazing';//**Learing**Semicolon is not mendatory but it is good practice to write it at the end of line
    if(js === 'amazing'){
      alert('Javascript is fun');
    }
   40+8+23-10;/**Learing**Since we have not told js, where to show this result so this will not 
   be at this moment this will not be visible anywhere on page*/
 console.log(40+8+23-10);//**Learning**Here we told js  to show result of this calculation on console

 console.log(23);//**Learning** telling js to print on consol

/**Learning** every value in javascript is either primitive or object */

 let firstName = "Avnish";
 console.log(firstName);
//--------------------DataType-------------------------------------------------------
 /**Learning** 7 Primitive data type: Numer, String, Boolean, Undefined(value taken by variable is not yet defined) 
  *, Null(empty value), Symbol(value that is unique and can not be changed),
    BigInt(Larger integer than number type can hold).


 */

/**Learning** Javascript has dynamic typing. We do not have to manually define data
 * type of the value stored in variable. Instead data types are determined automatically.
 */
let javaSctiptIsFun = true;/**Learning**First time when we are declaring a variable 
we use the keyword let**/
console.log(javaSctiptIsFun);

console.log(typeof true);/**Learning**typeof is operator to know datatype of a variable*/
console.log(typeof javaSctiptIsFun);//boolean
console.log(typeof 23);//number
console.log(typeof 'Avnish');//string
console.log(typeof "Avnish");//string
/*console.log(typeof Avnish);**Learning**This will give error Avnish is not defined 
because without any qoute it is considered as variable name which is not defined
*/

javaSctiptIsFun = "New Value";/**Learing**Earlier this variable was containing boolean
value but now we stored string value in it. So in javascript dynamic typing is present */

console.log(typeof javaSctiptIsFun);//This time datatype of thid variable will be shown as string


let year;/**Learning** Here value contained by variable is undefined and its data type is also undefined */
console.log(year);
console.log(typeof year);
year =1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);//This will be printed as object and it is bug in javaScript typeof operator 
/**Learing**we use let to declare variable which can mutate in future but value of const can not be changed */
let age = 30;
age = 31;//reassigning value to variable. This is called mutating variable

const birthYear = 1991;
//birthYear =1990;/**This will give typeError because we are trying to mutate a constant */
//const job ;/**Learning**This will give Missing Initilizer error because we are declaring const without value*/


/**Learing**we can also declare variable with 'var' keyword but it should be avoided. var and let 
 * looks similar but both works differently under the hood. let is block scope and var is function scope.
 */
var job = 'Programmer';
job = 'teacher';

lastName = 'Mishra';/**Learing**this will not create a variable at current scope instead
of this will create a property on global object. This way of declaring variable should 
be avaided */
console.log(lastName);


/**-----------------------------------------------------------Operators--------------------------------- */
const now = 2037;
const ageAvnish = now-1991;
const ageNeetish = now-2018;
console.log(ageAvnish);
console.log(ageAvnish, ageNeetish);

console.log(ageAvnish*2, ageNeetish/2, 2**3);/**Learning** 2**3 means 2 to the power 3 */
const firstNameOfBhanu = 'Bhuwaneshwar';
const lastNameOfBhanu = 'Pandey';
console.log(firstNameOfBhanu + " "+lastNameOfBhanu);


let x = 10;
x += 5; /**learning** it means x=x+5 */
console.log(x);



/********************************************String & Template literal*********** */
console.log("Starting String and template literal");
const firstNameNeetish = "Neetish";
const jobNeetish = "Bank Manager";
const birthYearNeetish = 1991;
const currentYear = 2022;
const message = "I'm "+ firstNameNeetish + ", a "+ (currentYear - birthYearNeetish) + " years old "+ jobNeetish ;
console.log(message);
console.log('String with \n\
multiple \n\
lines');

//template literal 
 /**Learning** in String template literal we use back ticks ``.
 It is ES6 feature */
const messageUsingTemplateLiteral = `Hi All I'm ${firstNameNeetish} , a ${currentYear - birthYearNeetish} years old  ${jobNeetish}`;
console.log(messageUsingTemplateLiteral);
console.log(`I am Bank Manager in Bank of Maharastra`);
console.log(`String with
multiple 
line using template `);


/***********************************If/Elese**********************************************************/
const currentAgeOfAshish =17;
const requiredAgeForDrivingLicence = 18;
const isOldEnough = currentAgeOfAshish >= requiredAgeForDrivingLicence;
if( isOldEnough){
  console.log(`Ashish is eligible for getting driving licence`);
}
else{
  console.log(`Ashish is not eligible for getting driving licence he should wait for ${requiredAgeForDrivingLicence - currentAgeOfAshish} more year`);
}


/***********************************Type Conversion and Coersion**********/
/**Learning**Type conversion is when we manually convert one type into other */
/**Learning**Type coersion is when javascript convert type internally  */

//Type conversion
const inputYear = '1991';
/*If we will do adding in this input year then instead of adding string concatanation 
will happen*/
console.log(inputYear +18);//output 199118
console.log(Number(inputYear) + 18);//output 2009
/**Learning** if string does not contain number then we after converting 
 that into no we will get NaN. typeof NaN is number but it is invalid number */
console.log(Number('Avnish'));//output NaN (Not a number)
console.log(typeof Number('Avnish'));//Output number

//Type coersion
console.log('I am '+23 +' years old');//JS will internally convert 23 into string.
console.log('23' - '10');//output is 10
console.log(typeof ('23' - '10'));//number
console.log('23' + '10' + 3 ); //23103. Because  + is concatanation operator

let n = '1' + 1;
n = n-1;
console.log(n)//output is 10. First value of n becomes '11' and when we substract 1 from this string literal it converted into 11 internally by JS   


/**************************************truthy and falsy valie********************************************/
/**Learning** there are 5 falsy values 0, '', undefined,null, NaN. By default these are not false but converted
 * into boolean they take false value.
 * 
 * Similerly any no which is not 0 or any string which is not empty will be converted into true when converted
 * into boolean
 */
console.log("Starting of truthy and falsy section");
console.log(`boolean of 0 ${Boolean(0)}`);//false
console.log(`boolean of undefined${Boolean(undefined)}`);//false
console.log(`booean of empty string ${Boolean('')}`);//false
console.log(`boolean of NaN ${Boolean(NaN)}`);//false
console.log(` boolean of non empty string ${Boolean('Avnish')}`);//true
console.log(` boolean of empty object ${Boolean({})}`);/**Learning** when empty object
 is converted into boolean then it takes true value */


const money = 0;
if(money){/**Learning** here `coersion` happens where 0 is converted into boolean value.
  Since its boolean value is false so it will go into else block */
  console.log(`Since I have money now so we can make our life luxirious`);
}
else{
  console.log(`I dont have any money so stop your expenduture`);
}
const personCount =1;
if(personCount){
  console.log(`at least someone is there`);
}else{
  console.log(`It is sad to say that no one came`);
}

//use truthy and falsy to check value is defined or not
let height;
console.log(`type of height ${typeof(height)}`);
if(height){/**Learning**since height is not defined so it will be false on
   coersion into boolean. Problem with this approach is that even if height is 0
   it will be taken as false value because boolean of 0 is also false. For that case
   we need to go for equality operator. */
  console.log(`height is defined`);
}else{
  console.log(`height is not defined`);
}



/******************************Equality operator*********************************/
/**Learning** `===` is called strict equality operator. It is scrict because it
 * does not do type coersion and returns true only if value at both end are same.
 * 
 * `==` loose equality operator. It does type coersion.
 * 
 * Similarly `!==` is strict version and `!=` is loose version  
 * 
 * As a general rule for JS coding avoid loose equality as much as possible.
 */


console.log(`Starting of equality operator`);
console.log(`${'18' === 18}`);/*false. Since `===` do not does type coersion so string
 is compared with number and it returnes false.*/
 console.log(`${'18' == 18}`);/*true. Since `==` does type coersion. First '18' is converted into number */
const equalitySectionAgeVar =18;
if(equalitySectionAgeVar === 18){
  console.log(`Since age is ${equalitySectionAgeVar} so he/she is eligible for voting`);
}


const valueFromUI = prompt(`What is your favourate value`);/**Learning** prompt is function to collect value from UI */
console.log(valueFromUI);
console.log(typeof(valueFromUI));//string

if(valueFromUI == 23){/*Loose equality. valueFromUI is string and compared with number so `==` coersion 
will take place and if value entered is 23 so it is true. If instead of `==` if there is `===` they coersion 
will not take place so even user entered 23, since there is type difference so comparision will return false*/
 
console.log(`You entered 23`);

}

