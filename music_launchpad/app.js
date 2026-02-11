const path = require("node:path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const lanzamientosRoutes = require("./src/routes/lanzamientos.routes.js")
const viewsRoutes = require("./src/routes/views.routes.js")

const PORT = 3005;

app.use(express.urlencoded()); // ya procesamos formularios y los deja en el req.body

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));
hbs.registerPartials(path.join(__dirname, "src/views/partials"));
hbs.registerPartials(path.join(__dirname, "src/views/layouts"));

app.use(lanzamientosRoutes)
app.use(viewsRoutes)

app.listen(PORT, () => {
  console.log(`Ready on http://localhost:${PORT}`);
});
