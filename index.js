const express = require("express");
const { sequelize } = require("./utils/db");
const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middlewares/errorHandler");
const seedBooks = require("./seeders/seed-books");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/books", bookRoutes);

app.use(errorHandler);

const PORT = process.env.APP_PORT || 3000;

sequelize.sync({ force: false }).then(async () => {
  await seedBooks(); // seed default data if empty
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
