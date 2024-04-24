
var x =10;
function add(){
console.log(x); //20                                       
var x=20;
}
add();
                                     
var x=10;
{
console.log(x); //10
var x=20;
}

let x=20;
{
console.log(x); //20 
let x=30;
}

console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false
console.log(10 == [10]); //true
console.log(10 == [[[[[[[10]]]]]]]); //true
console.log(10 === [10]); //false                                                                                                       
console.log(0.1 + 0.2); // 0.30000000004
console.log(0.1 + 0.2 == 0.3) //false
console.log(10 + "10"); // 1010
console.log(10 - "10"); //0
console.log("10" - 10) //0
console.log([1, 2] + [3, 4]); //[1,2,3,4] 1,2 + 3,4 ==> 1,23,4
console.log(NaN === NaN); // false ,
console.log(typeof(NaN)); number

(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})(); // 1,4,3,2

var z = 1, y = z = typeof(y);
console.log(typeof(y));// string
var x = 1;
console.log(typeof(x)); //undefined
console.log(y); //var

for (let i = 0; i < 5; i++) {
setTimeout(function() { console.log(i); }, i * 1000 );
} //1, 2, 3, 4

