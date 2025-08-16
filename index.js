const express = require("express");
const { pool } = require("./utils/db");
const app = express();
require("dotenv").config();

const port = process.env.APP_PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/db-test", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();
    res.send(`Database connected at: ${result.rows[0].now}`);
  } catch (err) {
    console.error("Error connecting to database", err);
    res.status(500).send("Error connecting to database");
  }
});
