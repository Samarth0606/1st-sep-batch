

let obj = {
    naam : "samarth vohra",
    age : 100,
    favColor : "black"
}

console.log(obj);
// we ar eable to change the objects
// Object.freeze(name of your object)
Object.freeze(obj)


obj.naam = "maverick";
obj.isMale = true;
delete obj.age;

console.log(obj);











