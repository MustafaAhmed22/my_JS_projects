let chooseNumber =function(num){
let finalUrl = `https://api.themoviedb.org/3/tv/popular?api_key=d48d0b16e2d6143e0de737f565b635fd&language=en-US&page=${num}`
console.log(finalUrl)

fetch(finalUrl).then((response) => response.json()).then((data) => {
    console.log(data.results)
    let displayMenu = function () {
        let display = data.results.map(function (item) {
            return `
            <div class="card">
            <h2 class="card-title">${item.original_name}</h2>
            <img src = "https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}"alt = "" >
            <p class="card-desc">${item.overview}</p>
            </div>
                `
        })
        display = display.join('')
        this.document.querySelector('.cards').innerHTML = display
    }
    displayMenu()
    /* // console.log(data.results[0].name)
     for(let j=0;j<data.results.length;j++){
         let cards = document.querySelector('.cards')
         document.querySelector('body').appendChild(cards)
         let card = document.createElement('div')
         card.className = 'card'
         let cardtitle = document.createElement('h2')
         cardtitle.className = 'card-title'
         let img = document.createElement('img')
         let carddesc = document.createElement('p')
         carddesc.className = 'card-desc'
         cards.appendChild(card)
         cardtitle.textContent =data.results[j].name
            //img.setAttribute('src',`https://image.tmdb.org/t/p/w220_and_h330_face/${data.results[0].poster_path}}`)
     } */
})
}

chooseNumber(6)