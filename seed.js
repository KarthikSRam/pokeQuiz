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
  },

  {
    question: "Which of these Pokemon is featured in this picture?",
    image: "/images/cyndaquil-line.png",
    options: [
      "Chimchar",
      "Cyndaquil",
      "Infernape",
      "Incineroar"
    ],
    correct: 1,
    questionNum: 2
  },

  {
    question: "Name this Pokemon",
    image: "/images/Klefki.png",
    options: [
      "Keymon",
      "Klepto",
      "Jingles",
      "Klefki"
    ],
    correct: 3,
    questionNum: 3
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
