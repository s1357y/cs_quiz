import mysql from "mysql2";
const env = require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    // password: process.env.DB_HOST,
    database: "quiz"
});

export default db;