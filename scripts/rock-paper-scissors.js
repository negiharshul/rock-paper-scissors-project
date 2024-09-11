let score = JSON.parse(localStorage.getItem('score'));


        function resetScore(){
            score.win = 0;
            score.lose = 0;
            score.tie = 0;
            localStorage.removeItem('score');

            document.querySelector('.score').innerHTML = `win: ${score.win}, lose: ${score.lose}, tie: ${score.tie}`;
        };

        if (score === null) {
            score = {
                win: 0,
                lose: 0,
                tie: 0,
            };
        }

        function playGame(playermove){
            randomNumber = Math.floor(Math.random()*11);
            if (randomNumber <= 3){
                computerMove = "rock";
            } else if (randomNumber > 3 && randomNumber <= 6) {
                computerMove = "paper";
            } else {
                computerMove = "scissors";
            }

            //now comparing players move with computer's move//
            let result = '';
            if (playermove == 'rock') {
                if (computerMove == 'paper') {
                    result = 'you lose'
                } else if (computerMove == 'scissors') {
                    result = 'you win';
                } else if (computerMove == 'rock') {
                    result = 'tie';
                }
            } else if (playermove == 'paper') {
                if (computerMove == 'paper') {
                    result = 'tie'
                } else if (computerMove == 'scissors') {
                    result = 'you lose';
                } else if (computerMove == 'rock') {
                    result = 'you win';
                }
            } else if (playermove == 'scissors') {
                if (computerMove == 'paper') {
                    result = 'you win'
                } else if (computerMove == 'scissors') {
                    result = 'tie';
                } else if (computerMove == 'rock') {
                    result = 'you lose';
                }
           }
           if (result == 'you win') {
            score.win += 1;
           } else if (result == 'you lose') {
            score.lose += 1;
           } else if (result == 'tie') {
            score.tie += 1;
           }; 

           localStorage.setItem('score', JSON.stringify(score));

           document.querySelector('.result').innerHTML = result;
           document.querySelector('.js-score').innerHTML = `win: ${score.win}, lose: ${score.lose}, tie: ${score.tie}`;
           document.querySelector('.move').innerHTML = `You <img src="images/${playermove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon">computer`;
        };