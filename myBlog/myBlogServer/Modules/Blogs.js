const mongoose = require ("./Connection.js");

const {Schema} = mongoose;  // ı used like in decumentation , I did not used the format which used in session

const blogsSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    blogText: String,
    ownerOfBlog:   String,
    userId: String
   
  });

  const blogs = mongoose.model('blogs', blogsSchema);

  module.exports = blogs;
