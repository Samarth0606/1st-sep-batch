
// not a HOF
// function getString(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) == 'string'){
//             result.push(item);
//         }
//     }
//     return result
// }
// function getNumber(){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) == 'number'){
//             result.push(item);
//         }
//     }
//     return result
// }
// function getBoolean(){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) == 'boolean'){
//             result.push(item);
//         }
//     }
//     return result
// }

// let arr = [true , 10 , "sam" , 30 , "vohra" , false];
// console.log( getString(arr) );
// console.log( getNumber(arr) );
// console.log( getBoolean(arr) );

// ------------------------------------------
//CB
function getString(item){
   return typeof item === 'string'
}
function getNumber(item){
     return typeof item === 'number'
}
function getBoolean(item){
     return typeof item === 'boolean'
}
// HOF
function mainn(arr , fn){
    let result = [];
    for(let item of arr){
        if( fn(item) ){
            result.push(item)
        }
    }
    return result;
}

let arr = [true , 10 , "sam" , 30 , "vohra" , false];
console.log( mainn(arr , getString) );
console.log( mainn(arr , getNumber) );
console.log( mainn(arr , getBoolean) );


