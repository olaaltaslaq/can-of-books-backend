"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
// const mongoose = require("mongoose");
const PORT = process.env.PORT;
const server = express();
server.use(cors());
server.use(express.json());

const bookModel = require("./modules/model.js");
const getData = require("./modules/getData.js");
const addBook = require("./modules/addBook.js");
const deleteBook = require("./modules/deleteBook.js");
const updateBook = require("./modules/updateBook.js");
const logger = require("./logger");


server.use(logger);


function seedDataCollection() {
  const book1 = new bookModel({
    title:
      "Numbers Don't Lie: 71 Stories to Help Us Understand the Modern World",
    description:
      "An essential guide to understanding how numbers reveal the true state of our world—exploring a wide range of topics including energy, the environment, technology, transportation, and food production.",
    email: "olaaltaslaq@gmail.com",
  });

  const book2 = new bookModel({
    title: "Blue Ocean Strategy",
    description:
      "Drawing on more than a decade of new research, Blue Ocean Shift is the definitive guide to help you move beyond competing, inspire your people’s confidence, and seize new growth.",
    email: "olaaltaslaq@gmail.com",
  });

  const book3 = new bookModel({
    title: "A Short History of Nearly Everything",
    description:
      "In Bryson's biggest book, he confronts his greatest challenge: to understand—and, if possible, answer—the oldest, biggest questions we have posed about the universe and ourselves.",
    email: "olaaltaslaq@gmail.com",
  });

  const book4 = new bookModel({
    title: "The Man Who Mistook His Wife for a Hat",
    description:
      "The Man Who Mistook His Wife for a Hat and Other Clinical Tales is a 1985 book by neurologist Oliver Sacks describing the case histories of some of his patients.",
    email: "olaaltaslaq@gmail.com",
  });

  const book5 = new bookModel({
    title: "Origins: Fourteen Billion Years of Cosmic Evolution",
    description:
      "Origin's explores cosmic science's stunning new insights into the formation and evolution of our universe— of the cosmos, of galaxies and galaxy clusters, of stars within galaxies, of orbiting planets, and of different forms of life.",
    email: "olaaltaslaq@gmail.com",
  });

  book1.save();
  book2.save();
  book3.save();
  book4.save();
  book5.save();
}

// seedDataCollection();


server.get("/", home); // HOME
server.get("/books", getData); // getting the books data from the DB
server.post("/addbook", addBook); // Adding new books
server.delete("/deletebook/:id", deleteBook); // deleting books
server.put('/updateBook/:id',updateBook);  // updating books

function home(req, res) {
  res.send("home");
}

server.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
