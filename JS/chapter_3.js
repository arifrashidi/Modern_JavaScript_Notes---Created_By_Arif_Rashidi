
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- ๐ CHAPTER 3: Developer skills ---");
/* -------------------------------------------------------------------------- */

// ๐งก: Main topic
// ๐: Notes
// โ: Subtopics
// ๐: Sub-subtopics
// ๐ฆ: Variables

/* -------------------------------------------------------------------------- */

// ๐งก How to think like a developer: become a problem solver!

// ๐ 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
// ๐ 2. Divide and conquer: Break a big problem into smaller sub-problems.
// ๐ 3. Don't be afraid to do as much research as you have to. (Stack Overflow / MDN Web docs)
// ๐ 4. For bigger problem, write pseudo-code before writing the actual code

/* -------------------------------------------------------------------------- */

// ๐งก Coding Challenge 1 (Hard)

// Problem:
// We work for a company building a smart home thermometer. 
// Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude...
// Keep in mind that sometimes there might be a sensor error."
// After that, function should now received two arrays of temperature

// -----------------๐ฆ
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// -----------------
// โ Understanding the problem

// Q : What is temperature amplitude?
// A : Different between highest & lowest temp

// Q : How to compute min & max temperature?
// A : 

// Q : What's a sensor? And what to do?
// A : 

// -----------------
// โ Breaking up into sub-problem

// - How to ignore error?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplified) and return it
// - How to merge 2 arrays?

// -----------------
// โ SOLUTION:

const calc_temperature_amplitude = function(t1, t2) {
    // combine two array
    const temp_pholder = t1.concat(t2);
    console.log(temp_pholder);

    // find max and min
    let max = temp_pholder[0];
    let min = temp_pholder[0];

    for (let i = 0; i < temp_pholder.length; i++) {
        const cur_temp = temp_pholder[i]
        // ignore error
        if (typeof cur_temp !== "number") {
            continue;
        }
        // find max temp
        if (cur_temp > max) {
            max = cur_temp;
        }
        // find min temp
        if (cur_temp < min) {
            min = cur_temp;
        }
    }
    console.log(max, min);
    return max - min;
}
const temperature_amplitude = calc_temperature_amplitude(temperature);
console.log(temperature_amplitude);

// Combine another array
const new_temperature_amplitude = calc_temperature_amplitude([3, 5, 1],[ 9 , 0, 5])
console.log(new_temperature_amplitude);

/* -------------------------------------------------------------------------- */

// ๐งก Debugging (Fixing Errors)

// โ How to debugging:

// 1. Becoming aware that there is a bug.
// 2. Find and isolating where exactly the bug is happening in code.
// 3. Correct the bug
// 4. Prevent the bug from happening again

// -----------------
// โ Others:

// ๐ Breakpoint:
// Breakpoint used (red dot beside number in VScode) to stop code from continue executing after reach breakpoint.

// ๐ Debugging in tab:
// You can find the bug in tab(Sources) to easier for you to find the bug

// -----------------
// โ Small Practice:

const measure_kelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // value: Number(prompt("Degree Celsius:"))
        value: 10 // this is just for temporary
    };
    // Find the bug
    console.table(measurement)
    // kelvin = celsius value + 273
    const kelvin = measurement.value + 273;
    return kelvin
}
console.log(measure_kelvin())

/* -------------------------------------------------------------------------- */

// ๐งก Coding Practices (Easy)

// -----------------
// โ Question 1: Convert Minutes into Seconds

const minutes = [5, 3, 2]

const calc_seconds = function(para_minutes) {
    const min_to_sec = para_minutes * 60;
    return min_to_sec;
}

for (i = 0; i < minutes.length; i++) {
    const seconds = calc_seconds(minutes[i]);
    console.log(seconds);
}

// -----------------
// โ Question 2: Return the First Element in an Array

const numbers = [30, -500, 0, 50];

const get_first_value_calc = function(numbers_para) {
    const first_value = numbers_para;
    return first_value;

}
const get_first_value = get_first_value_calc(numbers[0])
console.log(get_first_value);

/* -------------------------------------------------------------------------- */