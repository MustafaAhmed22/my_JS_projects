let textarea =document.querySelector('textarea')
let btn = document.querySelector('.btn')
let selectVoices = document.querySelector('select')


function voices(){
    for (let voice of speechSynthesis.getVoices()){
    console.log(voice.SpeechSynthesisVoice)
    let option = `<option value="${voice.name}">${voice.name}</option>`
    selectVoices.insertAdjacentHTML('beforeend',option)
}   
}

speechSynthesis.addEventListener('voiceschanged',voices)

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(textarea.value!==''){
        textTospeech(textarea.value)
    }
})

function textTospeech(text){
    let speech =new SpeechSynthesisUtterance(text)
    for (let voice of speechSynthesis.getVoices()) {
        if (voice.name === selectVoices.value){
            speech.voice =voice
        }
    }
    speechSynthesis.speak(speech)
}