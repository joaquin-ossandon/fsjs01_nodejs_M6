const path = require("node:path");
const fs = require("node:fs/promises");
const express = require("express");
const hbs = require("hbs");
const app = express();

const PORT = 3003;

app.use(express.urlencoded()); // ya procesamos formularios y los deja en el req.body

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));
hbs.registerPartials(path.join(__dirname, "src/views/partials"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/lanzamientos", async (req, res) => {
  const fileData = await fs.readFile("data.json", { encoding: "utf-8" });
  const lanzamientos = JSON.parse(fileData);

  res.render("lanzamientos", { ...lanzamientos });
});

app.get("/nuevo-lanzamiento", (req, res) => {
  res.render("nuevoLanzamiento");
});

app.post("/api/nuevo-lanzamiento", async (req, res) => {
  // leer archivo
  const fileData = await fs.readFile("data.json", { encoding: "utf-8" });
  const lanzamientos = JSON.parse(fileData);

  //editar lanzamientos
  const { artista, genero, titulo } = req.body; // -> artista, genero, titulo
  lanzamientos.discos.push({artista, genero, titulo})

  // escribe el archivo
  await fs.writeFile("data.json", JSON.stringify(lanzamientos, "", 2), {encoding: "utf8"})
  
  // responde al cliente con una redireccion
  res.redirect("/lanzamientos")
});

app.listen(PORT, () => {
  console.log(`Ready on http://localhost:${PORT}`);
});
