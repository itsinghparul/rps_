let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".scoreBoard");
const result_p =document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function convertToWord(letter)
{
    if (letter === "r") return "ROCK";
    if (letter==="p")  return "PAPER";
    if (letter==="s")  return "SCISSOR";
}

function getComputerChoice()
{
    const choices = ['r','p','s'];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_p.innerHTML= convertToWord(userChoice) +(smallUserWord) + " beats  " + convertToWord(computerChoice)+(smallCompWord) +". YOU WON!! 😃"
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);
}
function lose(userChoice,computerChoice)
{
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_p.innerHTML= convertToWord(computerChoice) +(smallCompWord) + " beats  " + convertToWord(userChoice)+(smallUserWord) +". YOU LOST!! 😐"
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}
function draw(userChoice,computerChoice)
{
    userScore++;
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= "It is a Draw...";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},500);
}

function game(userChoice)
{
   const computerChoice=getComputerChoice();
   switch(userChoice + computerChoice)
   {
       case "rs":
       case "pr":
       case "sp":
           win(userChoice,computerChoice);
           break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
   }
}


function main()
{
rock_div.addEventListener('click' ,()=> game("r"));
paper_div.addEventListener('click' ,()=> game("p"));
scissor_div.addEventListener('click' ,()=> game("s"));

}

main();