var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var QuestionSchema = new Schema({
  question: String,
  options: [String],
  correct: Number
})

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
