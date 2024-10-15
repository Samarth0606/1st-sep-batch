

// var a = 10;
// let b = 20;
// console.log(a);
// console.log(b);


// function samarth(){
//     var c = 100;
//     const d = 200;
//     console.log(c);
//     console.log(d);
    
// }
// samarth();

// ----------------------

// interpreted
// hoisting 
// console.log(a); //undef
// console.log(b); //error
// var a = 10;  //yes -> undef.
// let b = 20;  //yes -> error


// samarth();
// function samarth(){
//     var c = 100;
//     const d = 200;
//     console.log(c);
//     console.log(d);
// }

//entire output?

// -------------------------

// var a = 10;      // GLOBAL
// console.log(a);  //10

// function sam(){
//     var a = 200; // FUNCTIONAL
//     let b = 300; // BLOCK
//     console.log(a); //200
//     console.log(b); //300
// }
// console.log(a);  //10
// // console.log(b);  //error

// sam()


// -------------------------

// var a = 10;     // GLOBAL
// console.log(a);

// if(true){
//     var a = 200; // GLOBAL
//     let b = 300  // BLOCK
// }

// console.log(a);
// console.log(b);



// // -------------------------

// var a = 10;     // global => a = 200
// console.log(a); // 10 

// if(true){
//     var a = 200; // global //redeclared 
//     let b = 300; // block
// }
// function sam(){
//     var a = 1000;   // functional
//     let b = 2000;   // block
//     const c = 3000; // block
//     console.log(a,b,c);
// }
// console.log(a);    //200
// // console.log(b); // err
// // console.log(c);    //err
// sam();



// -------------------------

var a = 10;     // global => a = 200
console.log(a); // 10 

if(true){
    var a = 200; // global //redeclared 
    let b = 300; // block
}
function sam(){
    let b = 2000;   // block
    const c = 3000; // block
    console.log(a,b,c);
}
console.log(a);    //200
// console.log(b); // err
// console.log(c);    //err
sam();




