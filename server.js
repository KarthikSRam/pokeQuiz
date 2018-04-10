var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    db = require("./models"),
    User = db.User,

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

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  User.authenticate()
));
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
app.get('/login', function (req, res) {
 res.render('login', {user: req.user});
});

//Start the server
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
