var limit = 20;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: {
        'X-Api-Key': 'OmRKQMuiS6RX0etTjxzyWQ==85z7knE6Fm8v5Nf8'
    },
    contentType: 'application/json',
    success: function (result) {
        console.log(result);
        for(let j =0;j<result.length;j++){
            let facts =document.createElement('div')
            facts.textContent =result[j].fact
            document.querySelector('body').appendChild(facts)
        }
        
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});