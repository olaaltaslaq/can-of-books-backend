const axios = require("axios");
module.exports = updateBook;

const bookModel = require("./model.js");

function updateBook(req, res) {
    let {email,title,description} = req.body;
    let bookID = req.params.id;
    // console.log(req.body)
    bookModel.findOne({_id:bookID},(error,bookData) =>{
    

        bookData.email = email;
        bookData.title= title;
        bookData.description= description;

        
        bookData.save()
        .then(()=>{
            bookModel.find({ email: email }, function (err, books) {
                if (err) {
                    console.log('error in getting the data')
                } else {
                    // console.log(ownerData);
                    res.send(books)
                }
            })
        }).catch(error=>{
            console.log('error in saving ')
        })
    })
}