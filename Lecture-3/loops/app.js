// 5 loops  (forEach si not a loop its a method)
// for  , do while , while , for in , for of

// for 

// for(let item=0;i<10;i=i+1){
// for(let i=0; i<10; i++){
//     console.log(i);
// }

// -----------------------------------

// while
// let item = 0;

//0<0 // no 
//0<1 // yes  1<1 //no
// while(item<1){
//     console.log(item); // 0
//     item++; //1
// }

// -----------------------------------

// let item = 1000;
// let item = 0;
// do{
//     console.log(item);  1
//     item++; // 1 2
// }
// while(item<0) //1<2 //yes   2<2 //no


//minimum times the loop will run : 
// for         => 0
// while       => 0
// do while    => 1



// --------------------------------------------------


// for-in vs for-of

// important
// Array  -> iterable items     -> for-of
// object -> non-iterable items -> for-in

let arrr = [10,20,30,40,50];
let obj = {
    a:10,
    b:20,
    c:30,
    itm:"samarth"
}

// array (for-of)
// for(let item of arrr){
//     console.log(item);
// }


// objects (for-in)
for(let itm in obj){
    console.log(itm); 
    // console.log(obj.itm); // ❌  directly access
    // console.log(obj["itm"]); // ❌ directly access
    console.log(obj[itm]); // ✅
}










