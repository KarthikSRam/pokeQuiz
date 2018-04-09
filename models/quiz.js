var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    question = require('./question')

var QuizSchema = new Schema({
  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
  score: Number
})

var Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;
