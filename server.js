const express = require("express");
const connectedDB = require("./config/db");

const app = express();

//connect database
connectedDB();

app.get("/", (req, res) => res.send("API Running..."));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));