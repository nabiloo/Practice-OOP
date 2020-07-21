function newPlay() {

    if (game.isCompleted()) {
        showScore()
    } else {

        let questionElement = document.getElementById("question")
        let gameQuestion = game.getQuestion().question
        questionElement.innerHTML = gameQuestion

        for (let i = 0; i < 2; i++) {
            let buttonElement = document.getElementById("btn" + i)
            let option = game.getQuestion().options[i]
            buttonElement.innerHTML = option
            selectedOption("btn" + i, option)
        }
        showProgress()
    }
}

function selectedOption(btn, option) {
    let button = document.getElementById(btn)
    button.onclick = function () {
        game.checkAnswer(option)
        newPlay()
    }
}


function showProgress() {
    let currentNumber = game.currentPlay + 1
    let progressElement = document.getElementById('progress')
    let result = "Question " + currentNumber + " of " + game.questions.length
    progressElement.innerHTML = result

}

function showScore() {
    let result = "<h1>Score</h1>"
    result += "<h2> Your score: " + game.score + "</h2>"
    let quizElement = document.getElementById('quiz')
    quizElement.innerHTML = result
}




const questions = [
    new Question("Dubai is located in africa?", ["True", "False"], "False"),
    new Question("Amsterdam is the capital of Netherland?", ["True", "False"], "True"),
    new Question("The five rings on the Olympic flag are interlocking?", ["True", "False"], "True"),
    new Question("Mount Kilimanjaro is the highest mountain in the world?", ["True", "False"], "False"),
    new Question("Sydney is the capital of Australia?", ["True", "False"], "False"),
    new Question("fish cannot blink?", ["True", "False"], "True"),
    new Question("Nepal is the only country in the world which does not have a rectangular flag?", ["True", "False"], "True"),
    new Question("Switzerland shares land borders with four other countries?", ["True", "False"], "False"),
]


let game = new Game(questions)



newPlay()



