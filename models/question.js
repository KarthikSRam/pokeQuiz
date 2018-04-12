var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var QuestionSchema = new Schema({
  question: String,
  image: String,
  options: [String],
  correct: Number,
  questionNum: Number
})

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
