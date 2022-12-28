'use strict';
/**Learning** this keyword in global scope is window object */
console.log(this);

var firstName1 = 'Avnish';

/**Learning**
This keyword is special variable that is created for evey execution 
context(every function).

Takes the value of (points to) the owner of the function in which this keyword is used.

'this' is dynamic. It depends on how the function is called, and its value is
only assigned when the function is actually called.
    

'this' keyword does not point to the function itself and not to its variable environment.
          
      */

const calcAgeRegular = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

/**Learning** in regular function call, here this keyword will point to undefined in 
  strict mode */
calcAgeRegular(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

/**Learning** Arrow function does not gets its this keyword. In arrow function call, 
  here this keyword will come from parent function and in parent function here this keyword points to window
  object so on consol window object will be printed  */
calcAgeArrow(1980);

const jonas = {
  firstName1: 'Jonas',
  lastName: 'Methew',
  year: 1991,
  calcAge: function () {
    /**Learning** when we have a method call, this keyword in side of the method will be an object which is 
   calling the method. In this case jonas object is calling method so this keyword points to jonas object */
    console.log(this);
    console.log(2037 - this.year);

    /**Learning** it will preserv this keyword value into it for future use  */
    const self = this;

    const isMillenial = function () {
      console.log(`In isMillenial method with this ${this}`);
      console.log(
        `In isMillenial method with self ${self} & ${self.firstName1}`
      );
    };
    const isTrustworthy = () => {
      /**Learning** Another solution to preserv this keyword value is using arrow function. Since arrow 
      function dont have its own this keyword and take it from its parent which is calcAge function where 
      this keyword belongs to calling object. So below this keyword will belongs to calling object. */
      console.log(this);
      console.log(this.year);
    };
    isMillenial(); /**Learning** Here it is a regular function call so, although it is present in
    calcAge function which is called by jonas object, this keyword is undefined. To solve this we need  use
    an extra variable which is for preserving this keyword value. Above we are using variable with name self
    for this purpose.  */

    isTrustworthy();
  },
  /**Learning** we show never use arrow function inside a object literal or within function because arrow
  function don't have its own this keyword */
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName1}`);
  },
};

jonas.calcAge();

const matilda = {
  year: 1990,
};
/**Learning**calcAge function from jonas will be copied to matilda object*/
matilda.calcAge = jonas.calcAge;
/**Learning** this keyword will point to matilda object because matilda object is calling method. */
matilda.calcAge();

/**Learning** below we are not calling calcAge method instead we are copying calcAge method into const f */
const f = jonas.calcAge;

/**Learning** Since there is no owner to this function call so it is just a regular function call to
calcAge so here this keyword will be undefind and when it will do this.year error will occur like
  undefined.year */
//f();

/**Learning** Since arrow function does not have its own this keyword it takes its this keyword from parent.
Parenthisis, within which greet arrow method present, is actually not a code block it is a object literal
so greet arraow method parent is global scope which is window object. Since window.firstName is `Avnish`
so it will print `Hey Avnish` on console where Avnish is coming from window object.  */
jonas.greet();

/**Learning** argument keyword */
const addExpr1 = function (a, b) {
  console.log(arguments);
  console.log(`printing arguments ${arguments}`);
  return a + b;
};
addExpr1(2, 5);
/**Learning** Below we are passing more variable than expected. We can access using argument */
addExpr1(2, 5, 8, 9);

var addArrow1 = (a, b) => {
  //console.log(arguments); //In arrow function we can not use argument
  return a + b;
};

addArrow1(1, 2);
