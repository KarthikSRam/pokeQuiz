var db = require('./models');

var questionsList = [
  {
    question: "Which of these is Tyranitar's mega evolution?",
    image: "/images/Tyranitar.png",
    options: [
      "/images/fakeMegaTyranitar.png",
      "/images/fakeMegaTyranitar2.png",
      "/images/megaTyranitar.png",
      "Tyranitar doesn\'t evolve"
    ],
    correct: 2,
    questionNum: 1
  }
]

db.Question.remove({}, function(err, questions) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('removed all questions');
  db.Question.create(questionsList, function(err, questions){
    if (err) {
      console.log(err);
      return;
    }
    console.log('created all questions');
  })
})
