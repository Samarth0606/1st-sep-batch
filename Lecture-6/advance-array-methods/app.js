// array
// let arr = [10,20,30,40,50,60];

// -------------------------------
// forEach() (not a loop, its a method)

// hof -> accepts cb -> and this cb fn runs for every element -> 2args (item, index) -> it doesnot returns anything
// let newArr = arr.forEach( function(item , index){
//     console.log(item + index); 
// } )

// console.log(arr);
// console.log(newArr);

// -------------------------------
// map()

//hof -> accepts cb -> and this cb fn runs for every element -> 2args (item, index) -> it returns me a new array
// in map() length of the new array is always same as that of old array
// let newArr = arr.map( function(item , index){
//     return item * index
// } )

// console.log(arr); // 
// console.log(newArr); // 


// -------------------------------
// filter()

//hof -> accepts cb -> and this cb fn runs for every element -> 2args (item, index) -> it returns me a new array
// in filter() length of the new array is not necessary same as that of old array (only returns truthy values)

// let arr = [10,20,30,40,50,60];

// let newarr = arr.filter( function(item , index){
//     if(item>35){ return true}
//     else{ return false}
// } )


// console.log(arr);
// console.log(newarr);


// -------------------------------
// find()


// let arr = [10,20,30,40,50,60];

// let findVal = 40;

// let returnedVal = arr.find( function(item , index){
//     return findVal === item;
// } )

// console.log(returnedVal);


// ---------------------------

// go to mdn and search reduce , every , sort , some
