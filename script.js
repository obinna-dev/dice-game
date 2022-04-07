
let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1ScoreBoard = document.getElementById("player1Scoreboard")
const player2ScoreBoard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "inline"
}

rollBtn.addEventListener("click", function()  {
    const randomNumber = Math.floor(Math.random() *6 ) +1

    if (player1Turn) {
        player1Dice.textContent = randomNumber
        message.innerHTML = `Player 1 rolled ${randomNumber}`
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player1Score += randomNumber
        player1ScoreBoard.textContent = player1Score
    } else {
        player2Dice.textContent = randomNumber
        message.innerHTML = `Player 2 rolled ${randomNumber}`
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        player2Score += randomNumber
        player2ScoreBoard.textContent = player2Score
    }
    player1Turn = !player1Turn

    if (player1Score >= 20) {
        message.innerHTML = `Player 1 has won!`
        showDisplayButton()
    }

    if (player2Score >=20)  {
        message.innerHTML = `Player 2 has won!`
        showDisplayButton()
    }
})

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function() {
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    randomNumber = 0
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    message.innerHTML = `Player 1 Turn`
    rollBtn.style.display = "inline"
    resetBtn.style.display = "none"
    player1ScoreBoard.textContent = "0"
    player2ScoreBoard.textContent = "0"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
}