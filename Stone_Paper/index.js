const computer = document.querySelector(".computer img");
const player =  document.querySelector(".player img");
const machinepoints = document.querySelector(".machinepoint");
const playerpoints = document.querySelector(".playerpoint");
const options = document.querySelectorAll(".options button");
const message = document.querySelector('.winning-message');
const restartButton = document.getElementById('startButton');
const winningMessage = document.querySelector('.text-winning');
let cpoint ;
let ppoint ;



options.forEach(options => {
    
    
    options.addEventListener("click" , function(){

       
        
        computer.classList.add("shakemachine");
        player.classList.add("shakeplayer");


        
        setTimeout( function(){
           
            computer.classList.remove("shakemachine");
            player.classList.remove("shakeplayer");
            

            const choice = ['stone' ,'paper','scissors'];
            let random = Math.floor(Math.random()*3);
            let computechoice = choice[random];
            computer.src = "images/"+computechoice+"Computer.png";
            player.src = "images/"+options.innerHTML+"Player.png";


            cpoint = parseInt(machinepoints.innerHTML);
            ppoint = parseInt(playerpoints.innerHTML);

            if(cpoint === 5 || ppoint === 5){
                message.classList.add('show');
                if(cpoint>ppoint){
                    winningMessage.innerText = "You Loose !"
                   
                }
                else{
                    winningMessage.innerText = " You Win !"
                    
                }
               
                restartButton.addEventListener("click" , function(){
                    location.reload();
                })
            }

            if(options.innerHTML==="stone"){
                if(computechoice ==="paper"){
            
                    machinepoints.innerHTML = cpoint + 1 ;

                }
                else if(computechoice==="scissors"){
                    playerpoints.innerHTML = ppoint + 1 ;
                } 
            }
            else if(options.innerHTML==="paper"){
                if(computechoice ==="scissors"){
                    machinepoints.innerHTML = cpoint + 1 ;
                }
                else if(computechoice==="stone"){
                    playerpoints.innerHTML = ppoint + 1 ;
                }                                                
            }
            else{

                if(computechoice ==="stone"){
                    machinepoints.innerHTML = cpoint + 1 ;
                }
                else if(computechoice==="paper"){
                    playerpoints.innerHTML = ppoint + 1 ;
                } 

            }
           

            

           
        },900);

       
    });
    
    
});

