
const mongoose = require("mongoose");
const Book = require("./schema");


//Model
const bookModel = mongoose.model("book", Book);
 

module.exports = bookModel;