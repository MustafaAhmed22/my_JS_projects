let boy = 'boy'
function selectM() {
    //     let selectMale = document.getElementById('male')
    //     console.log('../images/`${boy}`/img1.png')
    //     var image = document.querySelectorAll(".img1")
    //    // image.setAttribute('src', `../images/${boy}/img1.png`)
    //     console.log(image)
    //     image.forEach(element => {
    //            console.log(element  ) 
    //           // element.setAttribute('src', `../images/${boy}/img1.png`)
    //            let source =element.getAttribute('src')
    //            console.log(source)
    //            let newSource =source.replace('boy','boy')
    //            element.setAttribute('src', newSource)
    //     });

    localStorage.setItem("Character", "boy");
}

function selectF() {
    // let selectFemale = document.getElementById('female')
    // console.log(selectFemale)
    // var image = document.querySelectorAll(".img1")
    // // image.setAttribute('src', `../images/${boy}/img1.png`)
    // console.log(image)
    // image.forEach(element => {
    //     console.log(element)
    //     // element.setAttribute('src', `../images/${boy}/img1.png`)
    //     let source = element.getAttribute('src')
    //     console.log(source)
    //     let newSource = source.replace('boy', 'girl')
    //     element.setAttribute('src', newSource)
    // });

    localStorage.setItem("Character", "girl");
}



/* mute sound */

var x = document.querySelector('#bg-music');

function enableMute() {
    if(x.muted === false){
        x.muted = true;
    }
}

function disableMute() {
    if(x.muted === true){
        x.muted = false;
    }
}


/* mute sound */

/* dropdown */









/* dropdown */