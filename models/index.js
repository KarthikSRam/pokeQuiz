var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/pokequiz-app" );
mongoose.Promise = global.Promise;


module.exports.User = require("./user");
module.exports.Question = require("./question");
module.exports.Quiz = require("./quiz");
