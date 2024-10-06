
// let a = 10;
// let b = true;
// let c = "samarth";
// let d = null; //remember important
// let e = undefined; 
// let f = sai; ❌


// console.log(typeof(a)); //number
// console.log(typeof(b)); //boolean
// console.log(typeof(c)); //string

// console.log(typeof(d)); //null  string undefined => obj
// console.log(typeof(e)); //undefined 
// console.log(typeof(f)); //undefined 


// -------------------

// operators
// logical , relational , equality

// let a = 10;
// let b = 20;

// let out = a+b; // 30
// let out = a-b; // -10
// let out2 = b-a; // 10

// let out3 = a*b; // 200
// let out4 = a/b; // 10/20 = 0.5

// let out5 = a%b; //  remainder => 10
// let out6 = a**b; // 10^20 (pow)
// console.log(out , out2 , out3 , out4 , out5 , out6);

// let t = 4;
// let h = 2;
// console.log(t**h);


// ------------------------

// concatenation -> strings (+) almost equal to joining

// let a = "sam";
// let c = " ";
// let b = "vohra";

 //"sam"+" "+"vohra" => sam vohra

// let d = a+c+b;

// let e = a-c-b; 
// console.log(e); //NaN (important)

// console.log(typeof(e)); //number  (important)
// console.log(typeof(+Infinity)); //number
// console.log(typeof(-Infinity)); //number


// -------------------------

// let a = 20;
// let b = 20;
// console.log(a<b); //true
// console.log(a>b); //false
// console.log(a>=b); //false/true
// console.log(a<=b); //false/true

// ------------------------

// equality operator -> checks the equality

// let a = 10; //number
// let b = "10"; //string

// console.log(a == b); //general equality
// console.log(10 == "10"); //true

// console.log(a === b); //strict equality
// console.log(10 === "10"); //false
// console.log(10 === 10); //true
// console.log(10 === 11); //false

// ------------------------------

// if , else , else if

// block (technical name) === swarg ka darwaza
// if(true){
//     console.log("welcome to swarg");

// }else{ //nark ka darwaza
//     console.log("welcome to nark");
// }

// --------------

// if(false){
//     console.log("welcome to swarg");

// }else{ //nark ka darwaza
//     console.log("welcome to nark");
// }

// -------------

// situation : club party (bouncers) 
// => ID 18less= not allowed , 18+ 25- // no drink , 25+ drink as well


// let age = 19;

// if(age>=25){
//     console.log("drink what u want");
// }else if(age>=18){
//     console.log("just enter dont drink");
// }else{
//     console.log("not allowed to answer");
// }


// -----------------------------------

// let attendance = 73;
// let marks = 30;
// case 1 (&&)
// 75 above + marks 40 above
// if(attendance>=75 && marks>=40){
//     console.log("pappu paas"); 
// }else{
//     console.log("pappu fail");
// }

// case 2 (||)
// 75 attendance above || marks 40 above

// if(attendance>=75 || marks>=40){
//     console.log("pappu paas");
// }else[
//     console.log("pappu fail")
// ]

// case 3(!) = not operator
// console.log(true);
// console.log(!true);

// -------------------------
// As soon as the result of the final output is done then the code stops then and there
// short-cicuiting

// let attendance = 70;
// let marks = 50;

// // cllg -> attendance>75 + marks 40

// if(marks>=40 || attendance>=75){
//     console.log("paas");  
// }else{
//     console.log("fail");
// }



