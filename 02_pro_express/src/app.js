const express = require('express');

const path = require('path');
const PORT = 8000;
const app = express();
const hbs = require('hbs');



const staticPath = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');



app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('*', (req, res) => {
    res.render("404", {
        errorMsg: "Searched page not found."
    });
});


// app.get('/about', (req, res) => {
//     res.send("Abce Hello");
// });

 
app.listen(PORT, () => console.log(`Listning to the port: ${PORT}`));