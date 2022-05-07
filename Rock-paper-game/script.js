const computerChoiece=  document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
       userChoice = e.target.id   
       userChoiceDisplay.innerHTML=userChoice
       generateComputerChoice()
}))
function generateComputerChoice() {
      const randomnumber = Math.floor(Math.random() * possibleChoices.length) //3
      console.log(randomnumber)

}