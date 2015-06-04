////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move.toLowerCase().trim(); 
    //validate that the user has chosen a proper value 
    while ( !((move === 'paper') || (move ==='rock') || (move ==='scissors')) ) {
        move = getInput().toLowerCase().trim();
    } 
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    do {
        var move = randomPlay();
    }
    while (!move); 

    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    console.log('***** You chose: '+ playerMove + 
                '. Your opponent chose: ' + computerMove + ' *****'); 
    switch (playerMove) {
        case "rock": //player chose rock 
            switch (computerMove) {
                case 'paper':
                    winner = 'computer'; 
                    break;
                case 'scissors':
                    winner = 'player';
                    break; 
                default:
                    winner = 'tie'; 
                    break;  
            }
        break;   
        
        case "paper": //player chose paper
            switch (computerMove) {
                case 'scissors':
                    winner = 'computer'; 
                    break;
                case 'rock':
                    winner = 'player';
                    break; 
                default:
                    winner = 'tie'; 
                    break; 
            } 
        break;   
        
        case "scissors": //player chose scissors 
            switch (computerMove) {
                case 'rock':
                    winner = 'computer'; 
                    break;
                case 'paper':
                    winner = 'player'; 
                    break; 
                default:
                    winner = 'tie'; 
                    break; 
            } 
        break; 

        default:
            console.log('There was an error determining the winner');
    } // end playerMove switch statement 
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var roundWinner; 

    while (playerWins < 5 && computerWins < 5) {
        roundWinner = getWinner( getPlayerMove(getInput()), 
                                 getComputerMove(randomPlay()) ); 
        switch (roundWinner) {
            case 'player':
                playerWins++;
                console.log('You win!'); 
                console.log('Player: ' + playerWins + '\n' 
                            + 'Computer: ' + computerWins); 
                break;
            case 'computer':
                computerWins++; 
                console.log('You lose!'); 
                console.log('Player: ' + playerWins + '\n' 
                            + 'Computer: ' + computerWins); 
                break; 
            default:
                console.log('Tie');
                console.log('Player: ' + playerWins + '\n' 
                            + 'Computer: ' + computerWins); 
                break;  
        }
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

