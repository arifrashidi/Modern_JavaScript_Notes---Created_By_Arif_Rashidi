
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- ๐ CHAPTER 2: Javascript Fundamental Part 2 ---");
/* -------------------------------------------------------------------------- */

// ๐งก: Main topic
// ๐: Notes
// โ: Subtopics
// ๐: Sub-subtopics
// ๐ฆ: Variables
/* -------------------------------------------------------------------------- */

// ๐งก Activating Strict Mode
// ๐ So strict mode is a special mode that we can activate in JavaScript...
// which makes it easier for us to write a secure JavaScript code.
// ๐ This statement must has to be the very first statement in the script...
// because if we have any code before this then strict mode will not be activated.

// ๐ 2 reasons why we need to activate strict mode:
// a. Strict mode forbids us to do certain things
// b. It will actually create visible errors for us in certain situations in which 
//    without strict mode JavaScript will simply fail silently without letting us 
//    know that we did a mistake.

// -----------------
// โ Strict Mode Statement:

"use strict";

// -----------------๐ฆ

let bobby_has_driver_license = false;
const bobby_pass_test = true;

// -----------------
// โ Example of use:
// ๐ If you spelled variable name wrong, strict mode will detect it.

if (bobby_pass_test) {
    bobby_has_driver_license = true; 
}
console.log(bobby_has_driver_license);

// -----------------
// โ Example of use:
// ๐ Strict mode is reserving 'Javascript' syntax words...
// that it might implement in the future.

// const private = 534; // private is 'Javascript' syntax words

/* -------------------------------------------------------------------------- */

// ๐งก Function
// ๐ Functions is a statements that performs a task or calculation.
// ๐ To qualify as a function, it should take some input and return an output.
// ๐ A JavaScript function is executed when "something" invokes it (calls it).
// ๐ With Function, you can reuse code, define the code once, and use it many times...
// you can use the same code many times with different arguments, to produce different results.
//TODO: function syntax =
/*
    function function_name(parameters) {
    code to be executed
    }
    function_name(argument) -> Calling functions
*/
// ๐ parameter = is like placeholder.
// ๐ argument = value itself that will fill the placeholder the function is called.

// -----------------
// โ Example 1
function my_name() {
    console.log("My name is Arif")
}

my_name(); //calling the function
my_name(); //calling the function
my_name(); //calling the function

// -----------------
// โ Example 2
function welcomeToFES(first_name, last_name) { // (first_name, last_name) is called parameter
    console.log(`Welcome to Frontend Simplified, ${first_name} ${last_name}`);
  }

  welcomeToFES("Arif", "Rashidi"); // ("Arif", "Rashidi") is called arguments
  welcomeToFES("Muhammad", "Ali");
  
/* -------------------------------------------------------------------------- */

// ๐งก Function Return
// ๐ When JavaScript reaches a return statement, the function will stop executing.
// ๐ Functions often compute a return value. The return value is "returned" back to the "caller"

// -----------------
// โ Example 1:
function num_banana(para_extra_banana) {
    const banana = 20;
    return banana + para_extra_banana;
}
num_banana(5); // 25

// -----------------
// โ Example 2:
function sum_of_two_number(num1, num2) {
    return num1 + num2;
  }
  console.log(sum_of_two_number(10, 10));

// -----------------
// โ Example 3:
function fruit_processor(num_apples, num_oranges) {
    console.log(num_apples, num_oranges);
    const juice = `Juice with ${num_apples} apples and ${num_oranges} oranges`;
    return juice;
}
const fruit_juice = fruit_processor(5, 2)
console.log(fruit_juice)
const fruit_juice_2 = fruit_processor(10, 5)
console.log(fruit_juice_2)

/* -------------------------------------------------------------------------- */

// ๐งก Function Declarations vs Expressions

// -----------------
// โ Function Declarations
// ๐ Functions are declared with the function syntax.
// ๐ Function hoisting: we can called the function before function declaration.
// Function hoisting only works with function declarations โ not with function expressions.
//TODO: ๐ function syntax =
/*
    function function_name(parameters) {
    code to be executed
    }
    function_name(argument)
*/

// ๐ Example 1:
function calc_anwar_age(anwar_birth_year) {
    return 2022 - anwar_birth_year;
}

const anwar_age = calc_anwar_age(1947)
console.log(anwar_age)

// -----------------
// โ Function Expression

// ๐ A function expression can be stored like a variable.
// ๐ It behave like variable because function has a value.
//TODO: ๐ function syntax =
/*
    function_name(var) = function(parameters) {
    code to be executed
    }
    function_name(argument)
*/

// ๐ Example 1
const calc_anwar_age_2 = function(anwar_birth_year) { // expression
    return 2022 - anwar_birth_year
}
const anwar_age_2 = calc_anwar_age_2(1947)
console.log(anwar_age_2)

/* -------------------------------------------------------------------------- */

// ๐งก Arrow Function
// ๐ Arrow function is simply a special form...
// of function expression that is shorter.
// ๐ In this form, return happens implicitly when we only one line code to be executed.
// ๐ Execution contexts belonging to arrow function, do not get their own argument keyword and 'this' keyword

//TODO:๐ Arrow function syntax =
/*
    const function_name(var) = parameter => code to be executed
*/

// -----------------
// โ Example 1:
const calc_anwar_age_3 = anwar_birth_year => 2022 - anwar_birth_year;
// same as:
/*
    const calc_anwar_age_3 = function(anwar_birth_year) {
        return 2022 - anwar_birth_year
    }
*/
const anwar_age_3 = calc_anwar_age_3(1947)
console.log(anwar_age_3)

// -----------------
// โ Example 2: 
const years_until_retirement = (birth_year, first_name) => {
    const age = 2022 - birth_year;
    const retirement = 65 - age;
    return `${first_name} retires in ${retirement}`;
}

console.log(years_until_retirement(1975, "Dr Mazlee")); // years_until_retirement()
console.log(years_until_retirement(1970, "Nurul Izzah")); // years_until_retirement()

/* -------------------------------------------------------------------------- */

// ๐งก Functions can be called inside another functions
// Why we need to calling function in another function?:
// ! DRY = DON'T REPEAT YOURSELF

// -----------------
// โ Example 1:
const cut_fruit_pieces = function(num_fruit) {
    return num_fruit * 4;
}
const fruit_processor_2 = function (num_apples, num_oranges) {
    const num_apple_pieces = cut_fruit_pieces(num_apples) //calling the function = cut_fruit_machine()
    const num_orange_pieces = cut_fruit_pieces(num_oranges) //calling the function = cut_fruit_machine()

    const juice_statement = `Juice with ${num_apple_pieces} pieces apples and 
    ${num_orange_pieces} pieces of oranges`;
    return juice_statement;
}
console.log(fruit_processor_2(5, 2)) 

// -----------------
// โ Example 2: (Hard)
// ๐ tips: return statement must be the most below code in the function body

const calc_age = function(birth_year_2) { 
    return 2022 - birth_year_2
}
const years_until_retirement_2 = function(birth_year) {
    const age = calc_age(birth_year);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`I'm retires in ${retirement} years ๐ทโโ๏ธ`)
        return retirement
    }
    else {
        console.log(`I'm has already retired ๐จโ๐ฆณ`)
        return "RETIRED BOSSKU"
    }
}
console.log(years_until_retirement_2(1975));
console.log(years_until_retirement_2(1950));


/* -------------------------------------------------------------------------- */

// ๐งก 5# Coding Challenges (Hard)

// first function
const calc_average = (a, b, c) => (a + b + c) / 3;
// calling first function
let score_dolphin = calc_average(44, 23, 71); // 46
let score_koala = calc_average(65, 54, 49); // 56
console.log(score_dolphin, score_koala);

// second function
const check_winner = function(avg_dolphin, avg_koala) {
    if (avg_dolphin >= 2 * avg_koala) {
        console.log(`Dolphin win๐ (${avg_dolphin} vs ${avg_koala})`)
    }
    else if (avg_koala >= 2 * avg_dolphin) {
        console.log(`Koala win๐ (${avg_koala} vs ${avg_dolphin})`)
    }
    else {
        console.log(`No team wins...)`)
    }
}
// calling second function
check_winner(score_dolphin, score_koala)

// second match (change the value)
score_dolphin = calc_average(85, 54, 41); // 60
score_koala = calc_average(23, 34, 27); // 28
console.log(score_dolphin, score_koala);
check_winner(score_dolphin, score_koala);

/* -------------------------------------------------------------------------- */

// ๐งก Arrays (Data structure)
// ๐ An array can hold many values under a single variable...
// and you can access the values by referring to an index number.

// -----------------
// โ Example 1:

// ๐ Without using array
const friend_1 = "Muhyiddin";
const friend_2 = "Sanusi";
const friend_3 = "Azmin Ali";

// ๐ Using array using (literal syntax)
// ๐ Usual method to use array

const friends = ["Muhyiddin", "Sanusi", "peter"] // ๐ฆ 1
console.log(friends)

// ๐ Using array using (Array function)
const fifa_years = new Array (2006, 2008, 2010, 2014, 2018, 2022) // ๐ฆ 2

// -----------------
// โ Access element in Array
// ๐ Start counting from 0
// //TODO: example = fifa_year[3]

//? const fifa_years = [2006, 2008, 2010, 2014, 2018, 2022]
console.log(fifa_years[0]); // 2006
console.log(fifa_years[4]); // 2018

// -----------------
// โ Count elements in array using (.length) property.

//? const fifa_years = [2006, 2008, 2010, 2014, 2018, 2022]
console.log(fifa_years.length) //6

// -----------------
// โ Access last element in Array

//? const fifa_years = [2006, 2008, 2010, 2014, 2018, 2022]
console.log(fifa_years[fifa_years.length - 1])

// -----------------
// โ Mutate element in Array
// ๐ We can actually mutate Arrays even though they were declared with const.

//? const friends = ["Muhyiddin", "Sanusi", "peter"]
friends[1] = "Rafizi" // ["Muhyiddin", "Rafizi", "peter"]

// -----------------
// โ Array can hold values with different types all at the same time

const about_me = ["Arif", "Rashidi", 2001, 2022 - 2001, friends]
console.log(about_me)

// -----------------
// โ Using array in function

const year = [1990, 1967, 2001, 2005, 2018]

// Function
const calc_age_me = function(birth_year) {
    return 2022 - birth_year
}
// Calling the function
calc_age_me(year[1]) // argument = 1967
calc_age_me(year[2]) // argument = 2001
calc_age_me(year[year.length - 1]) // argument = 2018

console.log(year[1], year[2], year[year.length - 1])

/* -------------------------------------------------------------------------- */

// ๐งก Basic Array Operations (Methods)
// ๐ .push() / .unshift() / .pop() / .shift() / .indexOf() / .includes()

// -----------------๐ฆ
const anwar_friends = ["Rafizi", "Zahid", "Anthony"]

// -----------------
// โ Add a new element to an array using the .push() method
anwar_friends.push("Mazlee")
console.log(anwar_friends)

// โ Add a new element at the beginning of an array using the .unshift() method
anwar_friends.unshift("Mat Sabu")
console.log(anwar_friends)

// โ Remove last element of an array using the .pop() method
anwar_friends.pop()
console.log(anwar_friends)

// โ Remove first element of an array using the .shift() method
anwar_friends.shift()
console.log(anwar_friends)

// โ Show index number of an array element using .indexOf() method.
console.log(anwar_friends.indexOf("Zahid"))
console.log(anwar_friends.indexOf("Anthony"))

// -----------------
// โ Show boolean of an array element using .includes() method.
console.log(anwar_friends.includes("Zahid"))
console.log(anwar_friends.includes("Azmin Ali"))

// ๐ Example use of .includes() method.
if (anwar_friends.includes("Zahid")) {
    console.log("You have friend name Zahid")
}

/* -------------------------------------------------------------------------- */

// ๐งก 6# Coding Challenges

const bills = [125, 555, 44]
const calc_tip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
const tips = [calc_tip(bills[0]), calc_tip(bills[1]),calc_tip(bills[2])]
const total_bill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, total_bill)

/* -------------------------------------------------------------------------- */

// ๐งก Objects (Data structure)
// ๐ An objects can hold many properties with values under a single variable.
// ๐ An object is created by using ( object literal syntax {} )
// ๐ Different between array & object, We can only access array elements using their order number...
// meanwhile, objects is for data that we actually want to name, and then retrieve from the object...
// based on that name.

// -----------------
// โ Different between array & object:

// ๐ Using array
const arif_rashidi_1 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"]
]

// ๐ Using objects
const arif_rashidi_2 = {
    first_name: "Arif", // first_name is called properties / "Arif" is called value
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}

/* -------------------------------------------------------------------------- */

// ๐งก Objects (Dot vs. Bracket Notation)

// -----------------๐ฆ
/*
    const arif_rashidi_2 = {
      first_name: "Arif",
       last_name: "Rashidi",
       age: 2022 - 2001,
       job: "frontend developer",
       friends: ["Adam", "Harith", "Mat"]
    }
*/

// -----------------
// โ Access element in objects using (Dot)
// ๐ (.) is actually is an operator
//TODO: Dot syntax = ( var_name.properties )

// ๐ Example 1:
console.log(arif_rashidi_2.first_name);

// -----------------
// โ Access element in objects using (Bracket Notation)
// ๐ The big difference between Dot & Bracket Notation is...
// In the bracket notation, we can actually put any expression (such as operation)...
//  that we'd like, so we don't have to explicitly write the string.
//TODO: Bracket Notation syntax = ( var_name["properties"] )

// ๐ Example 1
console.log(arif_rashidi_2["first_name"]);

// ๐ Example 2
const name_key = "_name";
console.log(arif_rashidi_2["first" + name_key])
console.log(arif_rashidi_2["last" + name_key])

// ๐ Example 3
// ๐ Did you know?: ( prompt ) is yet another built in function that is...
// built into JavaScript and that we can use in any script. (create popup window)
// The ( prompt ) function always return "string"

// const interested_in = 
// prompt("What do you want to know about me? Choose between first_name, last_name, age, job and friends")
// console.log(arif_rashidi_2[interested_in])

// -----------------
// โ Add new property to the object

arif_rashidi_2.location = "Malaysia"
// arif_rashidi_2["email"] = "arifshidi01@gmail.com"

// -----------------
// โ Small challenge:
// console.log = Arif has 3 friends, and his best friend is called Adam.

console.log
(`${arif_rashidi_2.first_name} has ${arif_rashidi_2.friends.length} friends, 
his best friend is called ${arif_rashidi_2.friends[0]}`)

/* -------------------------------------------------------------------------- */

// ๐งก Object Methods

// -----------------
// โ Using function as property in objects.

const arif_rashidi_3 = {
    first_name: "Arif",
    last_name: "Rashidi",
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"],
    has_driver_license: true,
    // function in objects.๐
    calc_age: function(birth_year) {
        return 2022 - birth_year
    }
}

const age = arif_rashidi_3.calc_age(2001)
console.log(age)

// -----------------
// โ ( this ) keyword in objects
// ๐ In a function definition, ( this ) refers to the "owner" of the function.

const arif_rashidi_4 = {
    first_name: "Arif",
    last_name: "Rashidi",
    birth_year: 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"],
    has_driver_license: false,
    // function in objects.๐
    calc_age: function() {
        this.age_2 = 2022 - this.birth_year // this.birth_year = 2001
        return this.age_2
    }
}

arif_rashidi_4.calc_age()
console.log(arif_rashidi_4.age_2)

// -----------------
// โ Small challenges
// console.log = Arif is a 21 year old frontend developer, and he has (a / not) driver's license
/*
    const arif_rashidi_4 = {
        first_name: "Arif",
        last_name: "Rashidi",
        birth_year: 2001,
        job: "frontend developer",
        friends: ["Adam", "Harith", "Mat"],
        has_driver_license: true,
        calc_age: function() {
            return 2022 - this.birth_year // this.birth_year = 2001
        }
    }
*/

const arif_driver_license = arif_rashidi_4.has_driver_license ? "he has a" : "he not have a"

console.log(`${arif_rashidi_4.first_name} is a ${arif_rashidi_4.age_2 } year old ${arif_rashidi_4.job}, and
${arif_driver_license} driver's license`) 

/* -------------------------------------------------------------------------- */

// ๐งก 7# Coding Challenges

// -----------------๐ฆ
const mark_mass = 78;
const mark_height = 1.69;
const john_mass = 92;
const john_height = 1.95;

const bmi_mark = mark_mass / mark_height * mark_height; // 27.309968138370508
const bmi_john = john_mass / (john_height * john_height); // 24.194608809993426
const mark_higher_bmi = bmi_mark > bmi_john;

// -----------------
// โ Use an objects to stored data...

// Mark
const mark = {
    full_name : "Mark Miller",
    mass : 78,
    height : 1.69,
    // function
    calc_bmi : function() {
        this.bmi = this.mass / this.height * this.height
        return this.bmi
    }
}
mark.calc_bmi()
console.log(mark.bmi)

// John
const john = {
    full_name : "John Smith",
    mass : 92,
    height : 1.95,
    // function
    calc_bmi : function() {
         this.bmi = this.mass / this.height * this.height
         return this.bmi
    }
}
john.calc_bmi()
console.log(john.bmi)

// -----------------
// โ Extra challenges
// Log to the console who has the higher BMI
// together with the full name and the respective BMI.
// Example:"John's BMI (28.3)is higher than Mark's BMI (23.9)"

mark.bmi > john.bmi ? console.log(`Mark's BMI(${mark.bmi}) is higher than John's BMI(${john.bmi})`)
: console.log(`John's BMI(${john.bmi}) is higher than Mark's BMI(${mark.bmi})`)

/* -------------------------------------------------------------------------- */

// ๐งก The for Loop
// ๐ Loops are handy, if you want to run the same code over and over again, each time with a different value.
// ! DRY = DON'T REPEAT YOURSELF
// ๐ for loop keeps running while condition is TRUE, that why we need to set the limit.
// ๐ JavaScript supports different kinds of loops: 
// ๐ Traditional counter variable name has been (i)
//TODO:๐ for loop syntax =
/*
    for (expression 1(start from); expression 2(until); expression 3(how much number to add)) {
        code block to be executed
    }
*/

// -----------------
// โ With and without loop:

// ๐ Without loop:
console.log("Lifting weights repetition 1 ๐ช")
console.log("Lifting weights repetition 2 ๐ช")
console.log("Lifting weights repetition 3 ๐ช")
console.log("Lifting weights repetition 4 ๐ช")
console.log("Lifting weights repetition 5 ๐ช")
console.log("Lifting weights repetition 6 ๐ช")
console.log("Lifting weights repetition 7 ๐ช")
console.log("Lifting weights repetition 8 ๐ช")
console.log("Lifting weights repetition 9 ๐ช")
console.log("Lifting weights repetition 10 ๐ช")

// ๐ With loop:
for (let i = 1; i <= 10; i = i + 1) {
    console.log(`Lifting weights repetition ${i} ๐ช`)
}

/* -------------------------------------------------------------------------- */

// ๐งก Looping Arrays, Breaking and Continuing

// -----------------๐ฆ 1
const arif_rashidi_5 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]

// -----------------
// โ Using looping in array
for (let i = 0; i < arif_rashidi_5.length; i++) { // i++ is same as i = i + 1
    console.log(arif_rashidi_5[i]);
}

// -----------------
// โ Import looping value to array

// ๐ Example 1:
const types = [];

for (let i = 0; i < arif_rashidi_5.length; i++) { // i++ is same as i = i + 1
    // console.log(arif_rashidi_5[i]);
    types.push(typeof arif_rashidi_5[i]);
}
console.log(types);

// ๐ Example 2:
const born_years = [2001, 2006, 2008, 2010, 2014, 2018]; // ๐ฆ 2
const ages = [];

for (let i = 0; i < born_years.length; i++) {
    ages.push(2022 - born_years[i])
}
console.log(ages)

// -----------------
// โ looping statement: continue / break

// -----------------๐ฆ
const arif_rashidi_6 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]

// -----------------
// ๐ continue
// ๐ The continue statement breaks one iteration (in the loop), if a specified condition occurs...
// and continues with the next iteration in the loop.
// ๐ Explain Like I'm 5 ๐ผ: continue statement will skip any iteration that we don't want.
console.log("--- CONTINUE๐ ---");

for (let i = 0; i < arif_rashidi_6.length; i++) {
    if (typeof arif_rashidi_6[i] === "number") continue // will skip any iteration that type number 
    console.log(arif_rashidi_6[i])
}

// ๐ break
// ๐ The break statement used to terminate the whole loop and not just the current iteration.
console.log("--- BREAK๐ ---");

for (let i = 0; i < arif_rashidi_5.length; i++) {
    if (typeof arif_rashidi_5[i] === "number") break // will skip any iteration that type number 
    console.log(arif_rashidi_5[i])
}

/* -------------------------------------------------------------------------- */

// ๐งก Looping Backwards and Loops in Loops

// -----------------๐ฆ
const arif_rashidi_7 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]

// -----------------
// โ Looping backward
console.log("--- LOOP BACKWARD๐ ---");

for (let i = arif_rashidi_7.length - 1; i >= 0; i--) { // i-- same as i = i - 1
    console.log(arif_rashidi_7[i])
} 

// -----------------
// โ Loops in loops
console.log("--- LOOPS IN LOOPS๐ ---");

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise} ๐ช`)
    // another loop
    for (let rep = 1; rep <= 3; rep++) {
        console.log(`Lifting weight repetition ${rep}๐๏ธโโ๏ธ`)
    }
}

/* -------------------------------------------------------------------------- */

// ๐งก While Loop
// ๐ The (while loop) loops through a block of code as long as a specified condition
// (it doesn't have to be related to counter at all) is true.
// ๐ So this all means that the while loop is more versatile than the for loop...
// which means that it can be used in a larger variety of situations...
// and that's because it does not really need a counter.
// TODO:๐ while loop syntax=
/*
    while (condition) {
    code block to be executed
    }
*/

// -----------------
console.log("--- WHILE LOOP๐ ---");
// โ Example 1:

let rep = 1;
while (rep <= 3) {
    console.log(`Lifting weight repetition ${rep}๐๏ธโโ๏ธ`)
    rep++;
}

// -----------------
// โ Example 2: Special case when we need using (while loop)

let dice = Math.trunc(Math.random() * 6) + 1 // This line of code will execute random number from 1 to 6
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}๐ฒ`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`When you get number ${dice} it will end the loopโ`)
    }
}

/* -------------------------------------------------------------------------- */

// ๐งก 8# Coding Challenges

const my_bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const my_tips = []
const my_total_bills = []

const calc_my_tip = function (my_bills) {
    return my_bills >= 50 && my_bills <= 300 ? my_bills * 0.15 : my_bills * 0.2;
}
for (let i = 0; i < my_bills.length; i++) {
    const tip = calc_my_tip(my_bills[i])
    my_tips.push(tip)
    my_total_bills.push(tip + my_bills[i])
}
console.log(my_bills, my_tips, my_total_bills)

// Extra (Hard)

const calc_average_2 = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length
}
console.log(calc_average_2([2, 3, 7]));
console.log(calc_average_2(my_total_bills))
