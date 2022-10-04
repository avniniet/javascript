/**Learning**javascript is high-level, object oriented, multiparadigm programming language
 * High Level: During writting code in this language we dont need to go for low level
 * management like mamory management and etc
 * 
 * Object Oriented: Language is mostly based on concept of object for storing most
 *  kind of data
 * 
 * Multi-paradigm: Javascript is so flexible that we can use different coding styles
 * like imperative or declarative programming style. These difference styles are way of 
 * stucturing your code 
 */


/**Learning**3 core technologies of web
 * HTML: responsible for content of page. Noun
 * CSS: responsible for presentation of content. Adjective
 * Javascript: programming language of internet. Verb
 * 
 * 
 * We can run javascript outside web browser ie web server using nodeJS so in this way
 * this allowes to create backend code. For ruunning node code we don't need web browser.
  * 
 * When we write code to run in browser then it is called  frontend code
 * 
 * We can also use javascript to write native mobile application as well native desktop
 * application
 * 
 * 
 * *******in git origin..origin stands for url from which current repository is cloned
 */
/**Learning** a value is actually piece of data which is most fundamental unit of data in programming.
 * We can store values in variables.
 */

let js = 'amazing';/**Learing**Semicolon is not mendatory but it is good practice to write it at
 the end of line*/
    if(js === 'amazing'){
      alert('Javascript is fun');
    }
   40+8+23-10;/**Learing**Since we have not told js, where to show this result
    so this will not   be at this moment this will not be visible anywhere on page*/
 console.log(40+8+23-10);//**Learning**Here we told js  to show result of this calculation on console

 console.log(23);//**Learning** telling js to print on consol

 let firstName = "Avnish";/**Learning** declaring variable and assigning value to it*/
 console.log(firstName);
//--------------------DataType-------------------------------------------------------
 

/**Learning** every value in javascript is either primitive or object.*/

/**Learning** 7 Primitive data type:
 *  Number(used for floating point or integer),
 *  String(sequence of characters no matter in single or double quote),
 *  Boolean(values of this datatype can be true or false),
 *  Undefined(value taken by variable is not yet defined) ,
 *  Null(empty value), 
 * Symbol(value that is unique and can not be changed. It was introduced from ES2015),
    BigInt(Larger integer than number type can hold. It was introduced from ES2020).
         In Javascript no integer and decimal datatype only number data type

 */

/**Learning** Javascript has dynamic typing. We do not have to manually define data
 * type of the value stored in variable. Instead data types are determined automatically.
 * Javascript determines data type on its own
 * 
 * In javascript, it is value which has datatype not variable. This give us flexibility that
 * that we can assign value of different data type to same variable in future
 *  let a = 10;  //currently value has data type as number which is stored in variable a
 *  a = "Avnish";  //Now value has datatype String which is stored in same variable a
 */

/**Learning**First time when we are declaring a variable we use the keyword let**/
let javaSctiptIsFun = true;
console.log('**Datatype**'+javaSctiptIsFun);

console.log('**Datatype**'+typeof javaSctiptIsFun);

console.log("**Datatype**type of true is "+typeof true);/**Learning**typeof is operator to know datatype of a variable*/
console.log("**Datatype**type of javaScriptIsFun "+typeof javaSctiptIsFun);//boolean
console.log("**Datatype**Type of 23 is "+typeof 23);//number
console.log("**Datatype**Type of /'Avnish/' "+typeof 'Avnish');//string
console.log("**Datatype**Type of Avnish in double quotes "+typeof "Avnish");//string
/*console.log(typeof Avnish);**Learning**This will give error Avnish is not defined 
because without any qoute it is considered as variable name which is not defined
*/

javaSctiptIsFun = "New Value";/**Learing**Earlier this variable was containing boolean
value but now we stored string value in it. So in javascript dynamic typing is present */

console.log("Type of javascriptIsFun after assigning it to new value "+typeof javaSctiptIsFun);//This time datatype of this variable will be shown as string


let year;/**Learning** Here value contained by variable is undefined and its data type is also undefined */
console.log(year);/**Learning** value of variable is undefined */
console.log(typeof year);/**Learning** type of variable is undefined */
year =1991;
console.log(year);//1991 
console.log(typeof year);//number

console.log(typeof null);/**Learning**This will be printed as object and it is bug in javaScript typeof operator */

/***************************Variable declation*********************************************/
/**Learning**we use let to declare variable which can mutate in future but value of const can not be changed */
let age = 30;/**Learning** let and const were introduced into ES6 while var keyword is old way of declaring variables */
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
/**Learning** An operator allows us to transform values by combining multiple values*/
const now = 2037;
const ageAvnish = now-1991;
const ageNeetish = now-2018;
console.log("**Operators**Age of avnish"+ageAvnish);
console.log("**Operators**Age of avnish"+ageAvnish+", age of Neetish"+   ageNeetish);

console.log(ageAvnish*2, ageNeetish/2, 2**3);/**Learning** 2**3 means 2 to the power 3 */
const firstNameOfBhanu = 'Bhuwaneshwar';
const lastNameOfBhanu = 'Pandey';
console.log("**String concatanation "+firstNameOfBhanu + " "+lastNameOfBhanu);


let x = 10;
console.log("**Operators**"+x);
x += 5; /**learning** it means x=x+5 */
console.log("**Operators**"+x);

//Comperision Operator
/**Learning**browser consol has access to all variables which are present in current browser tab */
console.log("**ComparisionOperator**"+ageAvnish > ageNeetish)//boolean value





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
  console.log(`Ashish is eligible for getting driving licence 😀`);
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
console.log(Number('Avnish'));//output NaN (Not a number). Whenever opertion involves number but failes to return a number then Nan is printed
console.log(typeof Number('Avnish'));//Output number. It is a number but an invalid number

//Type coersion
console.log('I am '+23 +' years old');//JS will internally convert 23 into string.
console.log('23' - '10');//output is 10
console.log(typeof ('23' - '10'));//number
console.log('23' + '10' + 3 ); //23103. Because  + is concatanation operator

let n = '1' + 1;
n = n-1;
console.log(n)/*output is 10. First value of n becomes '11' and when we substract 1
 from this string literal it converted into 11 internally by JS   */


/**************************************truthy and falsy value********************************************/
/**Learning** there are 5 falsy values 0, '', undefined,null, NaN, false. By default these are not false
 *  but converted into boolean they take false value. * 
 * Similerly any no which is not 0 or any string which is not empty will be converted into true when converted
 * into boolean
 */
console.log("**truthy and falsy value**Starting of truthy and falsy section");
console.log(`**truthy and falsy value**boolean of 0 ${Boolean(0)}`);//false
console.log(`**truthy and falsy value**boolean of undefined${Boolean(undefined)}`);//false
console.log(`**truthy and falsy value**booean of empty string ${Boolean('')}`);//false
console.log(`**truthy and falsy value**boolean of NaN ${Boolean(NaN)}`);//false
console.log(`**truthy and falsy value**boolean of non empty string ${Boolean('Avnish')}`);//true
console.log(`**truthy and falsy value**boolean of empty object ${Boolean({})}`);/**Learning** when empty object
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
console.log(`type of height ${typeof(height)}`);//undefined
if(height){/**Learning**since height is undefined so it will be false on
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

const hasDriverLicence = true;
const hasGoodVision = true;
console.log(`**Equality operator**${hasDriverLicence && hasGoodVision}`)//true
const shouldDrive = hasGoodVision && hasDriverLicence;
if(shouldDrive){
  console.log(`Avnish Can drive vehicle`);
}else{
  console.log(`Currently Avnish should not drive vehicle`);
}
console.log(`**Equality operator**Starting of equality operator`);
console.log(`**Equality operator**${'18' === 18}`);/*false. Since `===` do not does type coersion so string
 is compared with number and it returnes false.*/
 console.log(`**Equality operator**${'18' == 18}`);/*true. Since `==` does type coersion. First '18'
  is converted into number and then comparision happens so both are equal and result will be true */
const equalitySectionAgeVar =18;
if(equalitySectionAgeVar === 18){
  console.log(`Since age is ${equalitySectionAgeVar} so he/she is eligible for voting`);
}


const valueFromUI = prompt(`What is your favourate value`);/**Learning** prompt is function to collect
 value from UI */
console.log(valueFromUI);
console.log(typeof(valueFromUI));//string

if(valueFromUI == 23){/*Loose equality. valueFromUI is string and compared with number so `==` coersion 
will take place and if value entered is 23 so it is true. If instead of `==` if there is `===` they coersion 
will not take place so even user entered 23, since there is type difference so comparision will return false*/
 
console.log(`You entered 23`);

}

/*****************************************Switch statement**************************************/


const day = 'Sunday';
switch(day){
  case 'Monday' :/**Learning**compare day to Monday in strict equality way  like day === 'Monday' */
    console.log(`**switch statement**We will study Sanskrit on Monaday as per timetable`);
    break;
  case 'Tuesday' :
    console.log(`**switch statement**We will study Hindi on Tuesday as per timetablbe`);
    break;
  default:
    console.log(`**switch statement**Not a valid study day`);
    
}

console.log(`**switch statement**Implementing switch stement logic using if else`);
if(day === 'Monday'){
  console.log(`We will study Sanskrit on Monaday as per timetable`);
}else if(day === 'Tuesday'){
  console.log(`We will study Hindi as per timetable`);
}else{
  console.log("Not a valid study day");
}


/************************************Statement and Expression*************************************/
/**Learning**Expression is a piece of code which produe a value */
/**Learning**JS expects expression in a template literal instead of statement */

/************************************Ternary operator*********************************************/
const  tempAge = 23;
tempAge >= 18 ? console.log(`Age is more than 18`) : console.log(`Age is less than 18`);
