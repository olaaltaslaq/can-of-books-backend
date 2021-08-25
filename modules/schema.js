
const mongoose = require("mongoose");


mongoose.connect(`${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  
  //Schema
  const Book = new mongoose.Schema({
    title: String,
    description: String,
    email: String,
  });




  module.exports = Book;

