const mongoose = require('./connection');

const bookSchema = new mongoose.Schema({
    // title: String,
    // author: String,
    // completed: Boolean

    title: { type: String, required: true},
    author: { type: String, required: true},
    completed: Boolean
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;