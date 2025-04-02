const express = require("express");
const mysql = require("mysql");


const app = express();
const PORT = 8080;


app.listen(PORT, () => {
    console.log("SERVER STARTED PORT AT "+ PORT);
})
