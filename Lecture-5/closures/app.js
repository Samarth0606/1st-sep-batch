
// HOF
// function outer(){
//     let a = 10;
//     let b = 20;
//     console.log("hey i am outer");
//     // CB FN
//     function inner(){
//         console.log(b);
//         console.log("i am inner");
        
//     }

//     inner();

// }


// outer();


// ---------------------

//closure
// HOF
// function outer(){
//     let a = 10;
//     let b = 20;
//     console.log("hey i am outer");
//     // CB FN
//     function inner(){
//         console.log(b);
//         console.log("i am inner");
        
//     }
//     return inner;

// }

// closure {b = 20}
// let returnedValue = function inner(){
    //     console.log(b);
    //     console.log("i am inner");
    
    // }

// let returnedValue = outer();
// returnedValue();



// ------------------------------------------

var a = 10;   // global
let b = 20;   // script
console.log(a); // 10
function sam(){
    console.log(b);  // 20  (lexical scope)
    console.log(a); // undefined  (hoisting)
    var a = 200;  // functional
    return function innerSam(){
        console.log(a); //lexical dependant env     
    }
}

let returnVal = sam(); //fn + 200(a)

returnVal() // 200















// only for DEV

// function createFunctions() {
//     let functions = [];
//     for (var i = 0; i < 3; i++) {
//       functions.push(function() {
//         console.log(i);
//       });
//     }
//     return functions;
//   }
  
//   const funcs = createFunctions();
  
//   funcs[0](); 
//   funcs[1](); 
//   funcs[2](); 

//   -----------

// function createFunctions() {
// let functions = [];
// for (let i = 0; i < 3; i++) {
//     functions.push(function() {
//     console.log(i);
//     });
// }
// return functions;
// }

// const funcs = createFunctions();

// funcs[0](); 
// funcs[1](); 
// funcs[2](); 
