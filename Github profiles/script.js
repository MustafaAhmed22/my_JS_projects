async function fetchData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
fetchData('mustafaahmed22');

let form = document.querySelector('.form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let user = e.target.val
    console.log(user)
})