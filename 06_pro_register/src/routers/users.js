const express = require("express");
const router = express.Router();
const User = require("../model/user");
const ejs = require("ejs");
const crypto = require("crypto");

router.use(express.json());

router.get("/", (req, res) => {
  // res.status(201).render("index", { sessionData: 0, title: "Hello Home page." })

  const { sessionData, User } = req.session.sessionData || {};
  res.render("index", { sessionData, User });
});

router.get("/register", (req, res) =>
  res.status(201).render("register", { m: "", title: "Register" })
);

router.post("/register", async (req, res) => {
  try {
    if (
      req.body.name != "" &&
      req.body.email != "" &&
      req.body.mobile != "" &&
      req.body.age != "" &&
      req.body.password != ""
    ) {
      var pass = req.body.password;
      var encrypt_pass = crypto.createHash("md5").update(pass).digest("hex");
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        age: req.body.age,
        password: encrypt_pass,
      });
      const createUser = await user.save();
      if (createUser) {
        req.session.sessionData = {
          m: "User created successfully!!",
          title: "login",
        };
        res.redirect("/login");
      }
    } else {
      res.render("register", { m: "All fields required.", title: "Register" });
    }
  } catch (error) {
    res.render("register", { m: "All fields required.", title: "Register" });
  }
});

router.get("/login", (req, res) =>
  res.status(201).render("login", { m:"", title: "Login" })
);

router.post("/login", async (req, res) => {
  try {
    var pass = req.body.password;
    var encrypt_pass = crypto.createHash("md5").update(pass).digest("hex");
    let user = await User.findOne({ email: req.body.email, password: encrypt_pass });
    if (user != null) {
      await User.findOneAndUpdate({ _id: user._id }, { $set: { is_login: 1 } });
      req.session.sessionData = { sessionData: 1, User: user };
      res.status(201).redirect("/");
    } else {
      res.status(201).render("login", { m:'Account Not Found!!', title: "Login" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
