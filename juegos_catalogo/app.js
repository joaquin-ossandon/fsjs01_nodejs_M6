require("dotenv").config();

const path = require("node:path");
const hbs = require("hbs");
const { pool } = require("./src/config/database");
const express = require("express");
const app = express();

const gamesRoutes = require("./src/routes/games.routes");
const viewsRoutes = require("./src/routes/views.routes");
const { formatPrice } = require("./src/utils/formatPrice");
const { colorByStock } = require("./src/utils/colorByStock");

const PORT = process.env.PORT || 3001;

app.use(
  "/assets/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist")),
); // /users/home/gatito/repos/juegos_catalogo/node_modules/boostrap/dist

app.use(express.urlencoded({ extended: true })); // guarda la info de un form o similar en req.body
app.use(express.json());

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/src/views"));

hbs.registerPartials(path.join(__dirname, "/src/views/partials"));
hbs.registerPartials(path.join(__dirname, "/src/views/layouts"))
hbs.registerHelper("formatPrice", formatPrice);
hbs.registerHelper("colorByStock", colorByStock)

app.use("/api", gamesRoutes);
app.use(viewsRoutes);

app.get("/api/pets", async (req, res) => {
  const { rows, rowCount } = await pool.query("SELECT * from pets");
  res.json({
    registros: rowCount,
    result: rows,
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
