let inp = document.querySelector('#inp')
let btn = document.querySelector('.btn')
let flag =document.querySelector('.flag')
let currency = document.querySelector('.currency')
let countryname = document.querySelector('.countryname')
let population = document.querySelector('.population')
let capital = document.querySelector('.capital')
let region = document.querySelector('.region')
let langauge = document.querySelector('.langauge')

btn.addEventListener('click',function(e){
  let countryName=inp.value ;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  console.log(finalUrl)
  fetch(finalUrl).then((response)=>response.json()).then((data)=>{
    console.log(data[0])
    countryname.textContent = `Name : ${data[0].name.common}`
    flag.setAttribute('src', data[0].flags.svg)
    document.querySelector('body').style.backgroundImage = `url(${data[0].flags.svg})`
    
    //console.log(data[0].flags.svg)
    currency.textContent = `Currency : ${Object.keys(data[0].currencies)[0]}`
    //console.log(Object.keys(data[0].currencies)[0])
    //console.log(data[0].name.common)
    population.textContent = `Population : ${data[0].population}`
    //console.log(data[0].population)
    capital.textContent = ` Capital : ${data[0].capital[0]}`
    //console.log(data[0].capital[0])
    region.textContent = `Region : ${data[0].region}`
    //console.log(data[0].region)
    langauge.textContent = `Main language : ${Object.values(data[0].languages)[0]}`
    //console.log(Object.values(data[0].languages)[0])
  })
})
