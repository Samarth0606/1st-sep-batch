const cellElements = document.querySelectorAll('.cell');

// console.log(cellElements);

for(let cell of cellElements){
    cell.addEventListener('click' , handleClick , {once:true} )
}

let circle_turn = false; // x 

let winning_contribution = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8] 
]

function handleClick(e){
    // mark the symbol
    let clickedCell = e.target;
    let current_class = circle_turn ? "circle" : "x";
    clickedCell.classList.add(current_class)

    // check for winner
    if(checkWin(current_class)){
        document.querySelector('.final-winner').innerHTML = `Winner ${current_class}`;
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    // check draw
    else if(isDraw()){
         document.querySelector('.final-winner').innerHTML = 'Draw'
         document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    else{  
        // swap the turn
        circle_turn = !circle_turn;
    }
}


function checkWin(current_class){
    return winning_contribution.some((itemRow)=>{
        return itemRow.every((item)=>{
            return cellElements[item].classList.contains(current_class)
        })
    })
}

function isDraw(){
    // spread operator
    return [...cellElements].every((cell)=>{
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}


document.querySelector('button').onclick = restart;

function restart(){
    window.location.reload()
}

