
// function sam(){

// }
// console.log( sam() ); //undefined

// ---------------------------
// // constructor fn -> return/create objects
// function sam(){

// }
// console.log( new sam() ); //empty obj


// ---------------------------
// conventions are not compulsion
// constructor fn -> return/create objects -> convention to start with Capital letter
// function sam(){

// }
// function Sam2(){

// }

// console.log( sam() ); 
// console.log( new Sam2() ); 


// --------------------------
//THIS KEYWORD BASIC
//disclaimer -> (i am teaching you wrong this right now but its important)
// this points to the object , of the method, inside which we are using this

// let obj  = {
//     a: 300,
//     naam:"samarth",
//     fn: function(){
//         // console.log(`hi from samarth`);
//         // console.log(`hi from ${obj.naam}`);
//         console.log(`hi from ${this.naam}`);
//     }
// }

// obj.fn()




// -------------------------

// let obj = {
//     a:10,
//     b:20
// }

// // constructor fns
// function Sam2(namee , agee){
//     this.naam = namee;
//     this.umar = agee;
// }

// let p1 = new Sam2("maverick" , 2) //create objects(p1)
// let p2 = new Sam2("samarth" , 11) //create objects(p2)

// console.log(p1);
// console.log(p2);

// -----------------------------

// // constructor fns
// function Sam2(namee , agee){
//     this.naam = namee;
//     this.umar = agee;
//     this.greet = function(){
//         console.log(`hello from ${this.naam}`);  
//     }
// }

// let p1 = new Sam2("maverick" , 2) //create objects(p1)
// let p2 = new Sam2("samarth" , 11) //create objects(p2)

// // console.log(p1);
// p1.greet()
// // console.log(p2);
// p2.greet()









