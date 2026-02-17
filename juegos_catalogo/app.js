require("dotenv").config();

const path = require("node:path");
const hbs = require("hbs");
const { pool } = require("./src/config/database");
const express = require("express");
const app = express();

const gamesRoutes = require("./src/routes/games.routes");
const viewsRoutes = require("./src/routes/views.routes");

const PORT = process.env.PORT || 3001;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/src/views"));
hbs.registerPartials(path.join(__dirname, "/src/views/partials"));

app.use(express.json());

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
