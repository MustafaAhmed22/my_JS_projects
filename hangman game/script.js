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

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(letters.length)

