
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- π CHAPTER 5: How JavaScript Works Behind The Scene ---");
/* -------------------------------------------------------------------------- */

// π§‘: Main topic
// π: Notes
// β: Subtopics
// π: Sub-subtopics
// π¦: Variables

/* -------------------------------------------------------------------------- */

// π§‘ An High-Level Overview of JavaScript

// -----------------
// β Monster definition of JavaScript

// JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED, MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED,
// DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING
// EVENT LOOP CONCURRENCY MODEL

// -----------------
// β Deconstructing the monster definition of JavaScript

// π 1. High level
// π These language have so-called abstractions that will manage our resources automatically.
// πThis makes the language easier to learn and to use, but the downside is that programs will never be as fast...
// or as optimized as for example, C programs.

// π 2. Garbage-collected
// π Garbage-collection is a powerful tool inside the JavaScript engine, which automatically removes...
// old & unused objects from the computer memory from time to time,...
// so that we don't have to manage our memory manually.

// π 3. Interpreted / just-in-time compiled (jit)
// π Computer's processor only understands zeros and ones, which is also called machine code.
// π Our JavaScript code eventually will be translated to machine code, and that step can be either compiling..
// or interpreting.
// π This step is necessary in every single programming language because no one writes machine code manually.

// π 4. Multi-paradigm
// π An approach and mindset of structuring code, which will direct your coding style and technique.
// π 3 popular paradigm are Procedural programming, Object-oriented programming (OOP) and Functional programming (FP)

// π 5. Prototype-based object-oriented
// π ???

// π 6. First-class functions
// π In a language with first-class functions, functions are simply treated as variables...
// We can pass them into other functions, and return them from functions.

// π 8. Dynamically-type
// π In JavaScript, we don't assign data types to variables. Instead, they only became known...
// when the JavaScript engine executes our code. 
// π Also, the type of variables can easily be changed as we reassign variables.
// π For most other programming languages, where we have to manually assign types, to variables...
// to prevents bugs from happening, If you yourself want to use JavaScript with not dynamically-type,...
// then you can always look into TypeScript.

// π 9. Single-threaded & Non-blocking event loop
// π Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time.
// π Thread: a set of instructions that is executed in the computer's CPU.
// π JavaScript runs in one single thread, so it can only do one thing at a time.
// π Event loop: takes long-running tasks, executes them in the background and then puts them back in the main thread
// once they are finished.

/* -------------------------------------------------------------------------- */

// π§‘ The JavaScript Engine
// π JavaScript engine is simply a computer program that executes JavaScript code in the browser.
// π Every browser has its own JavaScript engine but probably the most well known engine is Google's V-Eight,...
//  also Node.js which is that JavaScript runtime

// -----------------
// β call stack / heap
// π So any JavaScript engine always contains a call stack and a heap.

// π call stack:
// π The call stack is where our code is actually executed using something called execution contexts.
// π Call stack is where execution contexts get stacked on top of each other,...
// to keep track of where we are in the execution.
// π So the execution context that is on top of the stack, is the one that is currently running...
// and when it's finished running, it will be removed from the stack, and execution will go back
// to the previous execution context.

// π heap:
// π The heap is an unstructured memory pool which stores all the objects that our application needs.

/* -------------------------------------------------------------------------- */

// π§‘ Compilation vs interpretation
// π Our JavaScript code needs to be converted into this machine code and this can happen using compilation or...
// interpretation.
// π Modern JavaScript engine now use a mix between compilation and interpretation that is Just-in-time (JIT) ...
// compilation

// -----------------
// β Compilation:
// πSo in compilation, the entire source code is converted into machine code at once...
// and this machine code is then written into a portable file that can be executed on any computer.

// -----------------
// β Interpretation: 
// π Interpreter runs through the source code and executes it line by line.
// π The problem with interpreted languages is that they are much, much slower than compiled languages.

// -----------------
// β Just-in-time (JIT) compilation: 
// π This approach basically compiles the entire code into machine code at once and then executes it right away.

/* -------------------------------------------------------------------------- */

// π§‘ Just-in-time (JIT) compilation of Javascript in detail (step by step)

// -----------------
// β 1. Parse the code
// π So our JavaScript code enters the engine and parse the code which essentially means to read the code.
// π During the parsing process, the code is parsed into a data structure called the abstract syntax tree (AST).

// -----------------
// β 2. Compilation & Execution
// π The generated AST will compiles it into machine code and then gets executed right away that happen in call stack.

// -----------------
// β 3. Optimization
// π Modern JavaScript engines actually have some pretty clever optimization strategies,...
// what they do is to create a very un-optimized version of machine code in the beginning...
// just so that it can start executing as fast as possible.
// π Then in the background, this code is will be optimized and recompiled during the...
// already running program execution.
// π And this can be done most of the times and after each optimization the un-optimized code...
// is simply swept for the new more optimized code without ever stopping execution of course.
// π And this process is what makes modern engines such as the V-Eight so fast.
// π All this parsing, compilation and optimization happens in some special threads inside the engine...
// that we cannot access from our code. So completely separate from the main thread that is basically...
// running into call stack.

/* -------------------------------------------------------------------------- */

// π§‘ The bigger picture: Javascript runtime in the browser
// π So we can imagine a JavaScript runtime as a big container, which includes all the things that we need...
// in order to use JavaScript in the browser.

// -----------------
// β JavaScript engine
// π JavaScript engine is the main thing to have in order to run JavaScript in the browser.
// π Without an engine there is no runtime JavaScript cannot run at all.
// π This is include JavaScript components that is call stack and a heap.

// -----------------
// β Web API
// π Beside JavaScript engine, we also need access to the web APIs.
// π Web APIs are functionalities provided to the engine such as DOM, Timers and Fetch API,...
// JavaScript simply gets access to these APIs through the global window object.

// -----------------
// β Callback queue
// π This is a data structure that contains all the callback functions that are ready to be executed.
// π For example, when we attach event handler functions to DOM elements like a button to react to certain events,...
// So as the event happens, for example a click, the callback function will be called...
// So the first thing happens is that the callback function is put into the callback queue...
// Then when the call stack is empty, the callback function is passed to the call stack...
// so that it can be executed and this process is called 'event loop'.

/* -------------------------------------------------------------------------- */

// π§‘ Execution context in Javascript engine
// π Execution context is an environment in which a piece of JavaScrip is executed. 
// π It stores all the necessary information for some code to be executed.
// π JavaScript code always runs inside an execution context.

// -----------------
// β Process

// π 1. Global execution context (for top-level code) is created.

// π 2. Top level code will be executed inside Global execution context (Global EC)

// π 3. functions will be executed and waiting for callbacks

// π 4. After the function is called, a new execution context will be created, and all together...
// will make the call stack

/* -------------------------------------------------------------------------- */

// π§‘ Inside the execution context
// π So variable environment, scope chain, and 'this' keyword is generated 
// and this process is called creation phase, Which happens right before execution.
// π Execution contexts belonging to arrow function, do not get their own argument keyword and 'this' keyword

// -----------------
// β Variable Environment
// π 1. let, const, var declaration
// π 2. Function
// π 3. Argument object

// -----------------
// β Scope chain
// π Variables that are located outside of the current function.

// -----------------
// β 'this' keyword
// π Variables that are located outside of the current function.

/* -------------------------------------------------------------------------- */

// π§‘ Scope chain in detail

// -----------------
// β What is scope:
// π Scope refers to the area where a variable ...
// is visible and accessible to other code.

// -----------------
// β 3 types of scope

// π global scope:
// π Outside of any function or block.
// π Variables declared in global scope are accessible everywhere

    // π Example: 
    const my_name = "Arif";

// π function scope:
// π Every function creates its own scope...
// Variables declared inside that function are only accessible ...
// inside that function and any of its nested functions or blocks.
// π Also called local scope.

    // π Example: 
    function calc_age(birth_year) {
        const current_year = 2022;
        const age = current_year - birth_year;
        return age;
    }
    // console.log(current_year); // Uncaught ReferenceError: current_year is not defined

// π block scope (ES6):
// π Variables declared inside a { } block cannot be accessed from outside the block
// π However, this only applies to let and const variables...
// Variable (var) is accessible outside the block so var is not block scoped, It is function scoped.

    // π Example: 
    const year = 1995;
    if (year >= 1981 && year <= 1996) {
        const millennial = true;
        const food = "Nasi lemak";
        console.log(millennial, food);
    }
    // console.log(millennial); // Uncaught ReferenceError: current_year is not defined

// -----------------
// β Nested scope / Lexical Scope

// π Nested scope:
// π Just like functions in JavaScript, a scope can be nested inside another scope.
// The scope contained within another scope is named inner scope & the scope 
// that wraps another scope is named outer scope.

    // π Example: 
    const friend_name = 'Peter'; // global scope
    function greet() {
    const greeting = 'Hello'; // function scope
        {
            const language = 'English'; // block scope
            console.log(`${language}: ${greeting} ${friend_name}`);
        }
    }
    greet();

// π Lexical Scope:
// π In JavaScript, we have lexical scoping, so the rules of where we can access variables
//  are based on exactly where in the code functions and blocks are written;

    // π Example: 
    function showLastName() {
        const lastName = "Ibrahim";
        return lastName;
      }
      // Define another function:
      function displayFullName() {
        const fullName = "Anwar" + showLastName();
        return fullName;
      }
      // Call displayFullName():
      console.log(displayFullName());

// -----------------
// β scope chain
// π Every scope always has access to all the variables from all its outer scopes. This is the scope chain.
// π When a variable is not in the current scope, the engine looks up in the scope chain until...
// it finds the variable itβs looking for. This is called variable lookup.
// π The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.
// π The scope chain has nothing to do with the order in which functions were called...
// it does not affect the scope chain at all!

/* -------------------------------------------------------------------------- */

// π§‘ Scoping in practice

// -----------------
// β first example:

const first_name = "Arif";

// first function
function calc_age (para_birth_year) {
    const age = 2022 - para_birth_year;
    console.log(first_name); //β first_name can be accessed
    let job = "industrial design"

        // second function
        function print_age() {
            const output = `${first_name}, You are ${age}, born in ${para_birth_year}` //β can be accessed
            console.log(output);
        }
        print_age();
        // πβπ¨ console.log(output); //β cannot be accessed

        // block statement
        if (para_birth_year >= 2000) {
            const first_name = "Adam";
            var gen_z = true;
            const output_2 = `Oh you're are a gen Z, ${first_name}`;
            console.log(output_2);
                // third function
                function normal_calc (para_num_a, para_num_b) {
                    console.log(para_num_a + para_num_b);
                }
            normal_calc(2, 3);
            job = "frontend_developer" //β Reassigning new value to outer scope variable
        }
    // πβπ¨ normal_calc(2, 3); //β cannot be accessed (on strict mode)
    // πβπ¨ console.log(output_2); //β cannot be accessed
    console.log(gen_z); //β gen_Z can be accessed because (var) variable is a function scope.
    return age + " " + job;
}
calc_age(2001)
console.log(calc_age(2001));

// πβπ¨ console.log(age); //β cannot be accessed
// πβπ¨ print_age(); //β cannot be accessed


// π Reminder:
// π for scoping, the parameter of a function work just like normal variable.
// π A scope will never, ever have access to the variables of an inner scope.

/* -------------------------------------------------------------------------- */

// π§‘ Variable Environment: Hoisting and The Temporal Dead Zone (TDZ)

// -----------------
// β Hoisting: 
// π Makes some types of variables accessible/usable in the code before they are declared.
// π Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope
// π Why hoisting is important: Using functions before actual declaration and var hoisting is just a byproduct.

// -----------------
// β Temporal Dead Zone (TDZ): 
// π Region of the scope in which of variable is defined but cannot be used in anyway.
// π Basically each and every let / const variable get their own Temporal Dead Zone (TDZ) that starts...
// at the beginning of the scope until the line where it is defined...
// and the variable is only safe to use after the TDZ,
// π Why TDZ is important: Makes it easier to avoid and catch errors: 
// accessing variables before declaration is bad practice and should be avoided.



// -----------------
// β Hoisting mechanisms in (let / const) variable:
// π All code before that are in Temporal Dead Zone (TDZ) and cannot be accessed.
// π Variables defined with let and const are hoisted to the top of the block, but not initialized.
// π Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared...
// Using a let variable before it is declared will result in a ReferenceError.

    // π Example: 
    // πβπ¨ console.log(favourite_car); //β cannot access variable before initialized 
    const favourite_car = "Aston Martin"

// -----------------
// β Hoisting mechanisms in (var) variable:
    // π Var variable allow hoisting.
    // π Initial value will be undefined.

    // π Example: 
    console.log(favourite_food); //β initial value is undefined and can be reassigned to new value
    var favourite_food = "burger"
    
// -----------------
// β Hoisting mechanisms in function:

console.log(simple_calc(10, 5)); // function declaration allow hoisting.
// πβπ¨ console.log(simple_calc_expression(10, 5)); // function expression not allow hoisting.
// πβπ¨ console.log(simple_calc_arrow_func(10, 5)); // arrow function not allow hoisting.

// function declaration
function simple_calc(para_a, para_b) {
    return para_a + para_b
}
// function expression
const simple_calc_expression = function(para_a, para_b) {
    return para_a + para_b
}
// arrow function
const simple_calc_arrow_func = (para_a, para_b) => para_a + para_b

/* -------------------------------------------------------------------------- */

// π§‘ Hoisting and TDZ in Practice

// -----------------
// β Why we need to avoid using var variable:

// num_product value will be undefined,...
// that why we need to use let / const variable only to detect this problem early.
if (!num_product) { 
    delete_shopping_cart();
}

var num_product = 10;

function delete_shopping_cart() {
    console.log("All product deleted!");
}

/* -------------------------------------------------------------------------- */

// π§‘ This keyword
// π Special variable that is created for every execution context (every function)...
// that takes the value from its βownerβ.
// π "this" keyword is NOT static. It depends on how the function is called,...
// and its value is only assigned when the function is actually called.
// π "this" does NOT point to the function itself, and also NOT the its variable environment.
// π "this" always points to the object that is calling the method.

// -----------------
// β 4 scenarios where "this" keyword:

// π 1. "this" as a Method (in function)
// π When used in an object method, this refers to the object.

    // π Example 1:
    const person = {
        firstName: "Anwar",
        lastName: "Ibrahim",
        job: "Prime Minister",
        fullName : function() {
        return this.firstName + " " + this.lastName;
        }
    }
    console.log(person.fullName());

// π 2. "this" as a Method (in arrow function)
// π Arrow function arrow function does not get its own "this" keyword,
// π It will simply use the this keyword from its surroundings. So in other words, its parents "this" keyword,
// π For sloppy mode, "this" refers to the global object, because "this" is running in the global scope.

    // π Example 1:
    const second_person = {
        firstName: "Elon",
        lastName: "Musk",
        job: "entrepreneur",
        greet : () => console.log(`Hey, ${second_person.firstName}`),
    }
    console.log(second_person.greet());

// π 3. "this" in a function (strict):
// π JavaScript strict mode does not allow default binding...
// so, when used in a function, in strict mode, this is undefined.
// π For sloppy mode, "this" refers to the global object, because "this" is running in the global scope.

    // π Example 1:
    const calc_money = function(para_ringgit) {
        const dollar = Math.trunc(para_ringgit / 4.44);
        console.log(`${dollar} dollar`);
        console.log(this);
    }
    calc_money(1000);

/* -------------------------------------------------------------------------- */

// π§‘ Regular Functions vs Arrow Functions when using "this" keyword

// -----------------
// β problems encountered when using "this" keyword:
// π "this" keyword functions that be called inside another functions (in object)...
// is just like regular function, and it cannot be used. This is because regular function will create 
// its own "this" keyword.
const third_person = {
    firstName: "Rafizi",
    lastName: "Ramli",
    job: "Economy Minister",
    birth_year: 1964,
        calc_age: function() {
        const age = 2022 - this.birth_year
        console.log(age);
            // function inside another function:
            // const is_gen_z = function () {
            //     console.log(this.year >= 2001);
            // }
            // is_gen_z()  
        }    
    }
    third_person.calc_age();

// π Solution 1:
// π Solution to problem ("this" keyword functions that be called inside another functions) cannot be used.

const fourth_person = {
    firstName: "Rafizi",
    lastName: "Ramli",
    job: "Economy Minister",
    birth_year: 1964,
        calc_age: function() {
        const age = 2022 - this.birth_year
        console.log(age);
            // function inside another function
            const self = this; // Passing "this" keyword to other variable
            const is_gen_z = function () {
                console.log(self.year >= 2001);
            }
            is_gen_z()  
        }    
    }
    fourth_person.calc_age();

// π Solution 2 (Better Solution):
// π Better Solution is using arrow function because its simply use "this" keyword from its parents.

const fifth_person = {
    firstName: "Rafizi",
    lastName: "Ramli",
    job: "Economy Minister",
    birth_year: 1964,
        calc_age: function() {
        const age = 2022 - this.birth_year
        console.log(age);
            // arrow function inside another function
            const is_gen_z = () => {
                console.log(this.year >= 2001);
            }
            is_gen_z()  
        }    
    }
    fifth_person.calc_age();

/* -------------------------------------------------------------------------- */

// π§‘ Primitives vs. Objects (Primitive vs. Reference Types)

// -----------------
// β Primitives data types
// π These data types are pretty simple, and are sometimes treated as the lowest level...
// of implementation of a programming language. They are not objects, and do not have methods.
// π Examples of such data types are numbers, strings, booleans, null, and undefined.

    // π Example differences:
    let my_age = 31;
    let my_old_age = my_age;
    my_age = 30;
    // Test
    console.log(my_age); // 30
    console.log(my_old_age); // the value still 31

    // π Explanation:
    // π In call stack, my_age and my_old_age share the same memory address (so it also share the same value),...
    // So when my_age variable reassigned a new value(30), the new address is created but my_old_age is...
    // still use the old address.


    // -----------------
// β References data types
// π Reference data types, unlike primitive data types, are dynamic in nature...
// That is, they do not have a fixed size.
// π Most of them are considered as objects, and therefore have methods...
// Examples of such data types include arrays, functions, collections, and all other types of objects.

    // π Example differences:
    const my_bio = {
        first_name: "Arif",
        age: 21,
    }
    const my_friend_bio = my_bio;
    my_friend_bio.first_name = "Ikbal"
    // Test
    console.log(my_bio.first_name); // this value also followed change to "Ikbal"
    console.log(my_friend_bio.first_name); // "Ikbal"

    // π Explanation:
    // π When you copying an object, you're really just creating a new variable...
    // that points to the exact same object in the heap (in JavaScript engine).