const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const pool = require("./database");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server up and running..!");
  console.log("server is running");
});

app.post("/addMessage", async (req, res) => {
  try {
    const { fName, lName, email, phone, subject, message } = req.body;
    const result = await pool.query(
      "INSERT INTO forminput (fName, lName, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *",
      [fName, lName, email, phone, subject, message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
