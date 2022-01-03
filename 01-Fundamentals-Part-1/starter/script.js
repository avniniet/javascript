let js = 'amazing';//**Learing**Semicolon is not mendatory but it is good practice to write it at the end of line
    if(js === 'amazing'){
      alert('Javascript is fun');
    }
   40+8+23-10;//**Learing**Since we have not told js, where to show this result so this will not be at this moment this will not be visible anywhere on page
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