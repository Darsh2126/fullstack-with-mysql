import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("This is the backend");
});

app.get("/books", (req, res) => {
  const query = "select * from books;";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const query =
    "INSERT INTO books (`title`, `description`, `cover`) VALUES (?);";
  const values = [req.body.title, req.body.description, req.body.cover];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books has been created");
  });
});

app.listen(8800, () => {
  console.log(">>>Connected to Backend");
});

/*
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

use this for authentication
*/
