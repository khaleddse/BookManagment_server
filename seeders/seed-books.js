const Book = require("../models/book");

const seedBooks = async () => {
  const count = await Book.count();
  if (count === 0) {
    await Book.bulkCreate([
      { title: "Clean Code", author: "Robert C. Martin", createdBy: "Admin" },
      {
        title: "The Pragmatic Programmer",
        author: "Andy Hunt",
        createdBy: "Admin",
      },
      { title: "Design Patterns", author: "Erich Gamma", createdBy: "Admin" },
    ]);
    console.log("Default books seeded!");
  } else {
    console.log("Books already exist, skipping seeding.");
  }
};

module.exports = seedBooks;
