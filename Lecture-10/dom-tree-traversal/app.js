let sectionEl = document.querySelector('section');


// 1 level down
// console.log( sectionEl.children );
// console.log( sectionEl.children[0].children[0].children[0] );
// sectionEl.children[0].children[0].children[0].style.fontSize = "100px"
// sectionEl.children[0].children[0].children[0].style.color = "blue"


// 1 level up
// console.log( sectionEl.parentElement );
// console.log( sectionEl.parentElement.style.backgroundColor = "brown" );

// 1 level right
// console.log( sectionEl.nextElementSibling );
// sectionEl.nextElementSibling.style.border = "2px solid black"

// 1 level right
console.log( sectionEl.nextElementSibling.children[0].children[1].nextElementSibling.style.color="red"  );
// 1 level left
console.log( sectionEl.nextElementSibling.children[0].children[1].previousElementSibling.style.color="green" );
