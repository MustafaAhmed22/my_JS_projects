let form = document.querySelector('.form')
let search = document.querySelector('#search')
let container = document.querySelector('.container')

async function fetchData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
        createCardHtml(response.data)
    } catch (error) {
        console.error(error);
    }
}

async function getrepos(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username + '/repos'}`);
        console.log(response.data);
        addrepostocard(response.data)
    } catch (error) {
        console.error(error);
    }
}


function createCardHtml(data){
    let card =
    `
    <div class="card text-white flex p-12 bg-fuchsia-950 rounded-xl my-0 mx-6 max-w-3xl ">
      <div>
        <img src=${data.avatar_url} alt=""
         class = "avatar rounded-full border-8 border-rose-600 w-40 h-40 max-w-3xl" >
      </div>
      <div class="userinfo ml-6">
        <h2 class="text-4xl mb-4">${data.name}</h2>
        <p>${data.bio}</p>
        <ul class="flex justify-around pt-5">
          <li>${data.followers} <strong>Follwers</strong></li>
          <li>${data.following} <strong>Follwing</strong></li>
          <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>
        <div class="repos pt-8">
         
        </div>        
       
      </div>
    </div>
    `
container.innerHTML =card
}

function addrepostocard(repourl){
    let rep =`
     <a href=${repourl[0].html_url} class="repo bg-fuchsia-900 p-2 inline-block m-2">${repourl[0].name}</a>
          <a href=${repourl[1].html_url} class="repo bg-fuchsia-900 p-2 inline-block m-2">${repourl[1].name}</a>
          <a href=${repourl[2].html_url} class="repo bg-fuchsia-900 p-2 inline-block m-2">${repourl[2].name}</a>
          <a href=${repourl[3].html_url} class="repo bg-fuchsia-900 p-2 inline-block m-2">${repourl[3].name}</a>
          <a href=${repourl[4].html_url} class="repo bg-fuchsia-900 p-2 inline-block m-2">${repourl[4].name}</a>
    `
    document.querySelector('.repos').innerHTML =rep
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    let user = search.value
   if(user){
    fetchData(user);
    getrepos(user)
    search.value=''
   }
})