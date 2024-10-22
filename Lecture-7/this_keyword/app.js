// 5 types -> 
// 1. direct calling         => window always
// 2. method/object calling  => object inside which the method is avaialble
// 3. constructor calling    => newly created object
// 4. indirect calling       => 
// 5. arrow function calling => this keyword depends on the parents this keyword

// ------------------------
// how is this keyword being called upon
// ------------------------
// 1. direct calling

// function samarth(){
//     console.log(this); 
// }
// samarth(); //direct calling -> window

// ------------------------
// 2. method/object calling

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); 
//     }
// }
// obj.fn() //method calling  -> obj

// ------------------------

// eg:
// let obj ={
//     a: 100,
//     fn: function(){
//         console.log(this , "1"); // obj
        
//         let sam = function(){
//             console.log(this , "2"); // window
//         }
//         sam();
//     }
// }
// obj.fn();

// let obj ={
//     a: 200,
//     fn: function(){
//         let abc = function(){
//             console.log(this , "1"); // window
//         }
//         abc();
//         console.log(this , "2"); // window
//     }
// }

// // obj.fn(); //object
// let ans = obj.fn;
// ans();


// ------------------------
// 3. constructor calling -> newly created object

// function Sam(){
//     this.naam = "samarth";
//     this.age = 22;
// }
// let s1 = new Sam()
// let s2 = new Sam()

// ------------------------
// 5. arrow functions calling

// let cube = a => a*a*a;
// console.log( cube(8) );

//eg 1
// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //obj
//     }
// }

// obj.fn();


//eg 2
// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this); //window
//     }
// }

// obj.fn();

// eg 3:
// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // obj
//         let ans = function(){
//             console.log(this);  // window
//             let ans2 = ()=>{
//                 console.log(this); // window
//             }
//             ans2();
//         }
//         ans()
//     }
// }

// obj.fn();


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // obj
//         let ans = ()=>{
//             console.log(this);  // obj
//         }
//         ans()
//     }
// }

// obj.fn();

// just eg:
// let ans = ()=>{
//     console.log(this);
    
// }
// ans();

// ------------------------

// 4. indirect calling -> call , apply , bind
// all these 3 are used to change the reference of this keyword

// let obj2 = {
//     a: 50
// }

// let obj1 = {
//     a: 10,
//     fn: function(x , y , z){
//         console.log(this.a , x , y , z); //obj1.a => 10
//     }
// }


// obj2.fn(); //error
// obj1.fn();  //method calling

// obj1.fn.call(obj2 , 1 , 2 , 3) //new ref (changing the reference)
// obj1.fn.apply(obj2 ,[1 , 2 , 3]) //new ref (changing the reference)

// call and apply -> change the reference of this and execute the fn then and there

// --------

// bind -> change the reference of this and creates a copy of that fn

// let obj2 = {
//     a: 50
// }

// // let obj3 = 100;

// let obj1 = {
//     a: 10,
//     fn: function(x , y , z){
//         console.log(this.a , x , y , z); //obj1.a => 10
//     }
// }

// let newfn = obj1.fn.bind(obj2 , 1 , 2 , 3); //accepts arguments like `call`
// newfn()

// let newfn2 = obj1.fn.bind(obj3); //accepts arguments like `call`
// newfn2()

