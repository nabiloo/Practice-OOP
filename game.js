function Game(questions) {
    this.questions = questions
    this.currentPlay = 0
    this.score = 0
}


Game.prototype.getQuestion = function () {
    return this.questions[this.currentPlay]
}


Game.prototype.checkAnswer = function (giveAnswer) {
    if (this.getQuestion().isCorrect(giveAnswer)) {
        this.score++
    }
    this.currentPlay++
}


Game.prototype.isCompleted = function () {
    return this.currentPlay === questions.length
}