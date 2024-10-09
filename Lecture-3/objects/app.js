//objects are colelction of properties -> key:value pair, 
// in which the order ois not preserved

let arr = [10,20,30,40,50];
console.log(arr[2]); //array way of accessing
console.log(arr[4]); //array way of accessing


let person = {
    // properties => key : value (pair)
    namee: "samarth vohra" ,
    age: 90 ,
    favColor: "Black",
    isMale: true
}


console.log(person);
// console.log(person[namee]); // ❌ cant do it this way
// console.log(person[favColor]); // ❌ cant do it this way

// way - 1
//how are key stored behind the scenes ?
console.log(person["namee"]); // ✅ right way
console.log(person["favColor"]); // ✅ right way
console.log(person["age"]); // ✅ right way
console.log(person["isMale"]); // ✅ right way

// way - 2 (dot notation)
console.log(person.age);
console.log(person.isMale);
console.log(person.namee);














