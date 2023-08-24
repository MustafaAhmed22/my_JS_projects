let addbtn = document.querySelector('#add')

let notes = JSON.parse(sessionStorage.getItem('notes'))
console.log(notes)
if(notes){
    notes.forEach(function(note){
        addNewNote(note)
    })
}

addbtn.addEventListener('click',()=>addNewNote())
function addNewNote(text=''){
    let note =document.createElement('div')
    note.classList.add('notes')
    note.innerHTML=`
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
            <button class="done" ><i class="fa-solid fa-check-double"></i></button>

        </div>
 
            <textarea name="" id="textarea">${text}</textarea>
    </div>
    `
    let delnote = note.querySelector('.delete')
    let editnote = note.querySelector('.edit')
    let donenote = note.querySelector('.done')
    let textarea =note.querySelector('#textarea')

    textarea.addEventListener('input',function(e){
        console.log(e.target.value)
        updatesessionStorage()
    })
    delnote.addEventListener('click', function () {
        note.remove()
    })
    editnote.addEventListener('click', function () {  
    document.querySelector('#textarea').setAttribute('readonly', 'readonly')
 })
     donenote.addEventListener('click', function () {
         document.querySelector('#textarea').removeAttribute('readonly')
     })
    document.querySelector('.grid-container').appendChild(note)
}

function updatesessionStorage(){
    const notetext =document.querySelectorAll('textarea')
    //console.log(notetext)
    const notes =[]
    notetext.forEach(note => {
            notes.push(note.value)
    });
    console.log(notes)
    sessionStorage.setItem('notes',JSON.stringify(notes))
}