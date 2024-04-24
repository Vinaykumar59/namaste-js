console.log('FIRST CLASS FUNCTIONS STARTS HERE')

// function statement aka function declaration
function a() {
    console.log('a called');
}

// function Expression
var b = function () {
    console.log('b called');
}

// Anonymous function( function without a name is called anonymous function)
// function() {

// }



// Named Function Expression

// A named function expression (NFE) is a type of JavaScript function expression where the function
//  being defined has a name. In JavaScript, function expressions are created by assigning a function
//  to a variable. When the function being assigned has a name, it's called a named function expression.
// Here's an example of a named function expression:
var multiply = function multiply(a, b) {
    return a * b;
  };
  


// Diffrenece between Parameters & Arguments?
// Arguments are the actual values passed to a function when it is called.
function add(a, b) {
  return a + b;
}

// Parameters are the placeholders listed in the function declaration.
 var result = add(5, 3);


//  First class functions =>  the ability to use functions as values is called as first class functions



// Arrow functions
// Arrow functions, introduced in ECMAScript 6 (ES6), are a concise way to write JavaScript functions.
//  They provide a shorter syntax compared to traditional function expressions 

// Traditional function expression
var add = function(a, b) {
    return a + b;
  };
  
  // Arrow function
  var add = (a, b) => a + b;

//   arrow function donot have this binding keyword(object) but they inherit it from its lexical environment
  