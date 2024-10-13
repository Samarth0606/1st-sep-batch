

// hoisting
// 1. general hoisting   => var -> undefined
// 2 dead temporal zone  =>

// console.log(a);
// sam();

// var a = 10;
// function sam(){
//     console.log("hello sam"); 
// }


// ------------------


// hoisting
// 1. general hoisting   => 
// 2 dead temporal zone  => let and const -> error

// console.log(a); //error
// console.log(b); //error
sam();

let a = 10;
const b = 10;
function sam(){
    console.log("hello sam"); 
}
