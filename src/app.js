const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/wake-up-early");

const routineSchema = mongoose.Schema({
    name: String,
    description: String,
    author: String,
    time: String,
    when: String
});

const Routine = mongoose.model("Routine", routineSchema);

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
})