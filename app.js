
// Sets user and comp score as constant variable, this gives us something to manipulate later on
let userScore = 0;
let compScore = 0;
// the _ indicates DOM. the span indicates html element type. You should always cache like this so you can be more efficient while coding.
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const reset_button = document.getElementById("button");
const outcome_h1 = document.getElementById("outcomeText");
//add a constant variable for each userchoice that can be used to manipulate the RPS border colors
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


//Function to retrieve(get) a randomly generated number between 0 and 2, then assigning the result a string.
const getCompChoice = () => {
    const ranNum = Math.floor(Math.random()*3);
    if (ranNum === 0){
        return 'rock';
    } else if (ranNum === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    outcome_h1.innerHTML=`${userChoice.toUpperCase()} vs ${compChoice.toUpperCase()}. You win!`;
}


function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    outcome_h1.innerHTML=`${userChoice.toUpperCase()} vs ${compChoice.toUpperCase()}. Computer wins!`;
}



function draw(userChoice, compChoice) {
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    outcome_h1.innerHTML=`${userChoice.toUpperCase()} vs ${compChoice.toUpperCase()}. Tie!`;
 }



//declares getUserChoice function for use within the main function. Performs the play function. Also determines winner and runs corresponding function(functions defined above) ----> Could/Should these two be seperated? 
function getUserChoice_play(userChoice) {
    const compChoice = getCompChoice();
    console.log(`User selected ${userChoice}. Computer selected ${compChoice}`)
    switch (userChoice + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, compChoice);
            break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw(userChoice, compChoice);
            break;            
    }
}

//main function listens for a click on the rock, paper or scissors elements on the webpage. If any are clicked, it runs the getUserChoice_play(userChoice) function which is declared above. 
function main () {
    rock_div.addEventListener('click', function() {
        getUserChoice_play("rock");
    });

    paper_div.addEventListener('click', function() {
        getUserChoice_play("paper");
    });

    scissors_div.addEventListener('click', function() {
        getUserChoice_play("scissors");
    });
}

//What is this doing? I know it game breaks if it's not here. Giving it an arguement doesn't do anyhing. 
main();


//listens for the user to click the button element on webage. If user clicks, runs function reset().
reset_button.addEventListener('click', function(){
        reset();
    });
    
//resets score and outcome text
function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML=0;
    compScore_span.innerHTML=0;
    outcome_h1.innerHTML=`Ready to go again?`;
}