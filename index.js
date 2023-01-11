const game1 = document.querySelector('.m1');
        const game2 = document.querySelector('.m2');
        const game3 = document.querySelector('.m3');
        const game4 = document.querySelector('.m4');
        const game5 = document.querySelector('.m5');

        game1.addEventListener('click' , function(){
            window.location.href = "Stone_Paper/index.html";
        })
        game2.addEventListener('click' , function(){
            window.location.href = "SnakeGame/index.html";
        })
        game3.addEventListener('click' , function(){
            window.location.href = "Simon Game/index.html";
        })
        game4.addEventListener('click' , function(){
            window.location.href = "Tic Tac Toe/index.html";
        })
        game5.addEventListener('click' , function(){
            window.location.href = "Drum Kit/index.html";
        });