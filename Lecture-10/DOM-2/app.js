
// selection
// querySelector() -> tag , class , id

let element1 = document.querySelector('h1')
let element2 = document.querySelector('.sam')
let element3 = document.querySelector('#vohra')

// manipulation

// WET
// element1.style.color = "red";
// element1.style.backgroundColor = "yellow";
// element1.style.fontSize = "100px";

// element2.style.color = "red";
// element2.style.backgroundColor = "yellow";

// -------------------------------------

// DRY -> (kabab case)
// element1.style.cssText = `
//     color:red;
//     background-color:yellow;
//     font-size:100px;
// `
