const Book = require('../models/model.book');

exports.listBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}

exports.createBook = async (req, res) => {
    try {
        const newBook = new Book({
            name: req.body.name
        });

        await newBook.save();
        res.status(201).json("Book created");
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json('Book deleted');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
}