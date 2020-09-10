//Variables

console.log('hello');
//The console log is a debugging tool

let a = 2;

/*
- let : is our keyword
- a : is our variable
- = : is our assignment operator
- 2 : is our variable value

*/

let b = 1;

console.log(a + b);

/*
 -a variable name must begin with a letter, underscore, or dollar sign.
 -numbers may follow the above characters but cannot come first.
 -JS is case sensitive - "hello" and "Hello" are different variables
 -no spaces allowed in varable names
 -camel case is best practice for naming
ex:
    let myName = "Sierra";
    is easier to read than:
    let my name= "sierra";

 */

 let startingWithLetter= "Works";
 let _startWithUnderscore= "Works";
 let $startWithDollarSign= "Works";
 // let 4startWithThisNumber = "Breaks";

 console.log(startingWithLetter, _startWithUnderscore, $startWithDollarSign);

 let PascalCase;
 let camelCase;
 let snake_case;


 /*

Keywords
var, let,, const

- var: 'old' keyword standing for variable; won't use often but is still viable
- let: 'new' word for variable. introduced with es6 (newest version of ECMAscript, which is a standardization of JS)
- const: also 'new' word for variable. declares an unchangeable or CONSTANT variable. 
*/
var variable = 'var variable';
let letVariable = 'let variable';

// let function = 1; cannot use reserved words within a variable name - *function is a reserved word


/*
DECLARATION & INITIALIZATIONS
 */

 //declarations are the left side of the assignment operator
 let x;

 //initializations are the right side of the assignment operator
 //let x = 10;

 //10 is our initialization

 let y;
 console.log('declaration:', y);

 y = 10;
 console.log('initialization', + y);

 y = 33;
 console.log('initialization 2:', y);

 //We've set our variables with our let keyword. With each iteration, we have redeclared what it is.

 //CONST

 let today= "Great!";
 const efa = "Wonderful";
 console.log(today, efa)

 today = "Awesome!";
 console.log(today, efa);

 //efa = "Super";
 console.log(today, efa);
 //const allows us to make a variable we don't want to change.