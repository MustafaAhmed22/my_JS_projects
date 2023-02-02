let counter =0

let finalUrl = 'https://random-word-api.herokuapp.com/word'
fetch(finalUrl).then((response) => response.json()).then((data) => {
console.log(data[0])
})

let imgArray = [
    'url("img/1.jpg")',
    'url("img/2.jpg")',
    'url("img/3.jpg")',
    'url("img/4.jpg")',
    'url("img/5.jpg")',
    'url("img/6.jpg")',
    'url("img/7.jpg")'
 ]
 let loadImage = document.querySelector('.imgs-container')
let words = ['table', 'apple', 'city', 'computer', 'window','cat','lion','elephant','sofa','cupboard','chair']
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord)
let randomWordToArray =randomWord.split('')
let shadowArray =[]
for (let j = 0; j < randomWordToArray.length; j++) {
    shadowArray.push(' ')
}
console.log(shadowArray)
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(letters.length)
letters.map(function(letter){
    let createBtn =document.createElement('button')
    createBtn.className ='btn'
    createBtn.textContent =letter
    document.querySelector('.btns-container').append(createBtn)
})
 let createSpan 
shadowArray.map(function (e) {
    createSpan = document.createElement('span')
    createSpan.className = 'span-css'
    createSpan.textContent = e
    //createSpan.style.color = 'white'
    document.querySelector('.letters').append(createSpan)
})
let btn = document.querySelectorAll('.btn')
btn.forEach(function (b) {
    b.addEventListener('click', function (e) {
        console.log(e.target.textContent)
        b.disabled = true
        b.className = 'disabled'
         if (randomWordToArray.includes(e.target.textContent)) {
            for(let j=0;j<randomWordToArray.length;j++){
                    if (randomWordToArray[j] === e.target.textContent){
                    let ind = randomWordToArray.indexOf(e.target.textContent)
                    shadowArray.splice(ind, 1, e.target.textContent)
                //shadowArray[ind] = e.target.textContent
                document.querySelector('.letters').children[ind].
                replaceChild(document.createTextNode(e.target.textContent),
                 document.querySelector('.letters').children[ind].childNodes[0])
                 randomWordToArray.splice(ind, 1, '*')
                }
            }
        }else{
            if (counter !== 7) {
               loadImage.style.backgroundImage = imgArray[counter]
               counter++
            } else {
                alert('Failed , Play Again')
                 window.location.reload();
            }
        }
        if(!shadowArray.includes(' ')){
            alert('you win, Play Again')
             window.location.reload();
        }
    })
   
})