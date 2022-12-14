
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- ๐ CHAPTER 6: Data Structures, Modern Operators and Strings ---");
/* -------------------------------------------------------------------------- */

// ๐งก: Main topic
// ๐: Notes
// โ: Subtopics
// ๐: Sub-subtopics
// ๐ฆ: Variables

/* -------------------------------------------------------------------------- */

// ๐งก Destructuring Arrays
// ๐ Destructing is to break a complex data structure down into a smaller data structure like a variable...
// So for arrays we use destructuring to retrieve elements from the array and store them...
// into variables in a very easy way.

// -----------------๐ฆ
const apple = [10, 20, 30];

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    order: function(para_starter_order, para_main_order) {
        return [this.starter_menu[para_starter_order], this.main_menu[para_main_order]];
    }
}

const burger = [2, 4, [5, 10]]

const months = ["january", "february", "march", "april"];

// -----------------
// โ Example 1:

// ๐ Retrieve array elements one by one into variables (not practical):
const apple_a = apple[0];
const apple_b = apple[1];
const apple_c = apple[2];
console.log(apple_a, apple_b, apple_c);

// ๐ With destructuring, we can actually declare all the array elements into variable at the same time:

const [apple_d, apple_e, apple_f] = apple;

console.log(apple_d, apple_e, apple_f);

// -----------------
// โ Example 2:

// ๐ Destructuring array element in object:
const [starter_menu_1, starter_menu_2, starter_menu_3, starter_menu_4] = restaurant.starter_menu;
console.log(starter_menu_3);

// ๐ Skip some element in array for some reason:
const [main_menu_1, , main_menu_2] = restaurant.main_menu; // pasta will be skip
console.log(main_menu_2);

// ๐ Switch two elements in array using destructuring:
let [category_1, category_2, category_3, category_4] = restaurant.categories;

    // switch italian and Vegetarian position
[category_1, category_3] = [category_3, category_1]
console.log(category_1, category_3);

// ๐ With destructuring, we can return multiple values in function

const [starter_order, main_order] = restaurant.order(2, 0);
console.log(starter_order, main_order);

// ๐ Destructing array inside an array:
const [burger_a, burger_b, [burger_c, burger_d]] = burger;
console.log(burger_c);

// Assign default value to variable that we destructuring

const [month_1 = "unknown", month_2 = "unknown", month_3 = "unknown", month_4 = "unknown", month_5 = "unknown"]
 = months;

console.log(month_1, month_4, month_5);

/* -------------------------------------------------------------------------- */

// ๐งก Destructuring Objects
// ๐ Destructing is to break a complex data structure down into a smaller data structure like a variable...
// So for objects we use destructuring to retrieve elements from the objects and store them...
// into variables in a very easy way.

// -----------------๐ฆ

const restaurant_2 = {
    res_name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    // order function
    order_delivery: function ({time, address, para_starter_order, para_main_order}) { // immediately destructuring
        console.log
        (`Order received, ${this.starter_menu[para_starter_order]}, ${this.main_menu[para_main_order]} will be delivered to ${address} at ${time}`);
    },
    // opening hours
    opening_hours: {
        thu: {
            open: 8,
            close: 10,
        },
        fri: {
            open: 9,
            close: 11,
        },
        sat: {
            open: 0, // open in 24 hours
            close: 24,
        },
    }
}

// -----------------
// โ Destructuring object into variables (name is same as property name):

const { res_name, opening_hours, categories } = restaurant_2;
console.log(res_name);
console.log(opening_hours);
console.log(categories);

// -----------------
// โ Destructuring object into variable (name is different than property name):

const { res_name: restaurant_2_name, opening_hours: restaurant_2_opening_hours } = restaurant_2;
console.log(restaurant_2_name, restaurant_2_opening_hours);

// -----------------
// โ Assign default value to variable that we destructuring
// ๐ This feature is very useful when dealing with third-party data (like API call).

const {drinks = "unavailable", starter_menu: restaurant_2_starter_menu = "unavailable"} = restaurant_2;
console.log(drinks, restaurant_2_starter_menu);

// -----------------
// โ Mutating variable values to same as objects properties:

let cat = 10;
let hamster = 20;

const pet = {
    cat: 55,
    hamster: 99,
};

({cat, hamster} = pet);
console.log(cat, hamster); // 55 99

// -----------------
// โ Destructuring objects inside an objects:

const {fri: {open, close}} = opening_hours; // opening_hours has been destructed to variable
console.log(open, close);

// -----------------
// โ Destructuring objects inside parameter function:

    // call order_delivery function
    // we pass one object into the function, not 4 arguments
restaurant_2.order_delivery({
    time: "9.00 pm",
    address: "no 296, Jalan Kemuning 10",
    para_starter_order: 1,
    para_main_order: 2,
})

/* -------------------------------------------------------------------------- */

// ๐งก The Spread Operator (...) - Iterables & objects features (ES6)
// ๐ The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array...
// or object into another array or object.
// ๐ The spread operator also works on iterables.
// ๐ Iterables: arrays, strings, maps, set, but NOT objects.
// ๐ So basically, most of the built-in data structures in JavaScript are now iterables, but except objects.
// ๐ But since ES 2018, the spread operator actually also works on objects, even though objects are not iterables.

// -----------------
// โ Example 1:

const extra_fund = [20, 50, 100];

const total_fund = [1, 5, 10, ...extra_fund];

console.log(total_fund);

// -----------------
// โ When we need to use all the elements of an array individually:

const fish = [10, 20, 30, 40, 50];

console.log(...fish);
    // same as
console.log(10, 20, 30, 40, 50);

// -----------------
// โ Using spread operators from array in objects:

const my_phone_spec = {
    brand: "Samsung",
    modal: "Samsung Galaxy S22",
    camera: ["12MP ultra-wide Camera", "10MP front camera", "50MP wide-camera"],
    battery: "3700 mAh"
}

const update_camera = [...my_phone_spec.camera, "10MP telephoto camera"]
console.log(update_camera);

// -----------------
// โ With spread operators, we can easily copy & merge an array:

const restaurant_3 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    order: function(para_starter_order, para_main_order) {
        return [this.starter_menu[para_starter_order], this.main_menu[para_main_order]];
    }
}

// ๐ Copy array:
const copy_categories = [...restaurant_3.categories]
console.log(copy_categories);

// ๐ Merge array:
const all_menu =  [...restaurant_3.starter_menu, ...restaurant_3.main_menu]
console.log(all_menu);

// -----------------
// โ Using spread operators to unpack string:

const str = "rashidi";

const letter = [...str]
console.log(letter);

// -----------------
// โ spread operators is not a place that expects multiple values separated by a comma:

// console.log(`${...str}`); // Uncaught SyntaxError: Unexpected token

// -----------------
// โ Using spread operators in real code scenarios:

const scrambled_egg = function(para_ing_1, para_ing_2, para_ing_3) {
    console.log(`To make scrambled egg ypu need ${para_ing_1}, ${para_ing_2} and ${para_ing_3}`);
}

const scrambled_egg_ingredients = ["eggs", "breads", "mayonnaise", "salad"];

scrambled_egg(...scrambled_egg_ingredients);

// -----------------
// โ Using spread operators with objects:

const restaurant_4 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    order: function(para_starter_order, para_main_order) {
        return [this.starter_menu[para_starter_order], this.main_menu[para_main_order]];
    }
}

const update_restaurant_4 = {
    founder_in: 1998,
    ...restaurant_4,
    founder_name: "Ristorante Roma"
}

console.log(update_restaurant_4.starter_menu);

/* -------------------------------------------------------------------------- */

// ๐งก Rest Pattern and Rest Parameters
// ๐ Rest pattern is used to collect unused elements and pack the elements into a new array.
// ๐ If spread operators at the right side of the assignment operator,...
// the rest pattern at the left side of the assignment operator.

// -----------------
// โ The rest pattern basically collects the elements that are unused when destructuring:

// ๐ first example:
const chicken = [11, 22, 33, 44, 55]

const [a, b, ...others] = chicken;

console.log(a, b, others);

// ๐ second example

const restaurant_5 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto", "tomato soup"],
}

const [food_1, , food_2, ...other_food] = [...restaurant_5.main_menu, ...restaurant_5.starter_menu];

console.log(food_1, food_2, other_food);

// -----------------
// โ The rest pattern used in objects:

const restaurant_6 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto", "tomato soup"],
        // opening hours
        opening_hours: {
            thu: {
                open: 8,
                close: 10,
            },
            fri: {
                open: 9,
                close: 11,
            },
            sat: {
                open: 0, // open in 24 hours
                close: 24,
            },
        }
}

const {sat, ...weekdays} = restaurant_6.opening_hours;

console.log(weekdays);

// -----------------
// โ Rest parameters
// ๐ Whe we use rest parameter, the parameter elements will be pack into one array.

// ๐ first example:
const add_num = function(...para_numbers) { // rest parameter operators
    // console.log(para_numbers);
    let sum = 0;
    for (let i = 0; i < para_numbers.length; i++) {
        sum = sum + para_numbers[i];
    }
    console.log(sum); // 400
}

add_num(5, 9, 22, 35, 43, 99, 108, 79)
    // 0r
const x = [100, 500, 400];
add_num(...x) // spread operators

// ๐ second example:
const order_pizza = function(para_main_ing, para_main_ing_2, ...para_other_ing) {
    console.log(para_main_ing, para_main_ing_2);
    console.log(para_other_ing);
}

order_pizza("bread", "tomato", "minced meat", "cheese", "mushroom", "bell pepper")

/* -------------------------------------------------------------------------- */

// ๐งก Short Circuiting in logical operators (&& and ||)
// ๐ Logical operators (&& and ||) are used to determine the logic between variables or values.
// ๐ We can do a lot more with (&& and ||) than only to combine Boolean values.
// ๐ (&& and ||) can use in any data type, they can return any data type by using short circuiting.

// -----------------
// โ Short circuiting in ( || operator ):
// ๐ if the first value is a truthy value, it will immediately return that first value.

// ๐ Example 1:
console.log(999 || "Tom"); // 3

// ๐ Example 2:
console.log("" || "Tom"); // Tom

// ๐ Example 3:
console.log(true || "Tom"); // Tom

// ๐ Example 4:
// ๐ No short circuiting happens, so it will return the last value even if the last value is false.
console.log(0 || null || undefined); // undefined

// ๐ Example 5:
console.log(0 || null || undefined || "" || "mystery" || 0 || 123); // mystery

// ๐ Real Life Scenarios using Short circuiting in ( || operator ):

const mc_donald = {
    location: "Senawang",
    phone: "06-678 8445",
    // customers_num: 25,
}

// Without using Short circuiting (using if else statement):
// ๐ If mc_donald.customers_num is not exist, it will run else statement.
const mc_donald_customers = mc_donald.customers_num ? mc_donald.customers_num : "Undefined customers";
console.log(mc_donald_customers);

// Using Short circuiting (more simple and short code):
// ๐ If mc_donald.customers_num is not exist, it will return the last value even if the last value is false.
const mc_donald_customers_2 = mc_donald.customers_num || "Undefined customers";
console.log(mc_donald_customers_2);

// -----------------
// โ Short circuiting in ( && operator ):
// ๐ If the first value is a falsy value, it will immediately return that first value.

// ๐ Example 1:
console.log(0 && "Tom"); // 0

// ๐ Example 2:
console.log(777 && undefined); // undefined

// ๐ Example 3:
console.log(false && "Tom"); // false

// ๐ Example 4:
// ๐ No short circuiting happens, so it will return the last value even if the last value is true.
console.log(55 && "Lily" && true); // true

// ๐ Example 5:
console.log(100 && 200 && 300 && 0 && 550 && undefined); // 0

// ๐ Real Life Scenarios using Short circuiting in ( && operator ):

const mc_donald_2 = {
    location: "Ampangan",
    phone: "06-760 0425",
    // order_burger: function(para_size_burger) {
    //     console.log(para_size_burger);
    // }
}

// ๐ If mc_donald.order_burger exist, than the code will be executed
mc_donald_2.order_burger && mc_donald_2.order_burger("Medium") 

/* -------------------------------------------------------------------------- */

// ๐งก Nullish Coalescing Operator (??) (ES2020)
// ๐ Nullish Coalescing Operator (??) are just like (||) but 0 and empty string ("") is not a falsy values.
// ๐ Nullish values: null and undefined only.
// ๐ This is useful when other falsy values can occur in the expression but are still valid.

// -----------------
// โ Short circuiting in ( ?? operator ):
// ๐ If the first value is not a Nullish value, it will immediately return that first value.

// ๐ Example 1:
console.log(0 ?? "Tom"); // 0

// ๐ Example 2:
console.log(undefined ?? "Tom"); // "Tom"

// ๐ Example 3:
console.log(null ?? "Tom"); // "Tom"

// ๐ Example 4:
console.log( null ?? undefined ?? 0 ?? "mystery" ?? "" ?? undefined); // 0

// ๐ Real Life Scenarios using Short circuiting in ( ?? operator ):

const mc_donald_3 = {
    location: "Seremban",
    phone: "06-678 8445",
    customers_num: 0,
}
// (??) operator will return the first value even the value is 0.
const mc_donald_3_customers = mc_donald_3.customers_num ?? "Undefined customers";
console.log(mc_donald_3_customers);

/* -------------------------------------------------------------------------- */

// ๐งก 1# Coding Challenges

/*
We're building a football betting app (soccer for my American friends ๐)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('goal_keeper') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

// -----------------๐ฆ
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// -----------------
// โ 1 Solution:
  const [player_1, player_2] = game.players;
  console.log(player_1, player_2);

// -----------------
// โ 2 Solution:
const [goal_keeper, ...field_player] = player_1;
console.log(goal_keeper);
console.log(field_player);

// -----------------
// โ 3 Solution:
const all_players = [...player_1, ...player_2];
console.log(all_players);

// -----------------
// โ 4 Solution:
const players_1_final = ['Thiago', 'Coutinho', 'Perisic', ...player_1]

// -----------------
// โ 5 Solution:
const { team1:team_1, x:draw, team2:team_2 } = game.odds;
console.log(team_1, draw, team_2);

// -----------------
// โ 6 Solution:
const print_goals = function(...para_scorer) {
    console.log(`${para_scorer.length} goals were scored`);
}
print_goals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
print_goals(...game.scored);

// -----------------
// โ 7 Solution:
team_1 > team_2 && console.log("team 1 is more likely to win");
team_2 > team_1 && console.log("team 2 is more likely to win");

/* -------------------------------------------------------------------------- */

// ๐งก Looping Arrays: The for-of Loop
// ๐ So this loop will automatically loop over the entire array and in each iteration,
// ๐ It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
// TODO Syntax:
/*
  for (const/let VARIABLE_NAME of ITERABLES) {
      code block to be executed
   }
*/

// -----------------๐ฆ
const mc_donald_4 = {
    location: "Aeon Seremban",
    phone: "06-678 8445",
    customers_num: 25,
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
}

const mc_donald_menu = [...mc_donald_4.menu, ...mc_donald_4.desserts];

// -----------------
// โ Example 1:

for (const item of mc_donald_menu) {
    console.log(item);
}

// -----------------
// โ Example 2:

// ๐ entries() โจ(ARRAY - METHOD)
// ๐ returns an Iterator object with key/value pairs
// TODO Syntax: ARRAY.entries()

console.log(...mc_donald_menu.entries()); // [0, "Prosperity Burger"]

for (const [num, item] of mc_donald_menu.entries()) { // using destructuring at VARIABLE_NAME
    console.log(`${num + 1}: ${item}`);
}

/* -------------------------------------------------------------------------- */

// ๐งก Enhanced Object Literals (ES6)
// ๐ An enhancement when dealing with object

// -----------------
// โ First Enhancement: When we want to add new properties in object from outside variable:

const mc_drinks = ["Hot MILO", "Hot Tea", "Hot Teh Tarik", "Coca-Cola"];

const mc_donald_5 = {
    location: "PD WaterFront",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    mc_drinks, //same as = mc_drinks = mc_drinks
}
console.log(mc_donald_5);

// -----------------
// โ Second Enhancement: Shorthand method when write function in object:

const mc_donald_6 = {
    location: "Lotus Seremban",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    order (para_menu, para_dessert) { // no need to write full syntax
        console.log(para_menu, para_dessert)
    },
}

// -----------------
// โ Third Enhancement: We can computer properties name in object:

const mcd_weekdays = ["mon", "tues", "wed", "thurs", "fri", "Satur", "Sun"]

const mc_donald_7 = {
    location: "Forest Height, Senawang",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        [mcd_weekdays[0]]: { // mon
            open: "9 a.m",
            close: "9 p.m"
        },
        [mcd_weekdays[1]]: { // tues
            open: "9 a.m",
            close: "9 p.m"
        },
        [mcd_weekdays[6]]: { // sun
            open: "10 a.m",
            close: "10 p.m"
        },
    }
}
console.log(mc_donald_7.opening_hours);

/* -------------------------------------------------------------------------- */

// ๐งก Optional Chaining (?.) (ES2020)
// ๐ If the object accessed or function called is undefined or null,...
// it returns undefined instead of throwing an error.

const mc_donald_8 = {
    location: "Putra Nilai DT",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        mon: { // mon
            open: "9 a.m",
            close: "9 p.m"
        },
        fri: { // tues
            open: "9.30 a.m",
            close: "8.30 p.m"
        },
        sun: { // sun
            open: "10 a.m",
            close: "10 p.m"
        },
    }
}

// -----------------
// โ Problem 1:
// ๐ "sat" property do not exist, when we want access the "open", we will get error.
// ๐ The "sat" is undefined, and when undefined try to acccess his children, we will get error.

// console.log(mc_donald_8.opening_hours.sat.open); // ERROR

// -----------------
// โ Solution 1:

// ๐ Using if else statement (not practical):
// ๐ The code will not get executed because "sat" do not exist.
// ๐ Problem to this solution: If the "opening hours" is not even exist, we will get error,

if (mc_donald_8.opening_hours.sat) {
    console.log(mc_donald_8.opening_hours.sat.open);
}

// ๐ Solution to problem 1:
if (mc_donald_8.opening_hours && mc_donald_8.opening_hours.sat) {
    console.log(mc_donald_8.opening_hours.sat.open);
}

// -----------------
// โ Solution 2:

// ๐ Using optional chaining (?.) (practical):
console.log(mc_donald_8.opening_hours.sat?.open);

// ๐ When we not even sure if "opening_hours" is even exist:
console.log(mc_donald_8.opening_hours?.sat?.open);

// -----------------๐ฆ
const mc_donald_9 = {
    location: "Bandar Seri Putra",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big_Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        mon: {
            open: "9 a.m",
            close: "9 p.m"
        },
        fri: {
            open: "9.30 a.m",
            close: "8.30 p.m"
        },
        sun: {
            open: "10 a.m",
            close: "10 p.m"
        },
    },
    order: function (para_menu, para_dessert) {
        return `order ${this.desserts[para_menu]} and ${this.desserts[para_dessert]} received`;
    },
}

const days = ["mon", "tues", "wed", "thurs", "fri", "satur", "sun"]

// -----------------
// โ Using optional chaining(?.) with The for-of Loop:

for (const item of days) {
    const mcd_open = mc_donald_9.opening_hours[item]?.open || "another time";
    console.log(`On ${item}, we open at ${mcd_open}`);
}

// -----------------
// โ Using optional chaining(?.) for calling function:

const print_order = mc_donald_9.order?.(2, 3) || "order is not available";
console.log(print_order);

/* -------------------------------------------------------------------------- */

// ๐งก Looping Objects: Object Keys, Values, and Entries

// -----------------๐ฆ
const mc_donald_10 = {
    location: "Seremban 2",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big_Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        mon: {
            open: "9 a.m",
            close: "9 p.m"
        },
        fri: {
            open: "9.30 a.m",
            close: "8.30 p.m"
        },
        sun: {
            open: "10 a.m",
            close: "10 p.m"
        },
    },
    order: function (para_menu, para_dessert) {
        return `order ${this.desserts[para_menu]} and ${this.desserts[para_dessert]} received`;
    },
}

// -----------------
// โ Looping object with Object.keys()
// ๐ Object.keys() โจ(OBJECT - METHOD)
// ๐ Returns an Array with object properties name only (without properties value) .
// TODO Syntax: Object.keys(OBJECT)

// ๐ Example 1:
const properties = Object.keys(mc_donald_10.opening_hours);
console.log(properties);

let opening_hours_text = `We are open for ${properties.length} days:`;

for (const item of properties) {
    opening_hours_text = opening_hours_text + ` ${item},`;
}
console.log(opening_hours_text);

// -----------------
// โ Looping object with Object.values()
// ๐ Object.values() โจ(OBJECT - METHOD)
// ๐ Returns an Array with object properties values only (without properties name)
// TODO Syntax: Object.values(OBJECT)

// ๐ Example 1:
const values = Object.values(mc_donald_10.opening_hours)
console.log(values);

const entries = Object.entries(mc_donald_10.opening_hours);
console.log(entries);

for (const [item, {open, close}] of entries) {
    console.log(`on ${item}, we open at ${open} and close at ${close}`);
}

/* -------------------------------------------------------------------------- */

// ๐งก 2# Coding Challenges
/*
    Your tasks:
    1. Loop over the football_game.scored array and print each player name to the console,
    along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already
    studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them
    (except for "draw"). Hint: Note how the odds and the game objects have the
    same property names ๐
    4. Bonus: Create an object called 'player_who_score' which contains the names of the
    players who scored as properties, and the number of goals as the value. In this
    game, it will look like this:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }
*/

// -----------------๐ฆ
const football_game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scorer: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// -----------------
// โ 1 Solution:
for (const [num, item] of football_game.scorer.entries()) {
    console.log(`Goal ${num + 1}: ${item}`);
}

// -----------------
// โ 2 Solution:

const odds_values = Object.values(football_game.odds);

let average = 0;
for (const i of odds_values) {
    average += i;
}
average /= odds_values.length;
console.log(average);

// -----------------
// โ 3 Solution:

const teams_name = Object.entries(football_game.odds) // [team_1, 1.33]

for (const [para_team, para_value] of teams_name) {
    // console.log(para_team, para_value);
    const team_str = para_team === "x" ? "draw" : `victory ${football_game[para_team]}`;
    console.log(`Odd of ${team_str}: ${para_value}`);
}

// -----------------
// โ 4 Solution:

const player_score_array = football_game.scorer.entries()
console.log(...player_score_array);

// football_game.player_who_scored = {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2,
// }

/* -------------------------------------------------------------------------- */

// ๐งก Working With Strings - Part 1
// ๐ If the object accessed or function called is undefined or null,...

// -----------------๐ฆ
const laptop_modal = "ROG Zephyrus G14";
const laptop_gpu = "RX 6800S";

// -----------------
// โ Accessing string letter:
console.log(laptop_modal[4]); // Z
console.log("RX 6800S"[4]); // 8 

// -----------------
// โ Total string letter:
console.log(laptop_gpu.length); // 8
console.log("ROG Zephyrus G14".length); // 16

// -----------------
// โ โจ(STRING - METHOD)

// ๐ indexOf() / LastIndexOf():
// ๐ Returns the index (position) of the (first / last) occurrence of a value in a string.
// ๐ Returns -1 if the value is not found.
// ๐ This method is case sensitive.
// TODO Syntax: STRING.indexOf("VALUES")
console.log("35A-142AB".indexOf("A")); // 2
console.log("35A-142AB".lastIndexOf("A")); // 7
console.log("ROG Zephyrus G14".indexOf("Zephyrus")); // 4

// ๐ slice():
// ๐ Extracts a part of a string and returns a new string
// ๐ This method does not change the original string.
// TODO Syntax: STRING.slice("START_INDEX, END_INDEX")
console.log("pisang goreng".slice(2)); // sang goreng
console.log("pisang goreng".slice(2, 9)); // sang go

// -----------------
// โ Example of using string method:

// ๐ Extract the first & second word only:
const my_name = "Arif Rashidi Rahman";
console.log(my_name.slice(0, my_name.lastIndexOf(" "))); // Arif Rashidi

// ๐ Extract the last word only:
const my_name_2 = "Arif Rashidi Rahman";
console.log(my_name_2.slice(my_name_2.lastIndexOf(" ") + 1)); // Rahman

// ๐ We can also specify a negative index number:
console.log("Samsung".slice(-4)); // sung
console.log("Samsung".slice(0, -4)); // Sam
console.log("Samsung".slice(1, -4)); // am

// ๐ Example uses in function:

const check_middle_seat = function(para_seat) {
    // Return last letter in string
    const check_last_letter = para_seat.slice(-1);
    // If the final letter is "B" or "E", you get middle seat
    if (check_last_letter === "B" || check_last_letter === "E") {
        console.log("You got the middle seat๐ฅฑ");
    }
    else {
        console.log("You got lucky because your seat is beside window๐ฏ");
    }
}
check_middle_seat("11B")
check_middle_seat("23E")
check_middle_seat("14C")

/* -------------------------------------------------------------------------- */

// ๐งก Working With Strings - Part 2

// -----------------
// โ โจ(STRING - METHOD)

// ๐ toLowerCase() / toUpperCase():
// ๐ Converts a string to lowercase / uppercase letters.
// ๐ This method does not change the original string.
// TODO Syntax: STRING.toLowerCase()
console.log("GAMING".toLowerCase()); // gaming
console.log("gaming".toUpperCase()); // GAMING

// ๐ trim() / trimStart() / trimStart():
// ๐ Removes whitespace from (both / start / end) sides of a string.
// ๐ This method does not change the original string.
// TODO Syntax: STRING.trim()
console.log(" Senawang ".trim());

// ๐ replace():
// ๐ Returns a new string with replaced first old value to new value.
// ๐ This method does not change the original string.
// ๐ This method is case sensitive.
// TODO Syntax: STRING.replace(OLD_VALUE, NEW_VALUE)
console.log("$50".replace("$", "RM")); // RM50
console.log("$50 and $100".replace("$", "RM")); // RM50 and $100
console.log("susu pisang".replace("pisang", "strawberi")); // susu strawberi

// ๐ replaceAll():
// ๐ Returns a new string with replaced all old value to new value.
// ๐ This method does not change the original string.
// ๐ This method is case sensitive.
// TODO Syntax: STRING.replaceAll(OLD_VALUE, NEW_VALUE)
console.log("$50 and $100".replace("$", "RM")); // RM50 and Rm100

// ๐ includes():
// ๐ Returns true if a string contains a specified string, otherwise it returns false.
// ๐ This method is case sensitive.
// TODO Syntax: STRING.includes("VALUE")
console.log("Maharaja Lawak".includes("Lawak")); // true
console.log("flower".includes("w")); // true
console.log("arifshidi01".includes("01")); // true

// ๐ startsWith() / endsWith():
// ๐ Returns true if a string (starts / end) with a specified string, otherwise it returns false.
// ๐ This method is case sensitive.
// TODO Syntax: STRING.startsWith("VALUE")
console.log("Arif Rashidi bin Abd Rahman".startsWith("Arif")); // true
console.log("Arif Rashidi bin Abd Rahman".endsWith("Rahman")); // true

// -----------------
// โ Example of using string method:

// ๐ Fix capitalization in name
const customer_name = "kAkaSHi";
    // fix name
const customer_fix_name_1 = customer_name.toLowerCase();
const customer_fix_name_2 = customer_fix_name_1[0].toUpperCase() + customer_fix_name_1.slice(1);
console.log(customer_fix_name_2); // Kakashi

// ๐ Fix capitalization in email
const log_in_email = " ArifRashidi01@gmail.com "
    // fix email
const email_name_fix = log_in_email.toLowerCase().trim(); // chaining method
console.log(email_name_fix);

// ๐ Real Life Scenarios example
const check_baggage = function(para_item) {
    // all string letter convert to lower case for we can easily compare it.
    const item_name_fix = para_item.toLowerCase();
    if (item_name_fix.includes("knife") || item_name_fix.includes("gun")) {
        const knife_or_gun = item_name_fix.includes("knife") ? "knife" : "gun";
        console.log(`You are NOT allowed on board because you have ${knife_or_gun} ๐ฎ๐ปโโ๏ธ`);
    }
    else {
        console.log("Welcome aboard ๐ซ๐จ๐ปโโ๏ธ");
    }
}
check_baggage("I have a laptop and a Knife")
check_baggage("I have a machine gun and a book")
check_baggage("I have a food and a fruit")
 
/* -------------------------------------------------------------------------- */

// ๐งก Working With Strings - Part 3

// -----------------
// โ โจ(STRING - METHOD)

// ๐ padStart() / padEnd():
// ๐ Pads the current string with another string (multiple times, if needed)...
// until the resulting string reaches the given length.
// ๐ This method does not change the original string.
// TODO Syntax: STRING.split(TARGET_LENGHT, "PAD_STRING")
console.log("Apple".padStart(10, "+")); // +++++Apple
console.log("Apple".padEnd(10, "+")); // Apple+++++
console.log("Apple".padStart(10, "+").padEnd(15, "+")); // +++++Apple+++++

// ๐ split():
// ๐ splits a string into an array of substrings and returns the new array.
// ๐ If (" ") is used as separator, the string is split between words.
// ๐ This method does not change the original string.
// TODO Syntax: STRING.split("VALUE")
console.log("10 + 100 + 1000 + money".split("+")); // ['10 ', ' 100 ', ' 1000 ', ' money']
console.log("Arif Rashidi".split(" ")); // ['Arif', 'Rashidi', 'bin', 'Abd', 'Rahman']

// ๐ repeat():
// ๐ Returns a string with a number of copies of a string.
// ๐ This method does not change the original string.
// TODO Syntax: STRING.repeat(COUNT)
console.log("Attention...".repeat(3)); // Attention...Attention...Attention...

// ๐ concat():
// ๐ Joins two or more strings and return a new string.
// ๐ This method does not change the original string.
// TODO Syntax: STRING.concat(STRING_2, STRING_3)
const text_1 = "sea";
const text_2 = "food";
console.log(text_1.concat(text_2)); // seafood

// -----------------
// โ โจ(ARRAY - METHOD)

// ๐ join():
// ๐ Joins all elements of an array into a string
// ๐ If (" ") is used as separator, the string is split between words.
// ๐ This method does not change the original array.
// TODO Syntax: ARRAY.join("SEPERATOR_VALUE")
const new_name = ["Mr.", "Arif", "Rashidi".toUpperCase()].join(" ");
console.log(new_name);

// -----------------
// โ Example of using string method:

// ๐ Using slice() with destructuring:
const [first_name, second_name] = "Amirul Ridhuan".split(" ");
console.log(first_name);
console.log(second_name);

// ๐ Fix name with fuction:
const capitalize_name = function(para_name) {
    const name_to_array = para_name.toLowerCase().split(" ");
    const fix_name_2 = [];

    for(const item of name_to_array) {
        const fix_name = item[0].toUpperCase() + item.slice(1);
        fix_name_2.push(fix_name);
    }
    console.log(fix_name_2.join(" "));

}
capitalize_name("arif rasHidi bIn abd rahMan")

// ๐ Hide credit card number
const hide_credit_card_num = function(para_num) {
    const str = String(para_num);
    const last_num = str.slice(-4);
    return last_num.padStart(str.length, "*")
}
const secret_credit_card = hide_credit_card_num(1012353211364);
console.log(secret_credit_card);

// ๐ Using repeat() to repeat string in function
const plane_in_line = function(para_num_plane) {
    console.log(`There are ${para_num_plane} planes in line ${"๐ซ".repeat(para_num_plane)}`);
}
plane_in_line(1);
plane_in_line(3);

/* -------------------------------------------------------------------------- */

// ๐งก 3# Coding Challenges

/*
    Write a program that receives a list of variable names written in underscore_case
    and convert them to camelCase.
    The input will come from a textarea inserted into the DOM (see code below to
    insert the elements), and conversion will happen when the button is pressed.
    Test data (pasted to textarea, including spaces):
        underscore_case
        first_name
        Some_Variable
            calculate_AGE
        delayed_departure

    Should produce this output (5 separate console.log outputs):
        underscoreCase โ
        firstName โโ
        someVariable โโโ
        calculateAge โโโโ
        delayedDeparture โโโโโ

*/

// -----------------
// โ Create text are & button in html:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector("button");

button.addEventListener("click", function() {
    const text = document.querySelector("textarea").value;
    const rows = text.split("\n");
    for (const [num, item] of rows.entries()) {
        const [first, second] = item.toLowerCase().trim().split("_");
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        const output_2 = `${output.padEnd(20, " ")}${"โ".repeat(num + 1)}`
        console.log(output_2);
    }
})

/* -------------------------------------------------------------------------- */

// ๐งก 4# Coding Challenges

const flights = 
`_Delayed_Departure;fao93766109;txL2133758440;11:25
+_Arrival;bru09433B4722;fa0093765109;11:45
+_Delayed_Arrival;he174392999B8;fao93766189;12:05
+_Departure;fao93766109;lis2323539B55;12:30`;

// ๐ด Delayed Departure from FAO to TXL (11h25)
// Arrival frow BRU to FAO (11h45)
// ๐ด Delayed Arrival from HEL to FAD (12h85)
// Departure frow FA0 to LIS (12h30)

// -----------------
// โ My own code:
const split_text = flights.split("\n");
for (let i = 0; i < split_text.length; i++) {
    // console.log(split_text[i]);
    const split_text_2 = split_text[i].split(";");
    // console.log(split_text_2);
    const fix_text_1 = split_text_2[0].replaceAll("_", " ").replace("+", "").trim();
    const fix_text_2 = split_text_2[1].slice(0, 3).toUpperCase();
    const fix_text_3 = split_text_2[2].slice(0, 3).toUpperCase();
    const fix_text_4 = split_text_2[3].replace(":", "h");
    if (fix_text_1.includes("Delayed")) {
        const fix_text_1_1 = `${"๐ด"} ${fix_text_1}`;
        console.log(`${fix_text_1_1} from ${fix_text_2} to ${fix_text_3} (${fix_text_4})`);
    }
    else {
        const fix_text_1_2 = fix_text_1.padStart(11, " ")
        console.log(`${fix_text_1_2} from ${fix_text_2} to ${fix_text_3} (${fix_text_4})`);
    }
}

// -----------------
// โ more efficient code:

// const get_code = str => str.slice(0, 3).toUpperCase();

// for (const item of flights.split("+")) {
//     const [type, from, to, time] = item.split(";");
//     const output = `${type.startsWith("_Delayed") ? "๐ด" : ""}${type.replaceAll("_", "")} ${get_code(from)} ${get_code(to)} (${time.replace(":", "h")})`;
//     console.log(output);
// }