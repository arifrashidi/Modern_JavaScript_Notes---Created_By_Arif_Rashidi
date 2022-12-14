
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- π CHAPTER 1: Javascript Fundamental Part 2 ---");
/* -------------------------------------------------------------------------- */

// π§‘: Main topic
// π: Notes
// β: Subtopics
// π: Sub-subtopics
// π¦: Variables
/* -------------------------------------------------------------------------- */

// π§‘ External JavaScript
// π External scripts are practical when the same code is used in many different web pages.
// π JavaScript files have the file extension .js.
// π The script will behave as if it was located exactly where the <script> tag is located,...
// Therefore, <script> tags should be at the bottom of your HTML code.
// TODO:π External JavaScript syntax in HTML =
/*
    <script src="your_file_name.js"></script>
*/

/* -------------------------------------------------------------------------- */

// π§‘ Basic Javascript

// -----------------
// β JavaScript Values
// π // The JavaScript syntax defines two types of values:

  // π Literals (Fixed values)
  25;

  // π Variable (Variable values)
  const fish = 25;

// -----------------
// β Javascript keyword
// π Are used to identify actions to be performed.

let my_name = "Arif"; // my_name is keyword

// -----------------
// β JavaScript and Camel Case
// π Different ways for naming Keyword.

// π Underscore:
//first_day, last_day, master_card, inter_city

// π Lower Camel Case:
// firstDay, lastDay, masterCard, interCity

/* -------------------------------------------------------------------------- */

// π§‘ β’Variables: let / constβββ‘β‘
// π Variables are containers for storing data (storing data values).
// π Variables names can contain letters, digits, underscores, and dollar signs.
// π Reserved words (like JavaScript keywords) cannot be used as variable names.
// π A function can access variables outside of the function but...
// variables declared inside a { } block cannot be accessed from outside the block.

// -----------------π¦
let nick_name = "Bobby"; // string
let pi = 3.1415; // number
let javascript_is_fun = true; // boolean
let javascript_is_hard; // undefined

// -----------------
// β variables (let)
// π Variables defined with (let) can be Reassigned.

// π Example 1:
console.log(nick_name);
console.log(pi);
console.log(typeof false);
console.log(javascript_is_fun);
console.log(javascript_is_hard);

// π Assigning a new value to variable
javascript_is_fun = "of course";
javascript_is_hard = "nope"

console.log(javascript_is_fun);
console.log(javascript_is_hard);

// -----------------
// β variables (const)
// π Variables defined with (const) cannot be Reassigned.
// π By default, we should always use (const) to avoid accidental error.
// π When we use (const) variable, value cannot be undefined.

const birthday_year = 2001;
console.log(birthday_year);

/* -------------------------------------------------------------------------- */

// π§‘ Basic operatorsβ‘β‘ 

// -----------------π¦
const my_age_now = 21;
const my_age_when_married = my_age_now + 6;
const my_first_name = "Arif";
const my_second_name = "Rashidi";

// -----------------
// β Example 1:
console.log(my_age_when_married);
console.log(my_age_now * 2, my_age_now / 2);
console.log(my_first_name, my_second_name);
console.log(my_first_name + " " + my_second_name);

/* -------------------------------------------------------------------------- */

// π§‘ Assignment Operators (=)
// π (=) Assigns a value to a variable.

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 2; // x = x * 2 = 50
x++; // x = x + 1
x--; // x = x - 1


/* -------------------------------------------------------------------------- */

// π§‘ Comparison Operators ( >, <, >=, <= )
// π Comparison operators will get (true / false value)

// -----------------π¦
let age_tommy = 18;
let age_sarah = 18;
let age_david = 26;

// -----------------
// β Example 1:
console.log(my_age_when_married > my_age_now);
console.log(age_tommy >= age_sarah);
console.log(age_tommy + 7 > age_david + 2);

/* -------------------------------------------------------------------------- */

// π§‘ Operator Precedence
// π The order in which operations are performed in an arithmetic expression.

let a, b;
a = b = 25 - 10 - 5; // a = b = 10 /
console.log(a, b);
console.log(a + b);

const average_age = age_tommy + age_sarah / 2; // average_age = 27;
console.log(average_age);

/* -------------------------------------------------------------------------- */

// π§‘ 1# Coding Challenges

const mark_mass = 78;
const mark_height = 1.69;
const john_mass = 92;
const john_height = 1.95;

const bmi_mark = mark_mass / mark_height ** 2; // 27.309968138370508
const bmi_john = john_mass / (john_height * john_height); // 24.194608809993426
const mark_higher_bmi = bmi_mark > bmi_john;

console.log(bmi_mark, bmi_john, mark_higher_bmi);

/* -------------------------------------------------------------------------- */

// π§‘ Strings and Template Literals
// π Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
// π Template literals provide an easy way to interpolate variables and expressions into strings.

// -----------------π¦
const first_name = "Malik";
const job = "teacher";
const birth_year = 1991;
const year = 2037;

// -----------------
// β Example:

// π Not practical
const malik_intro_old =
  "I'm" + my_first_name + ",a" + (year - birth_year) + "years old" + job + "!";

// π Literals string (practical)
const malik_intro = `I'm ${my_first_name}, a ${year - birth_year} years old ${job}!`;
console.log(malik_intro_old);
console.log(malik_intro);
console.log(`backtick is just like a regular string`);

// -----------------
// β literals string also can create multiple lines

console.log(`string
multiple
lines`);

/* -------------------------------------------------------------------------- */

// π§‘ Conditional statements 1 = ( if / else if / else ) Statements
// π Are used to perform different actions based on different conditions.

// -----------------π¦
const age = 20;
const is_old_enough = age >= 18;
const passed_away = "died";
const years_left = 18 - age;

const sabu_age = 25;
const sabu_is_old_enough = sabu_age >= 18;

// -----------------
// β Example 1:

if (is_old_enough) {
  console.log("I can start taking driving licenseπ");
}
else if (passed_away) {
  console.log("Please bury me in islamic way π³ββοΈ");
}
else {
  console.log(`I am to young, I need to wait another ${years_left} yearsπ­`);
}

// -----------------
// β if else statement is very flexible structure (control structure)

const hadi_age = 75;
let hadi_state;

if (hadi_age >= 70) {
  hadi_state = 'He is old π³ please retired';
} 
else {
  hadi_state = 'he is not that old π³ββοΈ';
}
console.log(hadi_state);

// -----------------
// β if / else statements shortcut (remove {})
// π we don't need {} if we only have one line. (no else)

if (sabu_is_old_enough) 
console.log("Sabu can start taking driving licenseπ");

/* -------------------------------------------------------------------------- */

// π§‘ 2# Coding Challenges

// bmi_mark = 27.309968138370508
// bmi_john = 24.194608809993426
// const mark_higher_bmi = bmi_mark > bmi_john;

if (mark_higher_bmi) {
  console.log(`Mark's BMI ${bmi_mark} is higher than John's ${bmi_john}`)
}
else {
  console.log(`John's ${bmi_john} BMI is higher than Mark's ${bmi_mark}`)
}

/* -------------------------------------------------------------------------- */

// π§‘ Type Conversion and Coercion

// -----------------π¦
const banana = '12';
const apple = 12

// -----------------
// β Conversion
// π Convert string to number (conversion)
// TODO: Example = Number("23")

console.log(Number(banana)); // 12
console.log(Number(banana) + 3) // 15
console.log(Number('Excellent')) // NaN (not a number)

// π Convert number to string (conversion)
// TODO: Example = String(23)

console.log(String(100))

// -----------------
// β Coercion
// π convert number to string (coercion)
// π Whenever there is an operation(+) between a string and a number...
// the number will be converted to string

// Example = 1
console.log('3' + 3 + '3') 

// Example = 2
console.log('there are ' + 3 + ' banana') 
//same as
console.log('there are ' + '3' + ' banana')

// π convert string to number (coercion)
// π Whenever there is an operation(-,*,/) between a string and a number...
// the string will be converted to number

console.log('3' - 3 - '3')
// same as 
console.log(3 - 3 - 3) 
// others
console.log('3' * 3 * '3')
console.log('90' / '3')

// another example
let n = '1' + 1; // '11'
n = n - 1; // 11 - 1
console.log(n) // 10

console.log(3 + 3 + 3 + '5') // '95'
console.log('10' - '4' - '3' - 2 + '5') // '15'

// -----------------
// β typeof
// π check type of data
//TODO: ELEMENT typeof 

typeof 12 // Number
typeof "Ikan" // String
console.log(typeof NaN) // Number

/* -------------------------------------------------------------------------- */

// π§‘ Truthy and Falsy Values
// π falsy values are values that are not exactly false...
// but will become false when we try to convert them into boolean.
// π 5 falsy values is: 0, ( empty string(''), undefined, null, NaN )

// -----------------
// β Example 1:

console.log(Boolean(null))
console.log(Boolean(''))
console.log(Boolean('Arif'))

// -----------------
// β Example 2:

const saddiq_money = 0; // 0 is a falsy value
if(saddiq_money) {
  console.log("Don't spend it all π΅")
}
else {
  console.log("You should get a job! π΅")
}

// -----------------
// β Example 3:

let shoes; // shoes is undefined
if(shoes) {
  console.log("shoes is defines")
}
else {
  console.log("shoes is UNDEFINED!")
}

/* -------------------------------------------------------------------------- */

// π§‘ Equality Operators: == vs. ===

// -----------------
// β strict equality operator ( === )
// π Strict quality Operators is more recommended to use to prevent unnecessary bugs.
// π It only returns true to when both values & type of data are exactly the same and...
// does not perform type coercion.

// -----------------π¦
const ismail_age = 18;

// -----------------
// π Example 1:
if (ismail_age === 18) 
console.log("Please take a diploma π¨βπ");

// π Example 1:
console.log(ismail_age === 18); // true
console.log(18 === 18); // true
console.log(18 === "18"); // false
console.log("banana" === "banana"); // true
console.log("banana" === "apple"); // false

// -----------------
// β loose equality operator ( == )
// so it will check the values only
// it will perform type coercion.

// π Example 1:
console.log(ismail_age == 18); // true
console.log(18 == 18); // true
console.log(18 == "18"); // true
console.log("banana" == "banana"); // true
console.log("banana" == "apple"); // false

/* -------------------------------------------------------------------------- */

// π§‘ Comparison Operators (not equal)

// -----------------
//- β !==
//- π !== same as === but it only returns true when
//  when values are opposite. (recommended)

// -----------------

//- β !=
//- π != same as == but it only returns true when
//  when values are opposite.

// -----------------
// π Example 1:
const favourite = 9;

if (favourite === 5) { 
  console.log('Cool! 5 is the best number')
}
else if (favourite === 9) {
  console.log('9 is also a cool number')
}
else if (favourite === 12){
  console.log('12 is also a cool number')
}
else {
 console.log('Beside number 5, 9 & 12 is not a cool number')
}

if(favourite !== 5) {
  console.log('but why not number 5 tho?');
}

/* -------------------------------------------------------------------------- */

// π§‘ Logical Operators: Boolean Logic ( and / or / not )
// π and (&&) = both need to be true for the result of the operation to be true
// π or  (||) = just one need to be true for the result of the operation to be true
// π not (!) = add 'not' to the statement / boolean statement will become opposite

// -----------------π¦
const has_driver_license = true;
const has_good_vision = false;
const should_drive = has_driver_license && has_good_vision;

// -----------------
// π Example 1:
console.log(has_driver_license && has_good_vision) // false
console.log(has_driver_license || has_good_vision) // true
console.log(!has_driver_license) // false ( same as = not has driver license )

// -----------------
// π Example 2:
if (should_drive) {
  console.log("Sarah able to drive")
}
else if (has_driver_license || has_good_vision) {
  console.log("Its up to Sarah decision is she confident enough to drive...")
}
else {
  console.log("Someone else need to drive...")
}

// -----------------
// π Example 3 (hard):
const is_tired = true;

if (has_driver_license && has_good_vision && !is_tired) {
  console.log("Sarah in very optimal condition to drive...")
}
else {
  console.log("Sarah is not in very good condition to drive...")
}

/* -------------------------------------------------------------------------- */

// π§‘ 3# Coding Challenges

const pakatan_harapan_score = 83;
const perikatan_nasional_score = 73;

const majority_seats_for_ph = pakatan_harapan_score >= 112;
const majority_seats_for_pn = perikatan_nasional_score >= 112;

if (pakatan_harapan_score > perikatan_nasional_score && majority_seats_for_ph) {
  console.log("PH easily can make government")
}
else if (pakatan_harapan_score > perikatan_nasional_score && !majority_seats_for_ph) {
  console.log("PH leads but does not get an easy majority seat (112)")
}
else if (pakatan_harapan_score < perikatan_nasional_score && !majority_seats_for_pn) {
  console.log("PN leads but does not get an easy majority seat (112)")
}
else {
  console.log("Anwar lost hope of becoming prime ministerπ₯")
}

/* -------------------------------------------------------------------------- */

// π§‘ Conditional statements 2: Switch Statement
// π this statement designed for equality.
// π pros: more readable than if / else statement.

// ----------------- π¦
const day = "wednesday";

// ----------------- 
// π Example 1:

switch(day) {
  case "monday": // day = "monday"
    console.log("Plan course structure");
    console.log("Go to coding meeting");
    break; // break: stop coding from continue executing.
  case "tuesday":
    console.log("Prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day")

}

// π Same as above but we use if / else block statement

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meeting");
}
else if (day === "tuesday") {
  console.log("Prepare theory video");
}
else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
}
else if (day === "friday") {
  console.log("record videos");
}
else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
}
else {
  console.log("Not a valid day");
}

/* -------------------------------------------------------------------------- */

// π§‘ Expression and Statement

// -----------------
// β Expression
// π JavaScriptβs expression is a valid set of literals, variables, operators, and expressions...
// that evaluate a single value. This single value can be a number...
// a string, or a logical value depending on the expression.

3 + 4 // it is an expression
2001 // it is an expression
true && false // it is an expression

// -----------------
// β Statement
// π Statement doesn't produce a value on itself.
// π Programming instructions are called statements.
// π Statement is like a bigger piece of code that is executed...
// that we can compare this with normal spoken language.
// π example: if / else statement, switch statement

if (23 > 10) {
 const str = "23 is bigger";
 console.log(str);
}

// -----------------
// β Example: in a template literal, we can only insert expressions, 
// but not statements.

const me = "Arif" // "Arif" is a expression
console.log(`Hello my name is ${me}, I was born in ${2022 - 21}`)

/* -------------------------------------------------------------------------- */

// π§‘ Conditional statements 3: Ternary operator
// π The ternary operator is a simplified conditional operator like (if / else if/ else) condition
// TODO: Ternary operation syntax =
/*
    condition ? <expression if true> : <expression if false>
*/

// -----------------
// β Example 1:
const subscribed = true;
subscribed ? "show video" : "hide video"

// ----------------- π¦
const rafizi_age = 15;

// -----------------
// β Example 2:
rafizi_age >= 18 ? console.log("Rafizi is allowed to marry") 
: console.log("Rafizi is underage to get marry")

// -----------------
// β Ternary operator can be an expression (has a value)
const rafizi_marry = rafizi_age >= 18 ? "marry" : "underage"; // an expression
console.log(rafizi_marry)

// -----------------
// β Use ternary operator in template literal
console.log(`I am ${rafizi_age >= 18 ? "marry" : "underage"}`)
// π same as
console.log(`I am ${rafizi_marry}`) // rafizi_marry = ternary operator as variable

// -----------------
// β Same as above but we use if / else block statement

let rafizi_marry_2;
if (rafizi_age >= 18) {
  rafizi_marry_2 = "marry"
}
else {
  rafizi_marry_2 = "underage"
}
console.log(rafizi_marry_2)

/* -------------------------------------------------------------------------- */

// π§‘ 4# coding challenges

const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was RM${bill}, the tip was RM${tip}, and the total value is RM${bill + tip}`)

/* -------------------------------------------------------------------------- */
