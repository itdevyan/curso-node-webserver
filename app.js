require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));
// consideracion, debe existir el archivo index.html, si no dara error

// Si agrego una carpeta en la ruta de public, ejemplo /public/hola-mundo/index.html
// tendrá prioridad antes que un app.get('/hola-mundo')

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Yandiel",
    titulo: "Curso de NodeJS",
  });
});

// Para uso de html directo
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.get("/generic", function (req, res) {
//   res.sendFile(__dirname + "/public/generic.html");
// });

// app.get("/elements", function (req, res) {
//   res.sendFile(__dirname + "/public/elements.html");
// });

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Yandiel",
    titulo: "Curso de NodeJS",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Yandiel",
    titulo: "Curso de NodeJS",
  });
});

// Para cualquier ruta no mapeada
app.get("*", (req, res) => {
  //res.send('404 Page not found!')
  // res.sendFile(__dirname + "/public/404.html");
  res.sendFile(__dirname + "/public/index.html");
});

//app.listen(8080)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
