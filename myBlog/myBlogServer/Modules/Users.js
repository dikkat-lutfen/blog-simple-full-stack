const mongoose = require ("./Connection.js");

const {Schema} = mongoose;

const usersSchema = new Schema({
    username: String, // String is shorthand for {type: String}
    password: String,
    userImageUrl:   String,
   
  });

  const users = mongoose.model('users', usersSchema);

  module.exports = users;
