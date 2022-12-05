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
    },
    {
            text: 'read'
    }
]

todo.map(function(t){
    let createtodo = document.createElement('div')
    createtodo.textContent = t.text
    createtodo.className = "todo"
    document.querySelector('.todo_container').appendChild(createtodo)
    
    let todobtns =document.querySelector('div')
    todobtns.className = 'done'
    let btn1 =document.querySelector('button')
    let btn2 = document.querySelector('button')
    btn1.className = 'done'
    btn2.className = 'del'
    document.querySelector('.done').appendChild(btn1)
    document.querySelector('.done').appendChild(btn2)

    document.querySelector('.todo_container').appendChild(todobtns)
    
})
