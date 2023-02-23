const questions =[
    {
        id:0,
        question: "What is capital of India?",
        answer:[
            {
                text: 'gandhinagar',
                iscorrect:false
            },
            {
                text:'cairo',
                iscorrect:false
            },
            {
                text: "Delhi",
                iscorrect:true
            }
        ]
    },
     {
         id: 1,
         question: "What is capital of Egypt?",
         answer: [{
                 text: 'gandhinagar',
                 iscorrect:false
             },
             {
                 text: 'cairo',
                 iscorrect:true
             },
             {
                 text: "Delhi",
                 iscorrect:false
             }
         ]
     },
      {
          id: 2,
          question: "What is capital of Thailand?",
          answer: [{
                  text: 'gandhinagar',
                  iscorrect:false
              },
              {
                  text: 'cairo',
                  iscorrect:false
              },
              {
                  text: "Bangkok",
                  iscorrect:true
              }
          ]
      },
       {
           id: 3,
           question: "What is capital of Belgium?",
           answer: [{
                   text: 'gandhinagar',
                   iscorrect:false
               },
               {
                   text: 'cairo',
                   iscorrect:false
               },
               {
                   text: "Brussels",
                   iscorrect:true
               }
           ]
       },
        {
            id:4,
            question: "What is capital of Canada?",
            answer: [{
                    text: 'gandhinagar',
                    iscorrect:false
                },
                {
                    text: 'cairo',
                    iscorrect:false
                },
                {
                    text: "Ottawa",
                    iscorrect:true
                }
            ]
        },
         {
             id: 5,
             question: "What is capital of China?",
             answer: [{
                     text: 'gandhinagar',
                     iscorrect:false
                 },
                 {
                     text: 'cairo',
                     iscorrect:false
                 },
                 {
                     text: "Beijing",
                     iscorrect:true
                 }
             ]
         },
          {
              id: 6,
              question: "What is capital of England?",
              answer: [{
                      text: 'gandhinagar',
                      iscorrect:false
                  },
                  {
                      text: 'cairo',
                      iscorrect:false
                  },
                  {
                      text: "London",
                      iscorrect:true
                  }
              ]
          },
           {
               id: 7,
               question: "What is capital of France?",
               answer: [{
                       text: 'gandhinagar',
                       iscorrect:false
                   },
                   {
                       text: 'cairo',
                       iscorrect:false
                   },
                   {
                       text: "Paris",
                       iscorrect:true
                   }
               ]
           },
            {
                id: 8,
                question: "What is capital of Greece?",
                answer: [{
                        text: 'gandhinagar',
                        iscorrect:false
                    },
                    {
                        text: 'cairo',
                        iscorrect:false
                    },
                    {
                        text: "Athens",
                        iscorrect:true
                    }
                ]
            },
             {
                 id: 9,
                 question: "What is capital of Iran?",
                 answer: [{
                         text: 'gandhinagar',
                         iscorrect:false
                     },
                     {
                         text: 'cairo',
                         iscorrect:false
                     },
                     {
                         text: "Tehran",
                         iscorrect:true
                     }
                 ]
             }
]

/*
let btn1 = document.querySelector('.one')
let btn2 = document.querySelector('.two')
let btn3 = document.querySelector('.three')
let q = document.querySelector('h2')
let container =document.querySelector('.container')
for(let j=0;j<questions.length;j++){
    q.textContent =questions[j].question
    btn1.textContent = questions[j].answer[0].text
    btn2.textContent = questions[j].answer[1].text
    btn3.textContent = questions[j].answer[2].text
        container.appendChild(q)
        container.appendChild(btn1)
        container.appendChild(btn2)
        container.appendChild(btn3)
    document.querySelector('.a').addEventListener('click',function(e){
          console.log(e.target.textContent)
        e.preventDefault()  
    })
}
*/
    /*
    let display = questions.map(function (item) {
        return `
        <h2>${item.question}</h2>
        <div class="btn-container">
        <button>${item.answer[0].text} </button>
        <button>${item.answer[1].text} </button>
        <button>${item.answer[2].text} </button>
        `
    })
        display = display.join('')
        this.document.querySelector('.container').innerHTML = display
*/
/*
    let currentIndex = 0;
    document.querySelector(".container").innerHTML = questions[currentIndex].question;
 let display =   `
    <h2>${questions[currentIndex].question}</h2>
        <div class="btn-container">
        <button>${questions[currentIndex].answer[0].text} </button>
        <button>${questions[currentIndex].answer[1].text} </button>
        <button>${questions[currentIndex].answer[2].text} </button>
        `
        display = display.join('')
        this.document.querySelector('.container').innerHTML = display
        */
        let btn1 = document.querySelector('.one')
        let btn2 = document.querySelector('.two')
        let btn3 = document.querySelector('.three')
        let q = document.querySelector('h2')
        let container = document.querySelector('.container')
        let btnContainer = document.querySelector('.btn-container')
/*
        btnContainer.appendChild(btn1)
        btnContainer.appendChild(btn2)
        btnContainer.appendChild(btn3)
        container.appendChild(q)
        container.appendChild(btnContainer)
        document.body.appendChild(container)
*/
let counter =0
let r =0
let resArray =[]
//let trueAnswers = ["Tehran", "Athens", "Paris", "London", "Beijing", "Ottawa", "Brussels", "Bangkok", 'cairo', "Delhi"]
let trueAnswers2 = [
questions[0].answer[2].text,
questions[1].answer[1].text,
questions[2].answer[2].text,
questions[3].answer[2].text,
questions[4].answer[2].text,
questions[5].answer[2].text,
questions[6].answer[2].text,
questions[7].answer[2].text,
questions[8].answer[2].text,
questions[9].answer[2].text]
console.log(trueAnswers2)
q.innerHTML =questions[counter].question
btn1.innerHTML = questions[counter].answer[0].text
btn2.innerHTML = questions[counter].answer[1].text
btn3.innerHTML = questions[counter].answer[2].text

document.querySelectorAll('.a').forEach(function(b){
    b.addEventListener('click',function(e){
        //let ind = questions[counter].answer[indexOf(e.target.textContent)].text
        //console.log(ind)
        //resArray.push(questions[counter].answer[ind].iscorrect)
                if(trueAnswers2[counter]===e.target.textContent){
                    resArray.push(1)
                }else{
                        resArray.push(0)
                }
        counter++;
        if (counter < questions.length) {
            q.innerHTML = questions[counter].question
            btn1.innerHTML = questions[counter].answer[0].text
            btn2.innerHTML = questions[counter].answer[1].text
            btn3.innerHTML = questions[counter].answer[2].text
        }else{
            btn1.disabled =true
            btn2.disabled = true
            btn3.disabled = true
        const sum = resArray.reduce((a, b) => a + b, 0);
        console.log(sum)
        let res = document.createElement('div')
        res.className='res'
        container.appendChild(res)
        let resbtn =document.createElement('button')
        resbtn.textContent ='Do Test Again"'
        resbtn.className = 'res-btn'
        res.appendChild(resbtn)
        let showres =document.createElement('h2')
        showres.textContent =`your score is : ${sum}`
        res.appendChild(showres)
       // alert(`your score is ${sum} play again ?`)
        //window.location.reload();
        resbtn.addEventListener('click',function(e){
            window.location.reload();
        })
        }
    })
})  