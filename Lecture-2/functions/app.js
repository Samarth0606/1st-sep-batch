
// fn defination
// function sam(){
//     console.log("hello from sam");
//     console.log("hello from rocket");
//     console.log("hello from light"); 
// }

// call fn
// sam()
// sam()
// sam()
// sam()

// ---------------

// paramterised functions
// function sum(f , g){ //parameter
//     return f+g;
// }

// let g = sum(4,5) //arguments
// console.log(g);

// console.log(sum(5,6));



// ---------------

// default paramterised functions

// function abc(a="Samarth" , b=" VOHRA"){ //default paramterised VALUE❌
//     console.log(a);
//     console.log(b);

    
//     let c = a+b;
//     return c //Nan
// }

// console.log(abc(10)); //THIS
// console.log(abc()); //THIS

// ---------------------

// let a = 10;

//first class fn or first class citizens
// let fn = function(){
//     console.log("i am fun");
// }
// fn()
// fn()



// --------------------


// function abc(a=10 , b){
//     console.log(a); //   console.log(b); //vohra
//     console.log(b); //   console.log(b); //vohra

    
//     let c = a+b; //100 typecasted to "100"
//     return c //Nan
// }
// console.log(abc(200));


// -----------------

// null //developer
// undefiend => JS engine take care of undef

// let email; //user has not filled the mailid
// let email2 = undefined; //user has not filled the mailid ❌
// let email3 = null; //user has not filled the mailid 
// console.log(email , email2 , email3);


function abc(a=10 , b){
    console.log(a); //   console.log(b); // 200
    console.log(b); //   console.log(b); = null typecaste to 0

    
    let c = a+b; //200
    return c //200
}
console.log(abc(200)); //undef -> js engine
console.log(abc(200 , null)); //-> null -> developer
