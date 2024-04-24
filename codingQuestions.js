// STRINGS

// reverse a string 
function reverseString(str){
    return str.split("").reverse().join("");
}
const reversedString = reverseString('Hello world');
console.log('reversedString', reversedString);

// reverse a string without using built in methods
function reversedString(str) {
    let reversed = "";
    for(let i=str.lenght; i<=0; i--) {
        reversed+= str[i];
    }
    return reversed;
}