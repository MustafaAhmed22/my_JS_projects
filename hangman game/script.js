/*
const prompt = require("prompt-sync")({
    sigint: true
});
let hangmanArr =['table','apple','city','computer','window']
var randomItem = hangmanArr[Math.floor(Math.random() * hangmanArr.length)];
let guessWordToArray =randomItem.split('')
console.log(guessWordToArray)
let shadowWordArray =[]
for(let j=0;j<guessWordToArray.length;j++){
    shadowWordArray.push('_')
}
console.log(shadowWordArray)
    let countLifes=5
for(let i=0;i<shadowWordArray.length;i++){
const char = prompt("enter char : ");
if (guessWordToArray.includes(char)){
    let ind = guessWordToArray.indexOf(char)
    shadowWordArray.splice(ind,1,char)
    console.log(shadowWordArray)

}else{
    countLifes--
    if(countLifes === 0){
        console.log(countLifes)
        console.log('you failed!')
        break
    }
}
}
*/

let words = ['table', 'apple', 'city', 'computer', 'window']
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
let randomWordToArray =randomWord.split('')

randomWordToArray.map(function (e) {
    let createSpan =document.createElement('span')
    createSpan.className ='span-css'
    //createSpan.textContent =e
    document.querySelector('.letters').append(createSpan)
})
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(letters.length)

letters.map(function(letter){
    let createBtn =document.createElement('button')
    createBtn.className ='btn'
    createBtn.textContent =letter
    document.querySelector('.btns-container').append(createBtn)
})

let btn =document.querySelectorAll('.btn')
btn.forEach(function(b){
    b.addEventListener('click',function(e){
        console.log(e.target.textContent)
        b.disabled =true
        b.className ='disabled'
        if (randomWordToArray.includes(e.target.textContent)){
            let ind = randomWordToArray.indexOf(e.target.textContent)
            createSpan.textContent =randomWordToArray[ind]

            
        }
    })
})