

// let room = {
//     // properties => key : value
//     light: "ringlight",
//     water: "water purifier",
//     stand: "camera stand",
//     device: "laptop",
//     //  methods v/s functions
//     // greeting: function greet(){
//     greeting: function(){ // this is a method (fn)
//         console.log("hello from samarth");
//         // return undefined; //js engine
//     }
// }

// // console.log(room["stand"]);
// console.log(room.stand);
// console.log(room.greeting);   // defination
// room.greeting();             // output
// room.greet();               // ❌ output
// // console.log(undefined); // output


// ----------------------

let a = "samarth vohra";
let b = "web lead";
let c = "internshala";

// output: my name is samarth vohra i am a web lead at internshala

// concatenation
// let d = "my name is " + a + "i am a " + b + "at " + c;
// console.log(d);


// string template literals
// let d = `my name is ${a} i am a ${b} at ${c}`
// console.log(d);




// ----------------------
let room = {
    light: "ringlight",
    water: "water purifier",
    stand: "camera stand",
    device: "laptop",
    greeting: function(){
        // console.log(" light is coming from ringlight");
        // console.log(`light is coming from ${room.light}`); //backticks/string template literals
        console.log(`light is coming from ${this.light}`); //backticks/string template literals
    }
}


// this == special keyword => points to the object of the method inside which we are using it(this)



room.greeting()









