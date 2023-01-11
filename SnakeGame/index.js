let inputDir = {x:0 ,y:0};



const message = document.querySelector('.winning-message');
const restartButton = document.getElementById('startButton');
const winningMessage = document.querySelector('.text-winning');

const foodSound= new Audio('music/food.mp3');
const gameOverSound= new Audio('music/gameover.mp3');
const moveSound= new Audio('music/move.mp3');
const bgSound = new Audio ('music/music.mp3');
let speed = 6 ;
let hiscoreval;

let score = 0 ;
let lastPaintTime = 0 ;
let snakeArr = [

    {x:13 ,y:15 }
]

food = {x:6 , y:7};




function main(cTime){

    

window.requestAnimationFrame(main);
if((cTime - lastPaintTime)/1000 < 1/speed){
    return ;
}
lastPaintTime = cTime ; 
gameEngine();
}


function isCollide(snake){
    for(let i = 1 ; i< snakeArr.length ; i++){
        if(snake[i].x === snake[0] .x && snake[i].y === snake[0] .y){
            return true ; 
        }
    }
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0  ){
            return true ; 
        }
    
}



function gameEngine(){

if(isCollide(snakeArr)){
    
    gameOverSound.play();
    bgSound.pause();
    inputDir = {x:0 ,y:0};
    message.classList.add('show');
    winningMessage.innerText = " Game Over !";

    snakeArr=[{x:13 ,y:15 }];
    restartButton.addEventListener("click" , function(){
        message.classList.remove('show');
    })
    score = 0;
   
    scoreBox.innerHTML = "Score : " + score;
    
}    


if (snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    foodSound.play();
    score += 1 ;
    if(score>hiscoreval){
        hiscoreval = score;

        localStorage.setItem("hiscore" , JSON.stringify(hiscoreval));
        HiScoreBox.innerHTML = "High Score : " +  hiscoreval ;
    
    }
    scoreBox.innerHTML = "Score :" + score ;
    snakeArr.unshift({x : snakeArr[0].x + inputDir.x ,y : snakeArr[0].y + inputDir.y })
    let a = 2 ;
    let b = 16 ;
    food = {x: Math.round(a+(b-a)*Math.random()) , y: Math.round(a+(b-a)*Math.random())}



}


 for (let i  = snakeArr.length-2 ; i >=0 ; i--){

    snakeArr[i+1] = {...snakeArr[i] } ;

}

snakeArr[0].x += inputDir.x ;
snakeArr[0].y += inputDir.y ;





board.innerHTML = " ";
snakeArr.forEach((e,index)=>{
snakeElem = document.createElement('div');
snakeElem.style.gridRowStart = e.y ; 
snakeElem.style.gridColumnStart = e.x ; 
if(index === 0){
    snakeElem.classList.add('head');
}

else{
    snakeElem.classList.add('snake');
}


board.appendChild(snakeElem);

})
foodElem = document.createElement('div');
foodElem.style.gridRowStart = food.y ; 
foodElem.style.gridColumnStart = food.x ; 
foodElem.classList.add('food');

board.appendChild(foodElem);

}





let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore" , JSON.stringify(hiscoreval));
}

else{

    hiscoreval = JSON.parse(localStorage.getItem(hiscore));
    HiScoreBox.innerHTML = "High Score : " +  hiscore ;
}

window.requestAnimationFrame(main);

window.addEventListener('keydown' , e=>{
    inputDir = {x:0 , y:1}
    bgSound.play();
    moveSound.play();
    switch(e.key){
        case "ArrowUp": 
        console.log('ArrowUp')
        inputDir.x=0;
        inputDir.y=-1;
        break ;
        
        case "ArrowDown": 
        console.log('ArrowDown')
        inputDir.x=0;
        inputDir.y=1;
        break ;

        case "ArrowLeft": 
        console.log('ArrowLeft')
        inputDir.x=-1;
        inputDir.y=0;
        break ;

        case "ArrowRight": 
        console.log('ArrowRight')
        inputDir.x=1;
        inputDir.y=0;
        break ;


        default:
            break ; 
    }
});

