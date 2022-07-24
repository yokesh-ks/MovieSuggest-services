const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();

app.use[cors()];
app.use(express.json());

// Allows origin Allow origin and Methods
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// mongoose connection
const connectDB = require("./connect");

const movieModel = require("./movies");

app.get("/", async (req, res) => {
  await movieModel
    .find()
    .skip(20)
    .limit(10)
    .then((movies) => res.json({ data: movies, total: movies.length }));
});

app.post("/", async (req, res) => {
  try {
    const { newMovie } = req.body;

    console.log(newMovie);
    await movieModel.create(newMovie);
    res.json("Movie Added");
  } catch (error) {
    console.log(error);
    res.json("Movie failed to add");
  }
});

app.listen(port, function () {
  connectDB();
  console.log("express is running");
});
