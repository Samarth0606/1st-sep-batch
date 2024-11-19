

// function Sam(){
//     this.isShirt = false;
//     this.isLower = true;
//     this.subject = "development";
//     this.run = function(){
//         console.log(`hi i will run after teaching ${this.subject}`);
//     }
// }


//throw it in the prototypes
function Sam(){
    this.isShirt = false;
    this.isLower = true;
    this.subject = "development";
    // this.run = function(){
    //     console.log(`hi i will run after teaching ${this.subject}`);
    // }
}
Sam.prototype.run = function(){
                        console.log(`hi i will run after teaching ${this.subject}`);
                    }

// ---------------------------------

class Sam{
    constructor(){
        this.isShirt = false;
        this.isLower = true;
        this.subject = "development";
    }
    run(){
        console.log(`hi i will run after teaching ${this.subject}`);
    }
}

let p1 = new Sam();
let p2 = new Sam();
let p3 = new Sam();
let p4 = new Sam();
let p5 = new Sam();

console.log(p1 , p2 ,p3 , p4 , p5);










