let weather= {
    apikey: "c5eb172d4c9aabe88bf6a2fa5dc7a42d"
}
let cityName = document.querySelector('.cityName')
let weather2 = document.querySelector('.weather')
let temp = document.querySelector('.temp')
let humidity = document.querySelector('.humidity')
let pressure = document.querySelector('.pressure')
let wind = document.querySelector('.wind')

let inp =document.querySelector('#inp')
document.querySelector('.btn').addEventListener('click',function(e){
    let inputValue = inp.value
    console.log(inputValue)
    let finalUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${weather.apikey}&units=metric`
    console.log(finalUrl)
    fetch(finalUrl).then((response) => response.json()).then((data) => {
        console.log(data)
        console.log(data.name)
        console.log(data.weather[0].description)
        console.log(data.main.temp)
        console.log(data.main.humidity)
        console.log(data.main.pressure)
        console.log(data.wind.speed)
        cityName.textContent = `city name is : ${data.name}`
        weather2.textContent = `weather description : ${data.weather[0].description}`
        temp.textContent = `temprature : ${data.main.temp}`
        humidity.textContent = `humidity : ${data.main.humidity}`
        pressure.textContent = `pressure : ${data.main.pressure}`
        wind.textContent = `wind speed : ${data.wind.speed}`
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x1050/?" + inputValue + "')";

    })
})