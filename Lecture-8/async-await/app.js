

// function sam(){

// }

// console.log( sam() ); //undefined

// -------------------------
//constructor fn
// function sam(){

// }

// console.log( new sam() ); // {}

// -------------------------

// async function sam(){


// }

// console.log( sam() ); // promise


// -------------------------

// async function sam(){

//     return 10;
// }

// console.log( sam() ); // promise but with resolved value of 10


// ----------------


// async function sam(){
//     console.log(10);
//     console.log(20);
//     console.log(30);
// }

// sam();

// console.log(40);
// console.log(50);


// ----------------


async function sam(){
    console.log(10);
    // call an api (we will do this in the next)
    let resp = await fetch('https://api.tvmaze.com/search/shows?q=girls'); //webapi = browser - 10sec
    // let data = await resp.json(); //1s
    console.log(resp);
    console.log(30);
}

sam();

console.log(40);
console.log(50);



// --------------------------- HOMEWORK -----------------------------

// ques 1. INSTAGRAM WITH ASYNC AWAIT

// ------------------------------------------

// ques 2.
// console.log("start");

// setTimeout(function(){
//     console.log("run after 4 seconds");
// } , 4000)

// setTimeout(function(){
//     console.log("run after 2 seconds");
// } , 2000)

// console.log("end");

// -------------------------------------------

// ques 3.
// console.log("start");

// setTimeout(function(){
//     console.log("run after 0 seconds");
// } , 0)

// console.log("end");





