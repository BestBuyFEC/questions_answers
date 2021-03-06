require("dotenv").config();
const express = require("express");
const db = require("./database/conn");
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5555;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//getall
app.get("/users", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM users");
        res.json(result.rows);
        console.log(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getall
app.get("/questions", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM questions");
        res.json(result.rows);
        console.log(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getall
app.get("/answers", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM answers");
        res.json(result.rows);
        console.log(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getone 
app.get("/users/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM users WHERE userID = $1", [req.params.id]);
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getone 
app.get("/questions/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM questions WHERE question_id = $1", [req.params.id]);
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//getone 
app.get("/answers/:id", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT * FROM answers WHERE question_id = $1", [req.params.id]);
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
        res.send("Error: ", error);
    }
})

//join table of questions, answers, and users tables
app.get("/join", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT username, question, answer FROM users LEFT JOIN questions ON users.userID = questions.userID LEFT JOIN answers ON users.userID = answers.userID");
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
    }
})


//join table of questions, answers, and users tables
app.get("/userquestion/join", async (req, res) => {
    try {
        let client = await db.connect();
        const result = await db.query("SELECT username, question FROM users INNER JOIN questions ON users.userID = questions.userID");
        res.json(result.rows);
        client.release();
    } catch (error) {
        console.error(error);
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on Port ${process.env.PORT}`);
})