//console.log(randomItem)
const computerChoiece = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('User-choice')
const resultDisplay = document.getElementById('result')
let paperbtn =document.querySelector('#paper')
let rockbtn = document.querySelector('#rock')
let scissorsbtn = document.querySelector('#scissors')
paperbtn.addEventListener('click',function(e){
      console.log(e.target.innerText)
    userChoiceDisplayfun(e)       
})
rockbtn.addEventListener('click', function (e) {
      console.log(e.target.innerText)
      userChoiceDisplayfun(e)
})
scissorsbtn.addEventListener('click', function (e) {
      console.log(e.target.innerText)
      userChoiceDisplayfun(e)
})
function userChoiceDisplayfun(e){
 userChoiceDisplay.textContent=e.target.innerText
 let choice = ['Rock', 'Paper', 'Scissors']
 var randomItem = choice[Math.floor(Math.random() * choice.length)];
 computerChoiece.textContent = randomItem
 resultfun()
}
function resultfun(){
      if (userChoiceDisplay.textContent === computerChoiece.textContent) {
            resultDisplay.textContent ='duel'
      } else if (userChoiceDisplay.textContent === 'Paper' && computerChoiece.textContent === 'Rock') {
            resultDisplay.textContent='you win'
      } else if (userChoiceDisplay.textContent === 'Paper' && computerChoiece.textContent === 'Scissors') {
            resultDisplay.textContent ='computer wins'
      } else if (userChoiceDisplay.textContent === 'Rock' && computerChoiece.textContent === 'Scissors') {
            resultDisplay.textContent = 'you win'
      } else if (userChoiceDisplay.textContent === 'Rock' && computerChoiece.textContent === 'Paper') {
            resultDisplay.textContent = 'computer wins'
      } else if (userChoiceDisplay.textContent === 'Scissors' && computerChoiece.textContent === 'Rock') {
            resultDisplay.textContent = 'computer wins'
      } else if (userChoiceDisplay.textContent === 'Scissors' && computerChoiece.textContent === 'Paper') {
            resultDisplay.textContent = 'you win'
      }
}