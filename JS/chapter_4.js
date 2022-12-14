
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- ๐ CHAPTER 4: DOM and Events ---");
/* -------------------------------------------------------------------------- */

// ๐งก: Main topic
// ๐: Notes
// โ: Subtopics
// ๐: Sub-subtopics
// ๐ฆ: Variables
// โจ: Category

/* -------------------------------------------------------------------------- */

// ๐งก DOM and DOM Manipulation

// ๐ DOM (Document object model):
// Structured representation of HTML documents. Allows JavaScript to access HTML...
// elements and style to manipulate them.
// ๐ Explain Like I'm 5 ๐ผ: So we can say that DOM is basically a connection point between...
// HTML documents and JavaScript code.

// ๐ DOM are not part of JavaScript, but it actually part of something called the...
// web API (Application Programming Interface.).
// So the web API are like libraries that browsers implement and that we can access from our JavaScript code.

/* -------------------------------------------------------------------------- */

// ๐งก HTML DOM DOCUMENT

// -----------------
// โ querySelector()
// ๐ The querySelector() method returns the first element that matches a CSS selector.
//TODO Syntax: document.querySelector(CSS selectors)

// -----------------
// โ querySelectorAll()
// ๐ The querySelectorAll() method returns all matches (not only the first) that matches a CSS selector.
//TODO Syntax: document.querySelectorAll(CSS selectors)

// -----------------
// โ getElementById()
// ๐ Returns an element with a specified value & returns null if the element does not exist.
// ๐ Is More restrictive than querySelector() because you can only retrieve elements by its DOM ID.
// ๐ GetElementById() is more faster in browser than querySelector()
// TODO Syntax: document.getElementById("SELECTOR");

/* -------------------------------------------------------------------------- */

// ๐งก HTML DOM ELEMENT

// -----------------
// โ addEventListener()
// ๐ attaches an event handler to an element.
// TODO Syntax: ELEMENT.addEventListener(EVENT, FUNCTION, USECAPTURE);
// ๐ event example: "click" / "mouseover" / "mouseout"
// ๐ function: The function will executed when the event occurs.

// โจ (HTML DOM EVENT):

    // ๐ "click" โจ(MOUSE EVENT)
    // ๐ Event occurs when the user clicks on an HTML element.
    // TODO Syntax: ELEMENT.addEventListener("click", FUNCTION)

    // ๐ "keydown" โจ(KEYBOARD EVENT)
    // ๐ Event occurs when the user is pressing a key (not fired continuously)
    // TODO Syntax: ELEMENT.addEventListener("keydown", FUNCTION)

    // ๐ key โจ(HTML DOM EVENT - METHOD)
    // ๐ Returns the input key that was pressed when a key event occurred
    // TODO Syntax: EVENT.key

// -----------------
// โ textContent
// ๐ Change(HTML content) from the chosen selector, and all its descendants.
// TODO Syntax: ELEMENT.textContent = VALUE;

// -----------------
// โ style
// ๐ Manipulating CSS style using Javascript:
// TODO Syntax: ELEMENT.style.CSS_PROPERTY = "VALUE";

// -----------------
// โ classlist โจ(DOM TOKEN LIST)
// ๐ Returns the CSS classnames of an element.
// TODO Syntax: ELEMENT.classlist.METHOD

// โจ (DOM TOKEN LIST - METHOD):

    // ๐ classList.remove() 
    // ๐ Removes one or more tokens from the list
    // TODO Syntax: ELEMENT.classlist.remove("SELECTOR");

    // ๐classList.contain()
    // ๐ Returns TRUE if a DOMTokenList contains a class, otherwise FALSE
    // TODO Syntax:  ELEMENT.classlist.contain("SELECTOR");

    // ๐ classList.toggle() 
    // ๐ Toggles between tokens in the list (like switch button)
    // TODO Syntax:  ELEMENT.classlist.toggle("SELECTOR");

/* -------------------------------------------------------------------------- */

// ๐งก OBJECT

// -----------------
// โ Math
// ๐ The JavaScript Math object allows you to perform mathematical tasks on numbers.
// TODO Syntax: Math.METHOD

// โจ (MATH - METHOD):

    // ๐ Math.random() 
    // ๐ Math.random() returns a random number between 0 and 1.
    // TODO Syntax: Math.random()

    // ๐ Math.trunc()
    // ๐ Returns the integer part of x:
    // TODO Syntax: Math.trunc(NUMBER)

/* -------------------------------------------------------------------------- */

// ๐งก OTHERS

// โ value
// ๐ Return a value to the chosen selector.
// TODO Syntax: ELEMENT.value


