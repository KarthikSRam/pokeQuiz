var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new Schema({
  // email: String,
  username: String,
  password: String,
  location: String,
  scores: [Number]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = User;
