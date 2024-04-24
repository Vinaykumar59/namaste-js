var x = 7;
var a = 1;
function getName() {
    console.log('function entered');
    console.log('a', a);
    // console.log(z);// undefined
    console.log("namaste javascript");
    // var z;
    let localvar = 'local variable';
    local();
    function local() {
        console.log('local var inside',localvar);
        console.log('x',x);
    }
    console.log('local var outside',localvar);

} 
getName();
console.log(x); //7
console.log(getName); //entire function
console.log(y);//undefined
 y = 8;
 var y;
//  console.log('z1',z);//reference error: not defined


