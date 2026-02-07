const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("node:path");
const PORT = 3001;
const routes = require("./src/routes/products.route.js")

// configurar HBS (lo que procesa y sirve HTML al cliente)
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// middleware para habilitar .body de una request (cuando son peticion con formdata)
app.use(express.urlencoded());
app.use(routes)


app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
