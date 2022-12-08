let btn =document.querySelectorAll('.btn')
let screen = document.querySelector('.screen')
//console.log(btn[0])
//let result =[]
let str =''
btn.forEach(function(b){
    b.addEventListener('click',function(e){
        //console.log(e.target.textContent)
        //result.push(e.target.textContent)
        //let arr=result.join('')
        if (str.startsWith('*') || str.startsWith('+') || str.startsWith('-') || str.startsWith('/')){
            str =''
        }
        if (e.target.textContent === '=') {
            screen.textContent = eval(str)
            str = ''
        }else{
            str += e.target.textContent
            console.log(str)
            screen.textContent = str
        }
    })
})