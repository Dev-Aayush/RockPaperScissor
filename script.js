const computerChoiceDisplay= document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')

const possibleChoices= document.querySelectorAll('button')

console.log(possibleChoices)
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e)=> {
    console.log("HI")
    userChoice = e.target.id
    console.log(userChoice)
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random() *3)+1
    if(randomNumber==1) computerChoice = 'Rock'
    if(randomNumber==2) computerChoice = 'Scissor'
    if(randomNumber==3) computerChoice = 'Paper'
    computerChoiceDisplay.innerHTML=computerChoice

}

function getResult(){
    if(computerChoice==userChoice) result="Its a Draw!"
    if(computerChoice=='Paper' && userChoice=='Scissor') result="U win"
    if(computerChoice=='Rock' && userChoice=='Paper') result="U win"
    if(computerChoice=='Scissor' && userChoice=='Rock') result="U win"
    if(computerChoice=='Paper' && userChoice=='Rock') result="U Lost"
    if(computerChoice=='Rock' && userChoice=='Scissor') result="U Lost"
    if(computerChoice=='Scissor' && userChoice=='Paper') result="U Lost"

    resultDisplay.innerHTML=result

}