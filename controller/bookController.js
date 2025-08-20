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

    // Validation check for required fields
    if (!title || !author || !createdBy) {
      return res
        .status(400)
        .json({ error: "Title, author, and createdBy are required fields." });
    }

    const book = await Book.create({ title, author, createdBy });
    res.status(201).json({ book });
  } catch (err) {
    console.log(err, "err");
    res.status(500).json({ error: "Failed to create book" });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, createdBy } = req.body;

  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Validation check for at least one field
    if (!title && !author && !createdBy) {
      return res
        .status(400)
        .json({
          message:
            "At least one field (title, author, or createdBy) is required for update.",
        });
    }

    // Update fields only if they exist in the request body
    if (title !== undefined) {
      book.title = title;
    }
    if (author !== undefined) {
      book.author = author;
    }
    if (createdBy !== undefined) {
      book.createdBy = createdBy;
    }

    await book.save();

    res.json({ message: "Book updated", book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating book" });
  }
};
exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    await book.destroy();

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting book" });
  }
};
exports.getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json({ book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `Error to get the book with id: ${id}` });
  }
};
