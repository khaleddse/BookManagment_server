const Book = require("../models/book");

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, createdBy } = req.body;
    const book = await Book.create({ title, author, createdBy });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: "Failed to create book" });
  }
};
