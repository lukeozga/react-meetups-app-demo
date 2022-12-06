const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const path = require('node:path');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

let db = new sqlite3.Database( path.resolve(__dirname, 'db.sqlite'), (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the sample database.");
    db.run(
      "CREATE TABLE IF NOT EXISTS meetups(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, image TEXT, address TEXT, description TEXT)"
    );
    console.log("Created meetups table.");
  }
});

app.get("/meetups/", (req, res, next) => {
  var sql = "SELECT * FROM meetups";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: "success",
      data: rows,
    });
  });
});

app.post("/meetups/", (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO meetups(title, image, address ,description) VALUES(?,?,?,?)",
      [
        req.body.title,
        req.body.image,
        req.body.address,
        req.body.description,
      ],
      function (err) {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.status(201).json({
          id: this.lastID,
        });
      }
    );
  });
});

app.listen(8000, () => {
  console.log("Server listening on port: 8000.");
});
