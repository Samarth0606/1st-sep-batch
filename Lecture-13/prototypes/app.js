
// let obj = {
//     a:10,
//     fn: function(){
//         console.log("i am don");
//     }
// }

// console.log( obj.a );    // 10
// console.log( obj.fn() ); // i am don
// // console.log( obj.sam() ); // error
// console.log( obj.toString() ); //


// console.log( obj.__proto__ === Object.prototype  );
// console.log( obj.__proto__.__proto__ === null  );



let arr = [10,20,30]
console.log( arr.__proto__ === Array.prototype );
console.log( arr.__proto__.__proto__ === Object.prototype );
console.log( arr.__proto__.__proto__.__proto__ === null );
