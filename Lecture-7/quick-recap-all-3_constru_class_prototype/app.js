
// constructor

// function Samarth(name , color){
//     this.name = name;
//     this.color = color;
//     this.speak = function(){
//         return `greeting from ${this.name}`
//     }
// }

// Samarth.prototype.speak = function(){
//     return `greeting from ${this.name}`
// }

// let s1 = new Samarth("maverick" , "brown");
// let s2 = new Samarth("vohra" , "black");
// let s3 = new Samarth("vohra" , "black");
// let s4 = new Samarth("vohra" , "black");

// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);

// // -----------------------------------

// // classes


// class Samarth{
//     constructor(name , color){
//         this.name = name;
//         this.color = color;
//     }
//     speak(){
//         return `greeting from ${this.name}`
//     }
// }
// // inheritance
// class Rocket extends Samarth{}

// let s1 = new Rocket("maverick" , "brown");
// let s2 = new Samarth("vohra" , "black");

// console.log(s1);
// console.log(s2);


// -----------------------------------

// classes
// class Samarth{
//     constructor(name , color){
//         this.name = name;
//         this.color = color;
//     }
//     speak(){
//         return `greeting from ${this.name}`
//     }
// }

// class Rocket extends Samarth{
//     constructor(name , color , age){
//         super(name , color); //runs your parent constructor with arguments
//         // super(color , name); //you cant change the order
//         this.age = age;
//     }
// }

// let s1 = new Rocket("maverick" , "brown" , 200);
// let s2 = new Samarth("vohra" , "black");

// console.log(s1);
// console.log(s2);



// -----------------------------------

// classes
class Samarth{
    constructor(name , color){
        this.name = name;
        this.color = color;
    }
    speak(){
        return `greeting from ${this.name}`
    }
    greet(){
        return `hello from ${this.name}`
    }
}

class Rocket extends Samarth{
    constructor(name , color , age){
        super(name , color); //runs your parent constructor with arguments
        // super(color , name); //you cant change the order
        this.age = age;
    }
    speak(){
        return `goodbye from ${this.name}`
    }
}

let s1 = new Rocket("maverick" , "brown" , 200);
// let s2 = new Samarth("vohra" , "black");

// console.log(s1);
// console.log(s2);


// -----------------------------------

// prototypes


// let objjj = {
//     a:10,
//     b:"samarth vohra",
//     fn:function(){
//         console.log("heyy how you doing");
        
//     }
// }
// console.log(objjj); //obj -> Object.prototype

// console.log(s1); //obj -> Rocket.prototype



