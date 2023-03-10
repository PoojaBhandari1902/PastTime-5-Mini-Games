


const xClass = 'x' ;
const circleClass = 'circle';
const winningCombinations =[
    [0,1,2], [3,4,5,], [6,7,8],
    [0,3,6] , [1,4,7] ,[2,5,8],
    [0,4,8] ,[2,4,6]

]
const cellElement = document.querySelectorAll('.cell');
const board = document.querySelector('#board');
const message = document.querySelector('.winning-message');
const restartButton = document.getElementById('startButton');
const winningMessage = document.querySelector('.text-winning');
let circleTurn;
startGame();


restartButton.addEventListener("click" , startGame)


function startGame(){
    
    circleTurn = false ;
cellElement.forEach(cell => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    cell.removeEventListener("click" , handleClick);
    cell.addEventListener('click' , handleClick ,{ once:true })

})

setHover() ;

message.classList.remove('show');
}




function handleClick(e){
    
    console.log("clciked");
    const cell  = e.target;
    const currentClass = circleTurn ? circleClass : xClass ;
    placeMark (cell ,currentClass);
    if(checkWin(currentClass)){

        endGame(false);
    }

    else if(isDraw()) {
        endGame(true);
    }
    else{
        swapTurns();
        setHover();
    }
 
}


function endGame(draw){

    if(draw){
        winningMessage.innerText = "Draw !"
    }
    else{
         if(circleTurn){
            winningMessage.innerText = "O Wins !"
         }
         else{
            winningMessage.innerText = "X Wins !"
         }
         }
         message.classList.add('show');
    }

    function isDraw(){
        return [...cellElement].every(cell =>{
            return cell.classList.contains(xClass) || cell.classList.contains(circleClass);
        })
    }
    




function placeMark(cell , currentClass){
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;

}

function setHover(){
    board.classList.remove(xClass);
    board.classList.remove(circleClass);
    if(circleTurn){
        board.classList.add(circleClass)
    }
    else{
        board.classList.add(xClass);
    }


}

function checkWin(currentClass){
    return winningCombinations.some(combinations => {
        return combinations.every(index => {
            return cellElement[index].classList.contains(currentClass);
        })

    })
}