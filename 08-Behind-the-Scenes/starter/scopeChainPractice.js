'use strict';

/*This function calcAge is defined in GlobalScope and it is part of top level code.
This function also creates its own scope and that scope is eqivalent to the variable 
environment of its exicution context.*/
function calcAge(birthYear) {
  const age =
    2022 -
    birthYear; /**age is const and const is block scope so it is present only in block
  where it is declared. so it is present only in calcAge(). Since printAge() is also within calcAge() block
  it will be available there also. */
  console.log(
    `${firstName}`
  ); /**firstName is part of Global Execution Context Scope. In scope chain function 
  calcAge scope is child of Global Scope and since child can access  parent scope variables so calcAge can access
  firstName value*/
  function printAge() {
    /**Learning** const and var is block scope so output const will be only present in block where is it 
     declared ie only in this printAge function. printAge() scope is child of calcAge() so it has access 
     to all calcAge() variables and also variables which is accessbile in calcAge() from
     Global scope. */
    const output = `${firstName} is ${age} years old born in ${birthYear}`;
    console.log(`${output}`);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      /**Learning** js will try to find variable first in its own scope. If it is present
      then it will not go upward for searching. Like below I declared firstName so  it will
      take firstName='Avnish' instead of 'Neetish'  */
      const firstName = 'Avnish';
      const str = `${firstName} is millenial is ${millenial}`;
      console.log(str, millenial);

      function add(a, b) {
        return a + b;
      }
    }
    /*console.log(
      str
    );*/
    /**str is block scope in if block, due to const(let and const is block scope),
     so it will not present here. if{} block scope is child of  printAge() scope.
     */
    console.log(`${millenial}`);
    /**Learning** var is function scope so millenial will present here */
    //add(2, 3);
    /**Learning** function is block scope .Since add is declared in if block
    so it will be available there only. After coming out of if block it will not 
    available. But it is true only for strict mode. If we remove strict mode from top then
    add function will present here. But it is recommended that strict mode should be 
    used always. */
  }
  printAge();
  return age;
}
/**Learning** Code in a function is only executed when it is called. Here although calcAge function is declared
earlier then declaration  of firstName constant but since calcAge is called after firstName declaration
so it will execute after firstName declaration */
const firstName = 'Neetish';
calcAge(1991);
/*console.log(
  `${age}`
);*/
/*Reference Error. Since age is const which is blockScope so it will not be present outside calcAge()*/
