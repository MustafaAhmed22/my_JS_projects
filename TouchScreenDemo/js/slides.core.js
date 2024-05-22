let currentSlide = 0;
let slides;
let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let option_list;
let next_btn;
let widthValue = 0;
let questions = [{
        numb: 1,
        question: "What does a red traffic light indicate?",
        answer: "Stop",
        options: [
            "Stop",
            "Go",
            "Slow down",
            "Yield"
        ]
    },
    {
        numb: 2,
        question: "What should you do when approaching a pedestrian crossing?",
        answer: "Slow down and yield to pedestrians",
        options: [
            "Speed up to get through quickly",
            "Sound your horn to alert pedestrians",
            "Slow down and yield to pedestrians",
            "Proceed without stopping"
        ]
    },
    {
        numb: 3,
        question: "What is the purpose of wearing a seat belt in a vehicle",
        answer: "To enhance safety in case of a collision",
        options: [
            "To look fashionable",
            "To keep the vehicle clean",
            "To prevent motion sickness",
            "To enhance safety in case of a collision"
        ]
    },
    {
        numb: 4,
        question: "What is the purpose of using turn signals while driving",
        answer: "To indicate your intentions to other road users",
        options: [
            "To indicate your intentions to other road users",
            "To confuse other drivers",
            "To request the right of way",
            "To change lanes quickly"
        ]
    },
    {
        numb: 5,
        question: "What is the purpose of a pedestrian crossing?",
        answer: "allow pedestrians to cross the road safely",
        options: [
            "To provide a shortcut for pedestrians",
            "To slow down traffic",
            "allow pedestrians to cross the road safely",
            "To prioritize pedestrians over vehicles"
        ]
    },
    {
        numb: 6,
        question: "What should you do when your vehicle starts skidding on a slippery road?",
        answer: "Steer in the opposite direction of the skid",
        options: [
            "Slam on the brakes",
            "Accelerate rapidly to regain control",
            "Steer in the opposite direction of the skid",
            "Panic and freeze"
        ]
    },
    {
        numb: 7,
        question: "When should you use your high beam headlights?",
        answer: "In poorly lit areas to improve visibility",
        options: [
            "In foggy conditions",
            "When approaching oncoming traffic",
            "In well-lit urban areas",
            "In poorly lit areas to improve visibility"
        ]
    },
    {
        numb: 8,
        question: "What does a yield sign mean?",
        answer: "Stop and proceed only if it is safe to do so",
        options: [
            "Stop and proceed only if it is safe to do so",
            "Slow down and proceed with caution",
            "Speed up and merge with traffic",
            "Ignore it and continue driving"
        ]
    },
    {
        numb: 9,
        question: "What is the purpose of a speed limit sign?",
        answer: "To indicate the maximum speed allowed on the road",
        options: [
            "To challenge drivers to exceed the limit",
            "To indicate the minimum speed allowed on the road",
            "To indicate the maximum speed allowed on the road",
            "To suggest a safe driving speed"
        ]
    },
    {
        numb: 10,
        question: "What should you do when an emergency vehicle with flashing lights and sirens approaches?",
        answer: "Pull over to the side of the road and stop",
        options: [
            "Drive faster to clear its path quickly",
            "Slow down and continue driving as usual",
            "Pull over to the side of the road and stop",
            "Follow closely behind the emergency vehicle"
        ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];
let questionsAR = [{
        numb: 1,
        question: "ما الذي تشير إليه إشارة المرور الحمراء؟",
        answer: "قف",
        options: [
            "قف",
            "اذهب",
            "ابطأ",
            "استعد"
        ]
    },
    {
        numb: 2,
        question: "ماذا يجب عليك فعله عند الاقتراب من معبر المشاة؟",
        answer: "أبطئ السرعة واستسلم للمشاة",
        options: [
            "تسرع للوصول بسرعة",
            "أطلق بوق السيارة لتنبيه المشاة",
            "أبطئ السرعة واستسلم للمشاة",
            "المضي قدما دون توقف"
        ]
    },
    {
        numb: 3,
        question: "ما هو الهدف من وضع حزام الأمان في السيارة؟",
        answer: "لتعزيز السلامة في حالة الاصطدام",
        options: [
            "لتبدو عصرية",
            "للحفاظ على نظافة السيارة",
            "للوقاية من دوار الحركة",
            "لتعزيز السلامة في حالة الاصطدام"
        ]
    },
    {
        numb: 4,
        question: "ما الهدف من استخدام إشارات الانعطاف أثناء القيادة؟",
        answer: "للإشارة إلى نواياك لمستخدمي الطريق الآخرين",
        options: [
            "للإشارة إلى نواياك لمستخدمي الطريق الآخرين",
            "للتشويش على السائقين الآخرين",
            "للمطالبة بحق المرور",
            "لتغيير المسارات بسرعة"
        ]
    },
    {
        numb: 5,
        question: "ما الهدف من معبر المشاة؟",
        answer: "السماح للمشاة بعبور الطريق بشكل آمن",
        options: [
            "توفير طريق مختصر للمشاة",
            "لإبطاء حركة المرور",
            "السماح للمشاة بعبور الطريق بشكل آمن",
            "إعطاء الأولوية للمشاة على المركبات"
        ]
    },
    {
        numb: 6,
        question: "ماذا يجب عليك فعله عندما تبدأ سيارتك بالانزلاق على طريق زلق؟",
        answer: "قم بالقيادة في الاتجاه المعاكس للانزلاق",
        options: [
            "اضرب على الفرامل",
            "الإسراع بسرعة لاستعادة السيطرة",
            "قم بالقيادة في الاتجاه المعاكس للانزلاق",
            "الذعر والتوقف"
        ]
    },
    {
        numb: 7,
        question: "متى يجب عليك استخدام المصابيح الأمامية عالية الضوء؟",
        answer: "في المناطق ضعيفة الإضاءة لتحسين الرؤية",
        options: [
            "في أجواء ضبابية",
            "عندما تقترب من حركة المرور القادمة",
            "في المناطق الحضرية جيدة الإضاءة",
            "في المناطق ضعيفة الإضاءة لتحسين الرؤية"
        ]
    },
    {
        numb: 8,
        question: "ما هو معنى علامة الإنتظار ؟",
        answer: "التوقف والمضي قدمًا فقط إذا كان القيام بذلك آمنًا",
        options: [
            "التوقف والمضي قدمًا فقط إذا كان القيام بذلك آمنًا",
            "تمهل وتحرك بحذر",
            "تسريع والاندماج مع حركة المرور",
            "تجاهل ذلك وواصل القيادة"
        ]
    },
    {
        numb: 9,
        question: "ما هو الغرض من علامة تحديد السرعة؟",
        answer: "للإشارة إلى أقصى سرعة مسموح بها على الطريق",
        options: [
            "لتحدي السائقين لتجاوز الحد الأقصى",
            "للإشارة إلى الحد الأدنى للسرعة المسموح بها على الطريق",
            "للإشارة إلى أقصى سرعة مسموح بها على الطريق",
            "اقتراح سرعة قيادة آمنة"
        ]
    },
    {
        numb: 10,
        question: "ماذا يجب أن تفعل عند اقتراب سيارة طوارئ بأضواء ساطعة وصفارات إنذار؟",
        answer: "توقف إلى جانب الطريق وتوقف",
        options: [
            "قم بالقيادة بشكل أسرع لتمهيد طريقها بسرعة",
            "أبطئ السرعة وواصل القيادة كالمعتاد",
            "توقف إلى جانب الطريق وتوقف",
            "اتبع عن كثب وراء سيارة الطوارئ"
        ]
    }
];


function loadSlides() {
    $.getJSON('data/slides.json', function (data) {
            slides = data.slides;
            showSlideById(slides[0].id);
        })
        .done(function () {
            // You can add any success handling here if needed
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("error " + textStatus);
            console.log("incoming Text " + jqXHR.responseText);
            alert("Error " + jqXHR.responseText);
        })
        .always(function () {
            // You can add any cleanup or final steps here if needed
        });
}

async function loadSlideContent(slideId) {
    try {
        const response = await fetch(`slides/${slideId}.html`);
        if (!response.ok) {
            throw new Error(`Something went wrong: ${response.statusText}`);
        }
        const responseText = await response.text();
        document.getElementById(slideId).innerHTML = responseText;
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function showSlideById(slideId) {
    const slide = slides.find(s => s.id === slideId);
    if (!slide) {
        console.error('Slide not found');
        return;
    }

    //Display background video or image
    if (slide.background.type === 'video') {
        $('#bg-video').show();
        $('#bg-video source').attr('src', slide.background.file);
        $('#bg-video')[0].load();
        $('#bg-video')[0].onerror = function () {
            console.error('Error loading video:', slide.background.file);
            $('#bg-video').hide();
        };
    } else if (slide.background.type === 'image') {
        $('#bg-video').hide();
        $('body').css('background-image', `url(${slide.background.file})`);
    }

    //Play background music 
    $('#music-source').attr('src', slide.background.music);
    $('#bg-music')[0].load();
    $('#bg-music')[0].onerror = function () {
        console.error('Error loading music:', slide.background.music);
    };


    loadSlideContent(slide.id);

    if (currentSlide.id)
        document.getElementById(currentSlide.id).classList.remove('active');
    document.getElementById(slide.id).classList.add('active');

    if (slide.duration) {
        setTimeout(() => {
            showSlideById(slide.target);
        }, slide.duration);
    }

    currentSlide = slide;

    let character = localStorage.getItem("Character");
    // console.log(character);

    setTimeout(() => {
        let image = document.querySelectorAll(".charachter-img")

        image.forEach(element => {
            let source = element.getAttribute('src')

            let newSource = source.replace('boy', character)
            element.setAttribute('src', newSource)
        });
    }, 50);

}


function playAnimation(id, oldAnimationCSS, newAnimationCSS) {
    const div = document.getElementById(id);

    div.style.animation = 'none';
    div.offsetHeight; /* trigger reflow */
    div.style.animation = null;

    div.classList.remove(oldAnimationCSS);
    div.classList.add(newAnimationCSS); // Apply the class to slide out
}


function hideDiv(id) {
    const div = document.getElementById(id);

    div.style.animation = 'none';
    div.offsetHeight; /* trigger reflow */
    div.style.animation = null;

    div.classList.remove("showDiv");
    div.classList.add('hideDiv'); // Apply the class to slide out
}

function showDiv(id) {
    const div = document.getElementById(id);

    div.style.animation = 'none';
    div.offsetHeight; /* trigger reflow */
    div.style.animation = null;

    div.classList.remove("hideDiv");
    div.classList.add('showDiv'); // Apply the class to slide out
}



$(document).ready(function () {

    loadSlides();

});

// Function to adjust content height dynamically
function adjustContentHeight() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const windowHeight = window.innerHeight;
    let contentHeight = windowHeight;

    if (!document.querySelector('header').classList.contains('hidden')) {
        contentHeight -= headerHeight;
    }
    if (!document.querySelector('footer').classList.contains('hidden')) {
        contentHeight -= footerHeight;
    }

    const content = document.querySelector('.content');
    content.style.height = `${contentHeight}px`;
}

// Call the function on page load and window resize
//window.addEventListener('load', adjustContentHeight);
//window.addEventListener('resize', adjustContentHeight);

//// Function to adjust content height dynamically
//function adjustContentHeight() {
//    let headerHeight = 0;
//    let footerHeight = 0;

//    const header = document.querySelector('header');
//    if (header) {
//        headerHeight = header.offsetHeight;
//    }

//    const footer = document.querySelector('footer');
//    if (footer) {
//        footerHeight = footer.offsetHeight;
//    }

//    const windowHeight = window.innerHeight;
//    let contentHeight = windowHeight;

//    if (header) {
//        contentHeight -= headerHeight;
//    }
//    if (footer) {
//        contentHeight -= footerHeight;
//    }

//    const content = document.querySelector('.content');
//    if (content) {
//        content.style.height = `${contentHeight}px`;
//    }
//}

//// Call the function on page load and window resize
//window.addEventListener('load', adjustContentHeight);
//window.addEventListener('resize', adjustContentHeight);


/* new  */

/* registeration form */
var button = document.getElementById('mainButton');

var openForm = function () {
    button.className = 'active';

};

var checkInput = function (input) {
    if (input.value.length > 0) {
        input.className = 'active';
    } else {
        input.className = '';
    }
};

var closeForm = function () {
    button.className = '';
};

document.addEventListener("keyup", function (e) {
    if (e.keyCode == 27 || e.keyCode == 13) {
        closeForm();
    }
});
/* registeration form */
/* ///////////////////////////////////////////////////////// */
/* quiz slide */
function quiz() {
    //selecting all required elements
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");


    /* 
    var splashScreen = document.querySelector('.splash');
    splashScreen.addEventListener('click', () => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.classList.add('hidden')
        }, 610)
    })
     */
    // if startQuiz button clicked
    start_btn.onclick = () => {
        info_box.classList.add("activeInfo"); //show info box
    }

    // if exitQuiz button clicked
    // exit_btn.onclick = () => {
    //     info_box.classList.remove("activeInfo"); //hide info box
    // }

    // if continueQuiz button clicked
    continue_btn.onclick = () => {
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.add("activeQuiz"); //show quiz box
        showQuetions(0); //calling showQestions function
        queCounter(1); //passing 1 parameter to queCounter
        startTimer(15); //calling startTimer function
        startTimerLine(0); //calling startTimerLine function
    }

    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");

    // if restartQuiz button clicked
    restart_quiz.onclick = () => {
        quiz_box.classList.add("activeQuiz"); //show quiz box
        result_box.classList.remove("activeResult"); //hide result box
        timeValue = 15;
        que_count = 0;
        que_numb = 1;
        userScore = 0;
        widthValue = 0;
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the text of timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }

    // if quitQuiz button clicked
    // quit_quiz.onclick = () => {
    //     window.location.reload(); //reload the current window
    // }

    next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");

    // if Next Que button clicked
    next_btn.onclick = () => {
        if (que_count < questions.length - 1) { //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
            showQuetions(que_count); //calling showQestions function
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        } else {
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }

    // getting questions and options from array
    function showQuetions(index) {
        const que_text = document.querySelector(".que_text");

        //creating a new span and div tag for question and option and passing the value using array index
        let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
            '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
        que_text.innerHTML = que_tag; //adding new span tag inside que_tag
        option_list.innerHTML = option_tag; //adding new div tag inside option_tag

        const option = option_list.querySelectorAll(".option");

        // set onclick attribute to all available options
        for (i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
    // creating the new div tags which for icons
    // let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    // let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

    //if user clicked on option
    // optionSelected(answer);
    function showResult() {
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.remove("activeQuiz"); //hide quiz box
        result_box.classList.add("activeResult"); //show result box
        const scoreText = result_box.querySelector(".score_text");
        if (userScore > 3) { // if user scored more than 3
            //creating a new span tag and passing the user score number and total question number
            let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
            scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
        } else if (userScore > 1) { // if user scored more than 1
            let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        } else { // if user scored less than 1
            let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        }
    }

    function startTimer(time) {
        counter = setInterval(timer, 1000);

        function timer() {
            timeCount.textContent = time; //changing the value of timeCount with time value
            time--; //decrement the time value
            if (time < 9) { //if timer is less than 9
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero; //add a 0 before time value
            }
            if (time < 0) { //if timer is less than 0
                clearInterval(counter); //clear counter
                timeText.textContent = "Time Off"; //change the time text to time off
                const allOptions = option_list.children.length; //getting all option items
                let correcAns = questions[que_count].answer; //getting correct answer from array
                for (i = 0; i < allOptions; i++) {
                    if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                        // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                        console.log("Time Off: Auto selected correct answer.");
                    }
                }
                for (i = 0; i < allOptions; i++) {
                    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
                }
                next_btn.classList.add("show"); //show the next button if user selected any option
            }
        }
    }

    function startTimerLine(time) {
        counterLine = setInterval(timer, 29);

        function timer() {
            time += 1; //upgrading time value with 1
            time_line.style.width = time + "px"; //increasing width of time_line with px by time value
            if (time > 549) { //if time value is greater than 549
                clearInterval(counterLine); //clear counterLine
            }
        }
    }

    function queCounter(index) {
        //creating a new span tag and passing the question number and total question
        let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
        bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
    }
}

function optionSelected(answer) {
    // clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}



/* quiz slide */


/* /////////////////////////////////////////////////////// */


/* quiz slide AR*/
function quizAR() {
    //selecting all required elements
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    option_list = document.querySelector(".option_list");
    const time_line = document.querySelector("header .time_line");
    const timeText = document.querySelector(".timer .time_left_txt");
    const timeCount = document.querySelector(".timer .timer_sec");


    /* 
    var splashScreen = document.querySelector('.splash');
    splashScreen.addEventListener('click', () => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.classList.add('hidden')
        }, 610)
    })
     */
    // if startQuiz button clicked
    start_btn.onclick = () => {
        info_box.classList.add("activeInfo"); //show info box
    }

    // if exitQuiz button clicked
    // exit_btn.onclick = () => {
    //     info_box.classList.remove("activeInfo"); //hide info box
    // }

    // if continueQuiz button clicked
    continue_btn.onclick = () => {
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.add("activeQuiz"); //show quiz box
        showQuetions(0); //calling showQestions function
        queCounter(1); //passing 1 parameter to queCounter
        startTimer(15); //calling startTimer function
        startTimerLine(0); //calling startTimerLine function
    }


    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");

    // if restartQuiz button clicked
    restart_quiz.onclick = () => {
        quiz_box.classList.add("activeQuiz"); //show quiz box
        result_box.classList.remove("activeResult"); //hide result box
        timeValue = 15;
        que_count = 0;
        que_numb = 1;
        userScore = 0;
        widthValue = 0;
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the text of timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }

    // if quitQuiz button clicked
    // quit_quiz.onclick = () => {
    //     window.location.reload(); //reload the current window
    // }

    next_btn = document.querySelector("footer .next_btn");
    const bottom_ques_counter = document.querySelector("footer .total_que");

    // if Next Que button clicked
    next_btn.onclick = () => {
        if (que_count < questionsAR.length - 1) { //if question count is less than total question length
            que_count++; //increment the que_count value
            que_numb++; //increment the que_numb value
            showQuetions(que_count); //calling showQestions function
            queCounter(que_numb); //passing que_numb value to queCounter
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            startTimer(timeValue); //calling startTimer function
            startTimerLine(widthValue); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn.classList.remove("show"); //hide the next button
        } else {
            clearInterval(counter); //clear counter
            clearInterval(counterLine); //clear counterLine
            showResult(); //calling showResult function
        }
    }

    // getting questions and options from array
    function showQuetions(index) {
        const que_text = document.querySelector(".que_text");

        //creating a new span and div tag for question and option and passing the value using array index
        let que_tag = '<span>' + questionsAR[index].numb + ". " + questionsAR[index].question + '</span>';
        let option_tag = '<div class="option"><span>' + questionsAR[index].options[0] + '</span></div>' +
            '<div class="option"><span>' + questionsAR[index].options[1] + '</span></div>' +
            '<div class="option"><span>' + questionsAR[index].options[2] + '</span></div>' +
            '<div class="option"><span>' + questionsAR[index].options[3] + '</span></div>';
        que_text.innerHTML = que_tag; //adding new span tag inside que_tag
        option_list.innerHTML = option_tag; //adding new div tag inside option_tag

        const option = option_list.querySelectorAll(".option");

        // set onclick attribute to all available options
        for (i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
    // creating the new div tags which for icons
    // let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    // let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

    //if user clicked on option
    // optionSelected(answer);
    function showResult() {
        info_box.classList.remove("activeInfo"); //hide info box
        quiz_box.classList.remove("activeQuiz"); //hide quiz box
        result_box.classList.add("activeResult"); //show result box
        const scoreText = result_box.querySelector(".score_text");
        if (userScore > 3) { // if user scored more than 3
            //creating a new span tag and passing the user score number and total question number
            let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questionsAR.length + '</p></span>';
            scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
        } else if (userScore > 1) { // if user scored more than 1
            let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questionsAR.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        } else { // if user scored less than 1
            let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questionsAR.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        }
    }

    function startTimer(time) {
        counter = setInterval(timer, 1000);

        function timer() {
            timeCount.textContent = time; //changing the value of timeCount with time value
            time--; //decrement the time value
            if (time < 9) { //if timer is less than 9
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero; //add a 0 before time value
            }
            if (time < 0) { //if timer is less than 0
                clearInterval(counter); //clear counter
                timeText.textContent = "Time Off"; //change the time text to time off
                const allOptions = option_list.children.length; //getting all option items
                let correcAns = questionsAR[que_count].answer; //getting correct answer from array
                for (i = 0; i < allOptions; i++) {
                    if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                        // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                        console.log("Time Off: Auto selected correct answer.");
                    }
                }
                for (i = 0; i < allOptions; i++) {
                    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
                }
                next_btn.classList.add("show"); //show the next button if user selected any option
            }
        }
    }

    function startTimerLine(time) {
        counterLine = setInterval(timer, 29);

        function timer() {
            time += 1; //upgrading time value with 1
            time_line.style.width = time + "px"; //increasing width of time_line with px by time value
            if (time > 549) { //if time value is greater than 549
                clearInterval(counterLine); //clear counterLine
            }
        }
    }

    function queCounter(index) {
        //creating a new span tag and passing the question number and total question
        let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questionsAR.length + '</p> Questions</span>';
        bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
    }
}

function optionSelectedAR(answer) {
    // clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questionsAR[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}



/* quiz slide AR */


/* form data */


/* form data */