const express = require("express");

const app = express();

const path = require("path");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "views/contacto.html"));
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
})

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "views/registro.html"));
})