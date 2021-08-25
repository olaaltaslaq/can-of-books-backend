const axios = require("axios");
module.exports = getData; 

const bookModel = require("./model.js");

function getData(req, res) {
    let email = req.query.email;
  
    bookModel.find({ email: email }, function (error, books) {
      if (error) {
        res.send("NO DATA :(");
      } else {
        // console.log(books);
        res.send(books);
      }
    });
  }