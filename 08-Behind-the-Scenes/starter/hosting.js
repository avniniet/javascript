'use strict';
/**Learning**---------------Hosting----------------------------------------
  Hosting:
    It makes some type of variable accessible/usable in the code before they are 
    actually declated. "Varialbes lifted to the top of their scope for example to the 
    top of function is scope is function scope." 
    Before execution, during execution context creation phase, code is scanned for
    variable declarations, and for each variable, a new property is created in the
    variable environment object.

    Hosting does not work same for all variable types.
    Hosting for function declaration: 
         Hosted: Yes
         Initial Value : Initial value into variable invironment is set to  Actual function. So in practice
                          it means that we can use function declarations before they are actually declared in 
                          the code. Because they are stored into variable environment object even before code
                          starts executing.
         Scope: Block(Only for strict mode otherwise function scoped)
    
    Hosting for var declaration: 
         Hosted: Yes
         Initial Value : undefined. Unlike function when we try to access var variable before it is declared
                         in code we dont get declared value instead of it we get undefined and this is the 
                         behaviour which mainly created hidden bugs in javascript so in mordern javascipt
                         we use let instead of var.
         Scope: function

    Hosting for let const declaration: 
         Hosted: No. Technically they are hosted but their value are set to uninitialized. These variables
                 are TDZ(Temporal Dead Zone) which make it so we can access these variables between beginning
                 of scope and the place where variables are declared.
         Initial Value : undefined. Unlike function when we try to access var variable before it is declared
                         in code we dont get declared value instead of it we get undefined and this is the 
                         behaviour which mainly created hidden bugs in javascript so in mordern javascipt
                         we use let instead of var.
         Scope: Block

    Hosting for function expression/Arrow function declaration: 
         Depends they are created with var let or const. These functions are simply variables and so they
         behave in the way they are defined like var/let/const.

 */

//------------------Temporal Dead Zone(TDZ)-------------------------
/**Learning** TDZ was introduced into ES6. It makes easier to avoid and catch error. TDZ make const variable
to work in the way it is expected. Since const cant be reassigned. So it is not possible to set const undefined
first and declare in later phase as we do with var variables. */
const myName1 = 'Avnish';
if (myName1 === 'Avnish') {
  /**Learning** job varible is const so it is block scoped and avaiable only in if block. It is  
  accessible from starting from the line where it is defined. Line 49, 50,51 ,52 is temporal dead zone 
  for job variable. If we will try to access job variable in line 49 then we will get reference error
  (Can not access 'job' before initialization)*/
  console.log(`**Hosting**Avnish is ${job}`);
  const age = 23;
  console.log(`**Hosting**age`);
  const job = `Software Developer`; /**Learning** in this line job variable will be removed from 
  temporal dead zone. So each let and const variable has their temporal dead zone which starts from
  beginning of scope to place where it is declared and variable is only safe to use after TDZ */
  console.log(x); //In this line we will get reference error x is not defined.
}
console.log(`**Hosting**${me}`);
/*Cant  access 'job' before initialization. Here it is TDZ*/
console.log(`**Hosting**${job}`);
/*Cant  access 'year' before initialization. Here it is TDZ*/
console.log(`**Hosting**${year}`);
var me = 'Neetish';
let job = 'Bank Manager';
const year = 1991;

//function
/*It will print result 5. We are able to access function declaration before it is defined*/
console.log(`**Hosting**${addDecl(2, 3)}`);
console.log(`**Hosting**${addExpr(2, 3)}`);
console.log(`**Hosting**${addArrow(2, 3)}`);
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

/**window is global object of javascript in the browser. variable declared with var
will be available into window obbject but not let or const. */
