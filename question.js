function Question(question, options, answer) {
    this.question = question
    this.options = options
    this.answer = answer
}

Question.prototype.isCorrect = function (giveAnswer) {
    return giveAnswer === this.answer
}