let show = document.querySelector('.showjokes')
let btn =document.querySelector('.btn')
function generateJokes(){
    const config ={
        headers :{
            'Accept':'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',config)
    .then((res)=>res.json())
    .then((data)=>show.innerHTML =data.joke)
}
generateJokes()

btn.addEventListener('click',function(e){
generateJokes()
})