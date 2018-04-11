var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    db = require("./models"),
    User = db.User,
    Question = db.Question,

    //  NEW ADDITIONS
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


app.set("views", __dirname + '/views');    // Views directory
app.use(express.static('public'));          // Static directory
app.use(bodyParser.urlencoded({ extended: true })); // req.body
app.set('view engine', 'ejs')

// middleware for auth
app.use(cookieParser());
app.use(session({
  secret: 'karthikisaboss',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Set CORS Headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//ROUTES

app.get('/', function(req, res) {
 res.render("index", {user: req.user});
});

// show login view
app.get('/login', function(req, res) {
 res.render('login', {user: req.user});
});

app.get('/signup', function(req, res) {
  res.render('login', {user: req.user});
});

app.post('/login', passport.authenticate('local'), function(req, res) {
  console.log(req.user);
  res.render('index', {user: req.user});
});

// sign up new user, then log them in
// hashes and salts password, saves new user to db
app.post('/signup', function(req, res) {
  User.register(new User({ username: req.body.username, location: req.body.location }), req.body.password,
    function (err, newUser) {
      if (err){
        console.log(err)
      } else {
        passport.authenticate('local')(req, res, function() {
          res.render('index', {user: newUser});
        })
    }

  });
});

app.get('/logout', function(req, res) {
  console.log("BEFORE logout", JSON.stringify(req.user));
  req.logout();
  console.log("AFTER logout", JSON.stringify(req.user));
  res.redirect('/');
});

//A developer route to add new question to the database
app.get('/createQuestion', function(req, res) {
  res.render('questionForm', {user: req.user});
})

//Route that creates the question
app.post('/questions', function(req, res) {
  var newQues = new db.Question({
    question: req.body.question,
    image: req.body.image,
    options: [req.body.option1, req.body.option2, req.body.option3, req.body.option4],
    correct: req.body.correct
  });

  newQues.save(function(err, savedQuestion) {
    if(err) { return console.log(err) }
    console.log("saved new question: ", savedQuestion);
  })
})

//Start the server
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
