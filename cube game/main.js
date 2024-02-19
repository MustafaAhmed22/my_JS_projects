var elDiceOne = document.getElementById('dice1');
var roll_btn = document.getElementById('roll');

roll_btn.addEventListener("click", function () {
    elDiceOne.classList.remove('show-1');
    elDiceOne.classList.remove('show-2');
    elDiceOne.classList.remove('show-3');
    elDiceOne.classList.remove('show-4');
    elDiceOne.classList.remove('show-5');
    elDiceOne.classList.remove('show-6');

    var diceOne = Math.floor((Math.random() * 6) + 1);
    /* red */
    if (diceOne == 1) {

        let red1 = document.getElementById('red-1')
        let red2 = document.getElementById('red-2')
        let red3 = document.getElementById('red-3')
        let red4 = document.getElementById('red-4')
        let red5 = document.getElementById('red-5')
        let red6 = document.getElementById('red-6')
        console.log(red1.children[0].classList.contains("show-player"))
        if (red1.children[0].classList.contains("show-player")) {
            red1.children[0].classList.remove("show-player")
            red1.children[0].classList.add('hide-player');
            red2.children[0].classList.remove("hide-player")
            red2.children[0].classList.add('show-player');
        } else if (red2.children[0].classList.contains("show-player")) {
            red2.children[0].classList.remove("show-player")
            red2.children[0].classList.add('hide-player');
            red3.children[0].classList.remove("hide-player")
            red3.children[0].classList.add('show-player');
        } else if (red3.children[0].classList.contains("show-player")) {
            red3.children[0].classList.remove("show-player")
            red3.children[0].classList.add('hide-player');
            red4.children[0].classList.remove("hide-player")
            red4.children[0].classList.add('show-player');
        } else if (red4.children[0].classList.contains("show-player")) {
            red4.children[0].classList.remove("show-player")
            red4.children[0].classList.add('hide-player');
            red5.children[0].classList.remove("hide-player")
            red5.children[0].classList.add('show-player');
        } else if (red5.children[0].classList.contains("show-player")) {
            red5.children[0].classList.remove("show-player")
            red5.children[0].classList.add('hide-player');
            red6.children[0].classList.remove("hide-player")
            red6.children[0].classList.add('show-player');

            setTimeout(() => {
                playerWins('red')
                window.location.reload()
            }, 500);

        } else if (red6.children[0].classList.contains("show-player")) {

        }
    }
    /*red*/

    /* orange */
    if (diceOne == 2) {
        let orange1 = document.getElementById('orange-1')
        let orange2 = document.getElementById('orange-2')
        let orange3 = document.getElementById('orange-3')
        let orange4 = document.getElementById('orange-4')
        let orange5 = document.getElementById('orange-5')
        let orange6 = document.getElementById('orange-6')
        console.log(orange1.children[0].classList.contains("show-player"))
        if (orange1.children[0].classList.contains("show-player")) {
            orange1.children[0].classList.remove("show-player")
            orange1.children[0].classList.add('hide-player');
            orange2.children[0].classList.remove("hide-player")
            orange2.children[0].classList.add('show-player');
        } else if (orange2.children[0].classList.contains("show-player")) {
            orange2.children[0].classList.remove("show-player")
            orange2.children[0].classList.add('hide-player');
            orange3.children[0].classList.remove("hide-player")
            orange3.children[0].classList.add('show-player');
        } else if (orange3.children[0].classList.contains("show-player")) {
            orange3.children[0].classList.remove("show-player")
            orange3.children[0].classList.add('hide-player');
            orange4.children[0].classList.remove("hide-player")
            orange4.children[0].classList.add('show-player');
        } else if (orange4.children[0].classList.contains("show-player")) {
            orange4.children[0].classList.remove("show-player")
            orange4.children[0].classList.add('hide-player');
            orange5.children[0].classList.remove("hide-player")
            orange5.children[0].classList.add('show-player');
        } else if (orange5.children[0].classList.contains("show-player")) {
            orange5.children[0].classList.remove("show-player")
            orange5.children[0].classList.add('hide-player');
            orange6.children[0].classList.remove("hide-player")
            orange6.children[0].classList.add('show-player');

            setTimeout(() => {
                playerWins('orange')
                window.location.reload()
            }, 500);
        } else if (orange6.children[0].classList.contains("show-player")) {

        }
    }
    /*orange*/

    /* black */
    if (diceOne == 3) {
        let black1 = document.getElementById('black-1')
        let black2 = document.getElementById('black-2')
        let black3 = document.getElementById('black-3')
        let black4 = document.getElementById('black-4')
        let black5 = document.getElementById('black-5')
        let black6 = document.getElementById('black-6')
        console.log(black1.children[0].classList.contains("show-player"))
        if (black1.children[0].classList.contains("show-player")) {
            black1.children[0].classList.remove("show-player")
            black1.children[0].classList.add('hide-player');
            black2.children[0].classList.remove("hide-player")
            black2.children[0].classList.add('show-player');
        } else if (black2.children[0].classList.contains("show-player")) {
            black2.children[0].classList.remove("show-player")
            black2.children[0].classList.add('hide-player');
            black3.children[0].classList.remove("hide-player")
            black3.children[0].classList.add('show-player');
        } else if (black3.children[0].classList.contains("show-player")) {
            black3.children[0].classList.remove("show-player")
            black3.children[0].classList.add('hide-player');
            black4.children[0].classList.remove("hide-player")
            black4.children[0].classList.add('show-player');
        } else if (black4.children[0].classList.contains("show-player")) {
            black4.children[0].classList.remove("show-player")
            black4.children[0].classList.add('hide-player');
            black5.children[0].classList.remove("hide-player")
            black5.children[0].classList.add('show-player');
        } else if (black5.children[0].classList.contains("show-player")) {
            black5.children[0].classList.remove("show-player")
            black5.children[0].classList.add('hide-player');
            black6.children[0].classList.remove("hide-player")
            black6.children[0].classList.add('show-player');

            setTimeout(() => {
                playerWins('black')
                window.location.reload()
            }, 500);
        } else if (black6.children[0].classList.contains("show-player")) {

        }
    }
    /*black*/
    /* blue */
    if (diceOne == 4) {

        let blue1 = document.getElementById('blue-1')
        let blue2 = document.getElementById('blue-2')
        let blue3 = document.getElementById('blue-3')
        let blue4 = document.getElementById('blue-4')
        let blue5 = document.getElementById('blue-5')
        let blue6 = document.getElementById('blue-6')
        console.log(blue1.children[0].classList.contains("show-player"))
        if (blue1.children[0].classList.contains("show-player")) {
            blue1.children[0].classList.remove("show-player")
            blue1.children[0].classList.add('hide-player');
            blue2.children[0].classList.remove("hide-player")
            blue2.children[0].classList.add('show-player');
        } else if (blue2.children[0].classList.contains("show-player")) {
            blue2.children[0].classList.remove("show-player")
            blue2.children[0].classList.add('hide-player');
            blue3.children[0].classList.remove("hide-player")
            blue3.children[0].classList.add('show-player');
        } else if (blue3.children[0].classList.contains("show-player")) {
            blue3.children[0].classList.remove("show-player")
            blue3.children[0].classList.add('hide-player');
            blue4.children[0].classList.remove("hide-player")
            blue4.children[0].classList.add('show-player');
        } else if (blue4.children[0].classList.contains("show-player")) {
            blue4.children[0].classList.remove("show-player")
            blue4.children[0].classList.add('hide-player');
            blue5.children[0].classList.remove("hide-player")
            blue5.children[0].classList.add('show-player');
        } else if (blue5.children[0].classList.contains("show-player")) {
            blue5.children[0].classList.remove("show-player")
            blue5.children[0].classList.add('hide-player');
            blue6.children[0].classList.remove("hide-player")
            blue6.children[0].classList.add('show-player');

            setTimeout(() => {
                playerWins('blue')
                window.location.reload()
            }, 500);
        } else if (blue6.children[0].classList.contains("show-player")) {

        }
    }
    /*blue*/
    /* yellow */
    if (diceOne == 5) {

        let yellow1 = document.getElementById('yellow-1')
        let yellow2 = document.getElementById('yellow-2')
        let yellow3 = document.getElementById('yellow-3')
        let yellow4 = document.getElementById('yellow-4')
        let yellow5 = document.getElementById('yellow-5')
        let yellow6 = document.getElementById('yellow-6')
        console.log(yellow1.children[0].classList.contains("show-player"))
        if (yellow1.children[0].classList.contains("show-player")) {
            yellow1.children[0].classList.remove("show-player")
            yellow1.children[0].classList.add('hide-player');
            yellow2.children[0].classList.remove("hide-player")
            yellow2.children[0].classList.add('show-player');
        } else if (yellow2.children[0].classList.contains("show-player")) {
            yellow2.children[0].classList.remove("show-player")
            yellow2.children[0].classList.add('hide-player');
            yellow3.children[0].classList.remove("hide-player")
            yellow3.children[0].classList.add('show-player');
        } else if (yellow3.children[0].classList.contains("show-player")) {
            yellow3.children[0].classList.remove("show-player")
            yellow3.children[0].classList.add('hide-player');
            yellow4.children[0].classList.remove("hide-player")
            yellow4.children[0].classList.add('show-player');
        } else if (yellow4.children[0].classList.contains("show-player")) {
            yellow4.children[0].classList.remove("show-player")
            yellow4.children[0].classList.add('hide-player');
            yellow5.children[0].classList.remove("hide-player")
            yellow5.children[0].classList.add('show-player');
        } else if (yellow5.children[0].classList.contains("show-player")) {
            yellow5.children[0].classList.remove("show-player")
            yellow5.children[0].classList.add('hide-player');
            yellow6.children[0].classList.remove("hide-player")
            yellow6.children[0].classList.add('show-player');

            setTimeout(() => {
              
                playerWins('yellow')
                window.location.reload()
            }, 500);
        } else if (yellow6.children[0].classList.contains("show-player")) {

        }
    }
    /*yellow*/

    /* green */
    if (diceOne == 6) {

        let green1 = document.getElementById('green-1')
        let green2 = document.getElementById('green-2')
        let green3 = document.getElementById('green-3')
        let green4 = document.getElementById('green-4')
        let green5 = document.getElementById('green-5')
        let green6 = document.getElementById('green-6')
        console.log(green1.children[0].classList.contains("show-player"))
        if (green1.children[0].classList.contains("show-player")) {
            green1.children[0].classList.remove("show-player")
            green1.children[0].classList.add('hide-player');
            green2.children[0].classList.remove("hide-player")
            green2.children[0].classList.add('show-player');
        } else if (green2.children[0].classList.contains("show-player")) {
            green2.children[0].classList.remove("show-player")
            green2.children[0].classList.add('hide-player');
            green3.children[0].classList.remove("hide-player")
            green3.children[0].classList.add('show-player');
        } else if (green3.children[0].classList.contains("show-player")) {
            green3.children[0].classList.remove("show-player")
            green3.children[0].classList.add('hide-player');
            green4.children[0].classList.remove("hide-player")
            green4.children[0].classList.add('show-player');
        } else if (green4.children[0].classList.contains("show-player")) {
            green4.children[0].classList.remove("show-player")
            green4.children[0].classList.add('hide-player');
            green5.children[0].classList.remove("hide-player")
            green5.children[0].classList.add('show-player');
        } else if (green5.children[0].classList.contains("show-player")) {
            green5.children[0].classList.remove("show-player")
            green5.children[0].classList.add('hide-player');
            green6.children[0].classList.remove("hide-player")
            green6.children[0].classList.add('show-player');

            setTimeout(() => {
                playerWins('green')
                window.location.reload()
            }, 500);
        } else if (green6.children[0].classList.contains("show-player")) {

        }
    }
    /*green*/
    /* dice animation */
    if (diceOne == 1) {
        elDiceOne.classList.add('show-1');
        elDiceOne.classList.remove('show-2');
        elDiceOne.classList.remove('show-3');
        elDiceOne.classList.remove('show-4');
        elDiceOne.classList.remove('show-5');
        elDiceOne.classList.remove('show-6');
    } else if (diceOne == 2) {
        elDiceOne.classList.remove('show-1');
        elDiceOne.classList.add('show-2');
        elDiceOne.classList.remove('show-3');
        elDiceOne.classList.remove('show-4');
        elDiceOne.classList.remove('show-5');
        elDiceOne.classList.remove('show-6');
    } else if (diceOne == 3) {
        elDiceOne.classList.remove('show-1');
        elDiceOne.classList.remove('show-2');
        elDiceOne.classList.add('show-3');
        elDiceOne.classList.remove('show-4');
        elDiceOne.classList.remove('show-5');
        elDiceOne.classList.remove('show-6');
    } else if (diceOne == 4) {
        elDiceOne.classList.remove('show-1');
        elDiceOne.classList.remove('show-2');
        elDiceOne.classList.remove('show-3');
        elDiceOne.classList.add('show-4');
        elDiceOne.classList.remove('show-5');
        elDiceOne.classList.remove('show-6');
    } else if (diceOne == 5) {
        elDiceOne.classList.remove('show-1');
        elDiceOne.classList.remove('show-2');
        elDiceOne.classList.remove('show-3');
        elDiceOne.classList.remove('show-4');
        elDiceOne.classList.add('show-5');
        elDiceOne.classList.remove('show-6');
    } else if (diceOne == 6) {
        elDiceOne.classList.remove('show-1');
        elDiceOne.classList.remove('show-2');
        elDiceOne.classList.remove('show-3');
        elDiceOne.classList.remove('show-4');
        elDiceOne.classList.remove('show-5');
        elDiceOne.classList.add('show-6');
    }
    console.log(diceOne);
});
// Function to update the scoreboard
function updateScoreboard(playerColor) {
    // Retrieve the current score from localStorage or default to 0
    let score = localStorage.getItem(playerColor) || 0;

    // Increment the score by 1
    score++;

    // Update the score in localStorage
    localStorage.setItem(playerColor, score);

    // Display the updated score on the webpage
    document.getElementById(playerColor + '-score').textContent = score;
}

// Function to initialize the scoreboard when the page loads
function initScoreboard() {
    // Loop through each player color
    ['red', 'orange', 'black', 'blue', 'yellow', 'green'].forEach(function (color) {
        // Retrieve the score from localStorage or default to 0
        let score = localStorage.getItem(color) || 0;

        // Display the score on the webpage
        document.getElementById(color + '-score').textContent = score;
    });
}

// Call initScoreboard when the page loads to display the initial scores
initScoreboard();

// Update the scoreboard when a player wins
function playerWins(playerColor) {
    updateScoreboard(playerColor);
    alert(playerColor + ' wins');
    window.location.reload();
}
document.getElementById('reset-score-btn').addEventListener('click', function () {
    localStorage.removeItem('red');
    localStorage.removeItem('green');
    localStorage.removeItem('black');
    localStorage.removeItem('blue');
    localStorage.removeItem('yellow');
    localStorage.removeItem('orange');
    document.getElementById('red-score').textContent = '0';
    document.getElementById('orange-score').textContent = '0';
    document.getElementById('black-score').textContent = '0';
    document.getElementById('blue-score').textContent = '0';
    document.getElementById('yellow-score').textContent = '0';
    document.getElementById('green-score').textContent = '0';
});