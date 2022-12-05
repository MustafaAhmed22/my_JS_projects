let todo =[
    {
        text:'play'
    },
    {
         text: 'sleep'
    },
    {
          text: 'eat'
    },
    {
           text: 'watch'
    }
]
//render all todos
todo.map(function(t){
    let createtodo = document.createElement('div')
    let createSpan =document.createElement('span')
    createSpan.className='span'
    createSpan.textContent = t.text
    createtodo.className = "todo"
    document.querySelector('.todo_container').appendChild(createtodo)
    createtodo.appendChild(createSpan)
    let createBtn1=document.createElement('button')
    createBtn1.textContent ='DONE'
    createBtn1.className='b done'
    let createBtn2 = document.createElement('button')
    createBtn2.textContent = 'DELETE'
    createBtn1.className = 'b delete'
        createtodo.append(createBtn1)
        createtodo.append(createBtn2)
})
//remove all todos
document.querySelector('.remove_all').addEventListener('click',function(e){
   todo.map(function(r){
    document.querySelector('.todo').remove(e)
   })
})
//add new todo
document.querySelector('.add').addEventListener('click',function(e){
    let createtodo = document.createElement('div')
    let createSpan = document.createElement('span')
    let input = document.querySelector('.inp').value
    if(input === ''){
        alert('انتا عبيط!')
    }else{
createSpan.className = 'span'
createSpan.textContent = input
createtodo.className = "todo"
document.querySelector('.todo_container').appendChild(createtodo)
createtodo.appendChild(createSpan)
let createBtn1 = document.createElement('button')
createBtn1.textContent = 'DONE'
createBtn1.className = 'b'
let createBtn2 = document.createElement('button')
createBtn2.textContent = 'DELETE'
createBtn1.className = 'b'
createtodo.append(createBtn1)
createtodo.append(createBtn2)

}
    
})
// done
document.querySelector('.done').addEventListener('click',function(e){
    document.querySelector()
})