require("./db/conn");
const express = require("express");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 2500;
const router = require("./routers/users");
const ejs = require("ejs");
const path = require("path");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.set("view engine", "ejs");
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "./template/views");
app.use(express.static(static_path));
app.set("views", template_path);

app.listen(PORT, () => console.log(`Listen to ${PORT}`));
