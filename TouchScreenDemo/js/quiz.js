/**
 * Retrieves an array of boolean values indicating the correctness of the 9th image in each image array.
 * The image arrays are accessed from the `imageArray` object, which likely contains the data for a quiz.
 * This array of boolean values can be used to determine the correct answers for the quiz.
 */
/* 

let currentQuestion = 0;
let score = 0;
let timer;
let questions = []; // Load questions from JSON file

// Load questions from JSON file
$.getJSON('data/questions.json', function (data) {
    questions = data;
});

function displayQuestion(index) {
    const question = questions[index];
    $('#game-container').html(`
    <div class="question">
      <h2>${question.question}</h2>
      <ul>
        ${question.options.map((option, i) => `<li><button onclick="checkAnswer(${i})">${option}</button></li>`).join('')}
      </ul>
      <div id="timer">10</div>
      <button id="next-btn" style="display: none;" onclick="nextQuestion()">Next</button>
    </div>
  `);
    startTimer();
}

function startTimer() {
    let timeLeft = 10;
    $('#timer').text(timeLeft);
    timer = setInterval(() => {
        timeLeft--;
        $('#timer').text(timeLeft);
        if (timeLeft === 0) {
            clearInterval(timer);
            showCorrectAnswer();
        }
    }, 1000);
}

function checkAnswer(index) {
    clearInterval(timer);
    if (index === questions[currentQuestion].correctAnswer) {
        score++;
        // Play winning sound
    } else {
        // Play wrong sound
        showCorrectAnswer();
    }
    $('#next-btn').show();
}

function showCorrectAnswer() {
    const correctIndex = questions[currentQuestion].correctAnswer;
    const correctAnswer = questions[currentQuestion].options[correctIndex];
    $('.question ul li button').eq(correctIndex).addClass('correct-answer');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function showResults() {
    $('#score').text(`Your score: ${score}/${questions.length}`);
    // Display congratulatory or hard luck message
    $('#result-screen').show();
}

function returnHome() {
    // Save results to JSON file
    // Redirect to home screen
}

function startGame() {
    $('#start-game').hide();
    displayQuestion(currentQuestion);
}
 */

/* ---------------------------------------------------------------------------------- */

const imageArray = [{
        id: 0,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 1,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 2,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 3,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 4,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 5,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 6,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 7,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 8,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    },
    {
        id: 9,
        image: [{
                path: '../images/traffic/1.jpg',
                iscorrect: false
            },
            {
                path: '../images/traffic/2.jpg',
                iscorrect: false
            },
            {
                path: "../images/traffic/3.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/4.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/6.jpg",
                iscorrect: false
            },
            {
                path: '../images/traffic/7.jpg',
                iscorrect: false
            }, {
                path: '../images/traffic/8.jpg',
                iscorrect: false
            }, {
                path: "../images/traffic/9.jpg",
                iscorrect: true
            }
        ]
    }
]
let trueAnswers = [imageArray[0].image[8].iscorrect, imageArray[1].image[8].iscorrect, imageArray[2].image[8].iscorrect, imageArray[3].image[8].iscorrect, imageArray[4].image[8].iscorrect, imageArray[5].image[8].iscorrect, imageArray[6].image[8].iscorrect, imageArray[7].image[8].iscorrect, imageArray[8].image[8].iscorrect]

function StartGame() {


    var gameDiv = document.getElementById('gameSlide');

   // alert(gameDiv.innerHTML);

    var img11 = document.getElementById('img1');
   

    //var img1 = document.querySelector('#img1');
    /* 
    console.log(img11)
    let img2 = document.querySelector('#img2');
    let img3 = document.querySelector('#img3');
    let img4 = document.querySelector('#img4');
    let img5 = document.querySelector('#img5');
    let img6 = document.querySelector('#img6');
    let img7 = document.querySelector('#img7');
    let img8 = document.querySelector('#img8');
    let img9 = document.querySelector('#img9');

        this.alert(img1);
        img1.addEventListener('click', () => {
            console.log('aaaa')
        })
     */

}


/* window.addEventListener("DOMContentLoaded", function () {
    this.alert(img11);
    img11.addEventListener('click', () => {
        console.log('aaaa')
    })


}) */


