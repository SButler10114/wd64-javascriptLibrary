/*
TYPES
*/

// DATA AND STRUCTURE TYPES
    /*
    - boolean
    -undefined
    -number
    -string
        -bigint*
        -symbol*
    -null
    -object
    -function
*/

//BOOLEANS 

// a boolean is yes/no, true/false, on/off.

let on = true;
let off = false;
console.log(on);

// NULL

//a null value is an empty value. Think of it as an emoty container that has space to fill.

let empty = null;
console.log(empty);

//UNDEFINED

//no value has been assigned to the container.

let undef= undefined;
console.log(undef);
let password;
console.log(password);

/*
    -null is like a container with nothing in it.
        -null can be trusted to be a '0' not so much with undefined.
    -undefined is when a variable has never been set or even created
*/

//NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999 // 15
console.log(precise);

let rounded = 9999999999999999 //16
console.log(rounded);
//JS gives us space for 15 9's before rounding up

let notQuite = 0.2 + 0.1;
console.log(notQuite);
//JS rounds out certain numbers, so if math is needed, beware.

let whatIf = (0.2 *10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
//console.log('.' + whatIf);


//STRINGS

// -represent text and can be wrapped in either single or double quotes.

let doubleQuote = "double quote";
let singleQuote = "single quote";
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
let bothQuotes = 'I said, "what about Bob?"';
console.log(inception, singleQ, bothQuotes);

//NUMBER VS STRING
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
//Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.


console.log(typeof addThese);
console.log(typeof addTheseAlso);
// We can use an operator called "typeof" that returns a string and tells us exactly what our variable "type" is.

let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber);

//const log = console.log; //we can reduce our typing by setting console log to a variable that doesn't change
//log('test');

//OBJECTS
/*
    -Objects are used to store mny values instead of singular value.
    -consider these a collection of various properties.
    -denoted by curly brackets: {}
 */

 let frodo = {
     race: 'hobbit', //string
     rings: 1, //number
     sting: true //boolean
 }

 console.log(frodo);
 console.log(typeof frodo);
 //1: Key
 //2: Value

 //ARRAYS

 /*
    -containers that hold a list of items
    -denoted by square brackets []
    -all items are within square brackets.
    -regardles of datatype, each item is separated by a comma.
 */

 let arrayList = ['pos 1', 'pos 2', 'pos 3',];
 console.log(arrayList);
 let anotherExample = [1,2, 'three'];
console.log(anotherExample);

console.log(typeof anotherExample);
//JS clasified arrays as objects and not a datatype of their own. 


//ADDITION VS CONCATENATION
 
/*
    -JS sees the "+" symbol in two different ways
        -When combined with numbers, uses built in math functionality.
        -when combined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);


//CHALLENGE
/*Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with a space between variables).
*/

//ANSWER

let firstName = "Sierra";
let lastName = "Butler";
let zipcode = "64640"
let houseNumber = 1234;
let street = 'Visionary way';
let city = "Gallatin";
let state = 'Missouri';

console.log(firstName, lastName, houseNumber, street, city, state, zipcode)

//STRING: PROPERTIES

/*
    -Strings have properties, or the qualities associated with that string.
    -the length of the string is a property
*/

let myName = "Sierra";
console.log(myName.length);

//STRING METHODS

/**
    -methods are tools that can help us manipulate our data
 */

let myNameIs = 'Sierra';
console.log(myNameIs.toUpperCase());// this method changes string to uppercase
console.log(myNameIs.toLowerCase());// this method changes string to lowercase

let home = "My home is Fishers";
console.log(home.includes('Fishers'));
























