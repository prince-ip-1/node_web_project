const express = require("express");
const app = express();
const PORT = process.env.PORT || 50000;
const router = require('./routers/customer')
require("./db/conn");

app.use(router);


app.use(express.json());

app.listen(PORT, () => console.log(`Listening to ${PORT}`));
