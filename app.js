const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/wake-up-early");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routineSchema = mongoose.Schema({
    name: String,
    description: String,
    author: String,
    time: String,
    when: String
});

const Routine = mongoose.model("Routine", routineSchema);

const routineTest = new Routine({
    name: "test",
    description: "A simple test",
    author: "Santi Soifer",
    time: "8:01",
    when: "Next week"
});


app.get("/routines", async (req, res) => {

    const addDefaultRoutine = await Routine.exists({
        name: "test",
        description: "A simple test",
        author: "Santi Soifer",
        time: "8:01",
        when: "Next week"
    });

    if ( addDefaultRoutine === null) {
        routineTest.save();
    }

    try {
        const results = await Routine.find({});
        res.send(results); // o cualquier otra acción que desees realizar con los resultados
    } catch (error) {
        res.status(500).send("Error en el servidor");
    }
});

app.post("/addRoutine", async(req, res) => {
    const {title, description, author, time, when} = req.body;
    
    const newRoutine = new Routine({
        name: title,
        description: description,
        author: author,
        time: time,
        when: when
    });

    newRoutine.save();

    try {
        const results = await Routine.find({});
        res.send(results); // o cualquier otra acción que desees realizar con los resultados
    } catch (error) {
        res.status(500).send("Error en el servidor");
    }

});


app.listen(3005, () => {
    console.log("Server started on port 3005");
})