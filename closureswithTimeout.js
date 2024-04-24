// settimeout with closures
// print 1,2,3,4,5 in console after every second

// here everything prints  6 , six times at the same time
function printTime() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

// here everything prints as 6 , but it appears after every second
function printTimewithseconds() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log('values using var',i);
    }, i * 1000);
  }
}

// here it prints correctly ,and value consoles  appears after every second
// here the difference is let is used in place of var , let is block scoped , and for every for loop a new reference is created for i
// so in let  for settimeout every time a new value is sent ; with var , since it is global scope , value is updated in global scope and for loop is run even before settimeout is executed
function printTimewithsecondsinterval() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log('values using let',i);
    }, i * 1000);
  }
}

//  How to achieve the same above functionality without using let??
function printTimewithsecondsintervalclosure() {
  for (var i = 0; i <= 5; i++) {
    function closures(i) {
      setTimeout(() => {
        console.log('closures values', i);
      }, i * 1000);
    };
    closures(i);
  }
}

printTime();
printTimewithseconds();
printTimewithsecondsinterval();
printTimewithsecondsintervalclosure();

// closures other examples
function outer(b) {
    function inner(c) {
        console.log(a,b,c);
    }
    let a = 10;
    return inner;
}
// the below line is invoking the outer function , and extra parenthesis invokes the inner function which is returned
outer('inside closures')('invoking function');


// closure examples for encapsulation
function counter() {
  let  count = 0;
  function increment() {
    count++;
    console.log('count', count); 
  }
  return increment;
}
var counter1 = counter();
counter1();
counter1();

// building the same for increment and decrement using constructor function
function Counter() {
    var count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}
var increment = new Counter();
increment.incrementCounter();
increment.incrementCounter();
increment.decrementCounter();
increment.decrementCounter();
increment.decrementCounter();