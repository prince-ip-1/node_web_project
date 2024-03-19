require("./db/conn");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;
const router = require("./router/user");
const path = require("path");
const hbs = require("hbs");

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  next();
});

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "./template");
const template_path2 = path.join(__dirname, "./template/views");
const partials_path = path.join(__dirname, "./template/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
hbs.registerPartials(template_path2);

app.use(express.static(static_path));

app.listen(PORT, () => console.log(`listening to ${PORT}!`));
