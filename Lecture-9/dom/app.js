// selection
// 1.getElementsByTagName()

// let allH1 = document.getElementsByTagName('h1');
// console.log( allH1[0].style.color = "red" );
// console.log( allH1[1].style.backgroundColor = "yellow" );

// ---------

// 2.getElementById()

// let IdEl = document.getElementById('sam');
// console.log( IdEl.style.fontSize = "100px" );
// console.log( IdEl.style.color = "blue" );
// console.log( IdEl.style.backgroundColor = "grey" );


// ---------

// 3.getElementsByClassName()

let classEl = document.getElementsByClassName('vohra');
// console.log(classEl[0].style.color = "red");
// console.log(classEl[1].style.color = "red");
// console.log(classEl[2].style.color = "red");

// for-of loop

// WET (WRITE EVERYTHING TWICE) ❌
// for(let item of classEl){
//     item.style.color = "red";
//     item.style.backgroundColor = "green";
// }


// DRY (DONOT REPEAT YOURSELF) ✅
for(let item of classEl){
    item.style.cssText = `
        color:red;
        background-color : green;
        font-size:100px
    `
}


// HW
// try querySelector / querySelectorAll (next classs)