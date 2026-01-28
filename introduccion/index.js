const express = require("express");
const { validate } = require("./src/middlewares/logger");
const app = express();

app.use(validate);

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.get("/login", (req, res) => {
  res.send("Inicia sesión " + req.flaquito);
});

app.listen(3000, () => {
  console.log("Ejecutando el server");
});
