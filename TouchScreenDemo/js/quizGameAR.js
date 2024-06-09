let timeValueAR = 15;
let que_countAR = 0;
let que_numbAR = 1;
let userScoreAR = 0;
let counterAR;
let counterLineAR;
let option_listAR;
let next_btn_AR;
let widthValueAR = 0;
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


/* quiz slide AR*/

function quizAR() {

    //selecting all required elements
    const start_btn_AR = document.querySelector(".start_btn_AR button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const result_box = document.querySelector(".result_box");
    option_listAR = document.querySelector(".option_list");
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
    start_btn_AR.onclick = () => {
        info_box.classList.add("activeInfo"); //show info box
        console.log('start btn')
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
        timeValueAR = 15;
        que_countAR = 0;
        que_numbAR = 1;
        userScoreAR = 0;
        widthValueAR = 0;
        showQuetions(que_countAR); //calling showQestions function
        queCounter(que_numbAR); //passing que_numb value to queCounter
        clearInterval(counterAR); //clear counter
        clearInterval(counterLineAR); //clear counterLine
        startTimer(timeValueAR); //calling startTimer function
        startTimerLine(widthValueAR); //calling startTimerLine function
        timeText.textContent = "الوقت المتبقى"; //change the text of timeText to Time Left
        next_btn_AR.classList.remove("show"); //hide the next button
    }

    // if quitQuiz button clicked
    // quit_quiz.onclick = () => {
    //     window.location.reload(); //reload the current window
    // }

    next_btn_AR = document.querySelector("footer .next_btn_AR");
    const bottom_ques_counter = document.querySelector("footer .total_que");

    // if Next Que button clicked
    next_btn_AR.onclick = () => {
        if (que_countAR < questionsAR.length - 1) { //if question count is less than total question length
            que_countAR++; //increment the que_count value
            que_numbAR++; //increment the que_numb value
            showQuetions(que_countAR); //calling showQestions function
            queCounter(que_numbAR); //passing que_numb value to queCounter
            clearInterval(counterAR); //clear counter
            clearInterval(counterLineAR); //clear counterLine
            startTimer(timeValueAR); //calling startTimer function
            startTimerLine(widthValueAR); //calling startTimerLine function
            timeText.textContent = "Time Left"; //change the timeText to Time Left
            next_btn_AR.classList.remove("show"); //hide the next button
        } else {
            clearInterval(counterAR); //clear counter
            clearInterval(counterLineAR); //clear counterLine
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
        option_listAR.innerHTML = option_tag; //adding new div tag inside option_tag

        const option = option_listAR.querySelectorAll(".option");

        // set onclick attribute to all available options
        for (i = 0; i < option.length; i++) {
            option[i].setAttribute("onclick", "optionSelectedAR(this)");
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
        if (userScoreAR > 3) { // if user scored more than 3
            //creating a new span tag and passing the user score number and total question number
            let scoreTag = '<span>مبرووك! 🎉, حصلت على <p>' + userScoreAR + '</p> من <p>' + questionsAR.length + '</p></span>';
            scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
        } else if (userScoreAR > 1) { // if user scored more than 1
            let scoreTag = '<span>حصلت على 😎<p>' + userScoreAR + '</p> من <p>' + questionsAR.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        } else { // if user scored less than 1
            let scoreTag = '<span>نأسف لك 😐, حصلت على <p>' + userScoreAR + '</p> من <p>' + questionsAR.length + '</p></span>';
            scoreText.innerHTML = scoreTag;
        }
    }

    function startTimer(time) {
        counterAR = setInterval(timer, 1000);

        function timer() {
            timeCount.textContent = time; //changing the value of timeCount with time value
            time--; //decrement the time value
            if (time < 9) { //if timer is less than 9
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero; //add a 0 before time value
            }
            if (time < 0) { //if timer is less than 0
                clearInterval(counterAR); //clear counter
                timeText.textContent = "الوقت المتبقى"; //change the time text to time off

                const allOptionsAR = option_listAR.children.length; //getting all option items

                let correcAns = questionsAR[que_countAR].answer; //getting correct answer from array
                for (i = 0; i < allOptionsAR; i++) {
                    if (option_listAR.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                        option_listAR.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                        // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                        console.log("Time Off: Auto selected correct answer.");
                    }
                }
                for (i = 0; i < allOptionsAR; i++) {
                    option_listAR.children[i].classList.add("disabled"); //once user select an option then disabled all options
                }
                next_btn_AR.classList.add("show"); //show the next button if user selected any option
            }
        }
    }

    function startTimerLine(time) {
        counterLineAR = setInterval(timer, 29);

        function timer() {
            time += 1; //upgrading time value with 1
            time_line.style.width = time + "px"; //increasing width of time_line with px by time value
            if (time > 549) { //if time value is greater than 549
                clearInterval(counterLineAR); //clear counterLine
            }
        }
    }

    function queCounter(index) {
        //creating a new span tag and passing the question number and total question
        let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questionsAR.length + '</p> سؤال</span>';
        bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
    }
}

function optionSelectedAR(answer) {
    // clearInterval(counter); //clear counter
    // clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questionsAR[que_countAR].answer; //getting correct answer from array
    const allOptionsAR = option_listAR.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScoreAR += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        // answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScoreAR);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        // answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for (i = 0; i < allOptionsAR; i++) {
            if (option_listAR.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer 
                option_listAR.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                // option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptionsAR; i++) {
        option_listAR.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_AR.classList.add("show"); //show the next button if user selected any option
}




/* quiz slide AR*/