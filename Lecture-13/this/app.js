
// how is `this` being called upon

// function sam(){
//     console.log(this); // window
// }

// sam(); //direct calling

// ------

// let obj = {
//     a:10,
//     fn: function(){
//         console.log(this); //obj
//     }
// }

// obj.fn(); //method calling


// let obj = {
//     a:10,
//     obj2:{
//         a: 20,
//         fn: function(){
//             console.log(this.a);  //obj
//         }
//     } 
// }

// // obj.fn(); //method calling
// obj.obj2.fn(); //method calling

// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); // 1. obj
//         let sam = function(){
//             console.log(this); // 2. window
//         }
//         sam();
//     }
// }

// obj.fn();

// let out = obj.fn;
// out();

// ---------

// function Sam(){
//     this.naam= "samarth";
//     this.age= 10;
// }
// let p1 = new Sam(); //newly created object
// let p2 = new Sam(); //newly created object

// // ---------


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this); //1. obj
//         let sammy = ()=>{
//             console.log(this); //2. obj
//         }
//         sammy();
//     }
// }

// // obj.fn(); //method calling

// let out = obj.fn; //method calling
// out()



// ---------

// call apply bind => change the reference of this keyword

let obj1 = {
    a: 10
}

let obj2 = {
    a: 50
}
let obj4 = {
    a: "samarth"
};

let obj3 = {
    a: 600,
    fn:function(x , y){
        console.log(this.a , x , y);   
    }
}

obj3.fn(); // 600
// they both execute the fn
obj3.fn.call(obj1 , 5 , 6); // 10
obj3.fn.apply(obj2 , [5 , 6]); // 50

let copyFn = obj3.fn.bind(obj4 , "lol" , "bro"); // 50
console.log(copyFn);
copyFn();
