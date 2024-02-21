require("../db/conn");
const express = require("express");
const Student = require("../model/students");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home Page.");
});

// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

app.post("/users", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const usersData = await Student.find();
    res.status(201).send(usersData);
   
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users/:name", async (req, res) => {
  try {
    const _id = req.params;
    const data = await Student.findOne({ name: _id.name });
    if (!data) throw "Student not found.";
    res.status(200).send(data);
   
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
