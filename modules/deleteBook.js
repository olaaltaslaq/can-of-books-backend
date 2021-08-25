const axios = require("axios");
module.exports = deleteBook;

const bookModel = require("./model.js");

function deleteBook(req, res) {
  let email = req.query.email;
  let bookID = req.params.id;

  bookModel.remove({ _id: bookID }, (error, bookData) => {
    if (error) {
      res.status(403).send("error in deleting the data");
    } else {
      console.log("data deleted", bookData);
      bookModel.find({ email: email }, function (err, books) {
        if (err) {
          console.log("error in getting the data");
        } else {
          // console.log(books);
          res.send(books);
        }
      });
    }
  });
}


