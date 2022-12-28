'use strict';
/**Learning**
Javascript is
1. high level
2. Prototype based Object Oriented: Almost everything in javascript is object except for premitive values 
      like numbers. Why we create an array and apply push method because of prototyple inheritence. Basically
      we create an array from array blueprint Array.prototype.push, Array.prototype.indexOf. This prototype
      contains all the array methods and the array we created in our code inherits methods from the blueprint
      so that we can use them on our array.
3. Multi Paradime: Paradime is approach or mindset to structure code, which will direct your coding style and 
   technique.
   There are two types of paradimes are there:
       1. Imperative
       2. declarative          
   Three popular programming paradime is:
       1. Procedural programming: Organizing code in linear way and with functions in between 
       2. Object Oriented Programming:
       3. Functional Programming
    Most of programming language follows anyone of above programming paradime but javascript does all of 
    above programming paradime. So it is really felxible.

4. Interpreted or Just in time compiled:  JavaScript has no compilation step.
    Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, 
   and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation,
    which compiles JavaScript to executable bytecode just as it is about to run.
    Difference between interpreter and compiler, A Compiler takes a program as a whole. 
    An Interpreter takes single lines of a code

5. Dynamic: Dynamically means, dynamically typed. It is possible in javascript that we dont assign datatype to 
    variable instead it only became known when javascript engine executes our code also type of varible can 
    change as we reassign different type of data to it.

6. Single Threaded: Javascript runs in only one single thread so it can do onething at a time. But what will
     happen if there is long running task like fetchig data from remote server, to solve this event loop is
     used.Event loop takes long running task, executes them in background and put them back in main thread
     once they are finished.

7. Garbage Collected: There is algorithm in javascript engine which automatically removes all unused ojects
    computer memory. 

8. First class function:  In a language with firstclass functions, functions are simply treated as variable.
    We can pass them into other function and return them from function and this allows us to use functional
    programming paradime in javascript. Example code:
         const closeModal = () =>{
           modal.classList.add('hidden');
           overlay.classList.add('hidden');
         };

         overlay.addEventListener('click',closeModal);//Here we are passing a function into another function as argument.
          
9. Non blocking event loop concurrency model: 
        Concurrency model: How a language handles multiple tasks happenning at same time.

programming language

 */

/**Learning** Javascript engine/Runtime
    Javscript engine is simple a computer program which executes javascript code. Exvery browser has its own 
    javascript engine and most famous is google's V8 engine which powers google chrome also nodeJS. Every javascript
    engine contains a call stack and heap. Call stack is where our code is execute using excution context. Heap
    is unstructured memory pool which stores all the objects in the application needed.

    How code is compiled to machine code:
      Javascript is used to be purely interpreted language but problem with interpreted language was they 
      were very slow than compiled language. To solve this issue mordren javascript engine uses mix between
      interpretation & compilation which is called Just in Time compilation. This approach compiles entire code
      into machine code once and execute it right away. Unlike compilation it dont have machine code portable file.
      Compiled code is executed same time.

      When piece of Javascript code enters into engine, first it is parsed(it is more or less reading code).
      During parsing, code is parsed into a data structure called the AST(Abstract Syntax Tree). This works by first
      splitting each line of code into pieces that are meaningful to the language like const or function keyword
      and then saving all the peices into the AST in structured way. This step checks for any syntax error 
      and later step this tree is used to generated machine code. This tree is different from DOM tree and it is 
      just representation of entire code inside Javascript engine. Next step is compilation, which takes AST and 
      compiles it into machine code. This machine code is executed right away because ordern javascript engine uses 
      JIT compiler. Execution of machine code happens into call stack. All this parsing, compilation, optimization
      etc happens in special thread in javascript engine that can not accessed by our code(ie completely separate
      from main thread and callstack executing our own code).

      Runtime in browser:
        We can consider Javascript runtime as container will contain all the things needed to use javascript.
        Heart of every javascript runtime is javascript engine. Engine alone is not enough, we also need  
        webAPIs. Javascript gets access to WebAPIs using Global Window OBject. WebAPIs are also part of runtime.
        Runtime also includes callback queue, this is a data structure which include all callback functions that
        are ready to be executed for example we attach event handler functions(also called callback function)
        to DOM elements like button to react to certain event and this event handler function are callback function.
        Click event will call callback function which we attached to DOM element on doing click on that DOM element. 
        The first thing happened after event is to put callback function into callback queue. From here callback
        function is pass to callstack, where it can be executed and this happens by eventloop. Basically eventloop
        take callback function from callback queue and put them into callstack so that it can be executed. 
        Using this eventloop javascript non blocking concurrency model is executed.

     Javascript can also exist out of browser like node js. Runtime is similar to webbrowser but since WebAPIs 
     are provided by browser and here no browser is present so webAPIs are not there. Instead of WebAPIs 
     we have multiple C++ binding and threadPool. 

          
 
  */

/**Learning** How javascript code is executed**
  Javascript code is executed in callstack. After compilation javascript code is ready for execution. What
  happens next is Global Execution Context is created(for top level code only). Top level code is that code which
  is not inside any function so in beginning code outside any function is executed and this make sense because
  function should be executed when they are called. We saw this happing in pig-game project where we have init 
  function which initialize entire project but in order to actually initialize game first time when page loaded
  we need to call that function immidiately in our top level code.

     What is execution context:
       It is an environment where javascript code is executed. Stores all necessary information for some code
       to be executed such as local variables or arguments into a function.
         Example: We order for takeaway pizza. That pizza comes into box and box might also comes with other
         things necessary to eat pizza like cutlary. In this way Pizza is a javascript code to be executed
         and box is execution context. Box(execution context) also contain other required things to eat pizza
         (run javascript code) like cutlery.
       For any javascript project, no matter how long it is, there is only one Global Execution Context. It is
       always there as default context for top level code.
  
  Now we have environment where top level code can execute, after this Global Execution Context is created,
  top level code executed(executing maching code received by processor). Till this point top level code execution
  finished. After this functions starts executing. For each and evey function call new execution context created,
  containing all necessary information to run this function. All these execution contexts togather makes call 
  stack. When all function done executing the engine keep waiting for callback function to arive to execute these.
  Basically callback functions are associated with an event and eventloop puts these callback functions into 
  callstack.

     What is inside execution context:
       Inside any execution context is variable environment. In this environment all 'variables' and 'function
       declaration' is stored and there is also 'special argument' object, these arugment contains all the
       arguments that are passed into the function that current execution context belongs to. Each function
       gets its own execution context as soon as it is called. So all variables which are declared inside
       function is end up in variable environment. A function can access variable declared out side function,
       this works because of 'scope chain'. Execution context contains scope chain which basically contains references 
       of variables which are located outside of current function and to keep track of scope chain it is stored
       in each execution context. Each context all get special variable called 'this' keyword. Content of execution
       context like variable environment, scope chain and this keyword is generated creation phase which occurs 
       right before execution. Execution context of arrow function do not contain argument object and this keyword 
       instead they can use argument object and this keyword from there closest regular function.
          Call stack is place where execution context get stacked on top of each other to keep track where we are 
          in the execution. When execution context finished running it is removed from call stack. When code compiled
          then before start of code execution Global Execution Context is created and put into call stack. Now code is 
          currently at Global Execution Context. Now suppose there is call from  top level code to a function( a variable
          value is initialized from return value of function) now that function specific execution context is created
          and put into call stack and now execution is currently at function execution context. Now execution of Global
          execution context stopped and execution is at First Function Execution Context. Suppose from 
          first function a second function is called. Now before execution of second function, second function
          execution context is created and put into call stack. Execution of first function stopped and wow execution
          is currently at second function  execution context in call stack. Javascript has only one thread of execution
          so one execution context execution at a time. When second function return executed, second function execution
          finished and its execution context is removed from call stack and currently execution is at first function.
          When return of first function is completed then its execution context is removed from call stack and now
          execution is currently at Global Execution Context. Popped out execution context is although removed from
          memory but might available into memory.




  */

/**Learning** Scope and the scope chain**
    Each execution environment has variable environment, scope chain and this keyword(in arrow function execution
    environment there is no argument object in variable environment and no this keyword).
       Scoping: 
         It controls how out program's variables are organized and accessed. It answers like 'Where do variables live?'
         and 'Where can we access certain variable and where we cant'.
       Lexical Scoping:  Scoping is decided by placement of function and blocks in code in the code. For example
         a function written inside a function has access variables of parent function.
       Scope: Space or environment in which a certain variable is declared( variable environment in case of 
        functions). There is Global scope, function scope and block scope. 
       Scope of Variable: Region of our code where certain variable can be accessed. 

      All above scope concepts like scope of variable , scope etc are not same. Many people use these concept
      in interchangble manner but actually these are not same.
    
      Types of Scope:
        Scope is place where variable is declared and exact same this is true of function as well because
        end the end functions are just values which are stored in variables. 
        Global Scope: 
           Global scope is for top level code. Variable declared in global scope are accessible everywhere, in
           all functions and block.
        Function Scope: Variables are declared inside function. Variables are accessible only inside function
           not outside. It is also called local scope. If we try to access any variable, declared inside function,
           outside function then Reference Error will occure. Function declaration, function expression and arrow
           function all creates  their own scope.
        Block Scope: From ES6 block also created their own scope. By block we mean every thing inside curly braces.
           If statement, For loop all creates block scope. Just like function scope variable declared inside block
           are accesible inside block. Big difference with function scope is block scope are only applied to variable
           which are declared with let or const. Only 'let' and 'const' variable are restricted to block in which
           they are created. So let and const variables are block scope. If we will declare a variable with 'var'
           inside a block then it will be accessble outside block and will be scoped in current function where block
           is located or Global Scope. Before ES6 we have only Global Scope and Function Scope. Variable declared with
           'var' care about function not block. From ES6 we have all function are also block scoped in strict mode.
           Function declared inside a block is accessible within that block. So as per above discussion 'let', 'const',
           and function declared within a block are block scoped.




 */

/**--------------------------Scope Chain--------------------------------------------- */
const myName = 'Avnish'; //Global Scope
//First function is all declared in Global scope
function first() {
  //Each function created its own scope.
  const age = 30; // scope within first()
  if (age >= 30) {
    const decade = 3; //const creates variable with block scope so decade is accessible only in if block
    var millenial = true; /*var does not care about block so it is in first function
    (nearest function) scope from where it can be accessed 
    by second function*/
  }
  /**Learning**scope chain only works upward neither downward nor sideward */

  function second() {
    const job = 'Software Developer'; // scope within second()
    /**Learing** Every child block has access to variables of its parent so second function can access 'age'
    from first function and since first can access myName from its parent(Global) thus scond can access it from
    first function. In this way scope chain is created. initially second() will seach for myName in first() function
    scope, first function contain scope of myName from its parent function(Global)*/
    console.log(`**Scope Chain**${myName} is a ${age} years old ${job}`);
    //console.log(`${decade}`); //Reference error will occur because decade is block scope in if block
    console.log(`${millenial}`);
  }
  second();
}
first();
/**--------------------------Scope Chain-End----------------------------------------- */

/**Learning** Scope chain vs Callstack

   There is one execution context for each function in exact order in which they are called
   and one Global Execution Context. Each execution context will have their own varaible 
   environment. Refer ScopeChainFlow screenshot.
 */
