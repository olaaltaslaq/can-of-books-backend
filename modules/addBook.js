const axios = require("axios");
module.exports = addBook;

const bookModel = require("./model.js");

async function addBook(req, res) {
  let { email, title, description } = req.body;

  await bookModel.create({ title, description, email });

  bookModel.find({ email: email }, function (err, books) {
    if (err) {
      console.log("error in getting the data");
    } else {
      console.log(books);
      res.status(201).send(books);
    }
  });
}
