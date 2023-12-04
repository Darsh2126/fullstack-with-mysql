import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

app.use(express.json());
app.use(cors());

db.query("Select 1")
  .then((result) => {
    console.log(">>>result", result);
  })
  .catch((err) => {
    console.log(">>>>errr", err);
  });

app.listen(8800, () => {
  console.log(">>>Connected to Backend");
});

/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

use this for authentication
*/
