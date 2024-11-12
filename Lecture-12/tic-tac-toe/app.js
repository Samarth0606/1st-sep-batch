const cellElements = document.querySelectorAll('.cell');

// console.log(cellElements);

for(let cell of cellElements){
    cell.addEventListener('click' , handleClick , {once:true} )
}


function handleClick(){
    // mark the symbol
    // check for winner
    // check draw
    // swap the turn
    
}