require("../db/conn");
const express = require("express");
const Student = require("../model/students");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Home Page.");
});

app.use(express.json());
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
