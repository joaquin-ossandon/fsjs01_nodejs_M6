const { readFileAsJson, writeFileFromJson } = require("../utils/fileUtils");

const nuevoLanzamiento = async (req, res) => {
  // leer archivo
  const lanzamientos = await readFileAsJson("data.json")

  //editar lanzamientos
  const { artista, genero, titulo } = req.body; // -> artista, genero, titulo
  lanzamientos.discos.push({ artista, genero, titulo });

  // escribe el archivo
  await writeFileFromJson("data.json", lanzamientos)

  // responde al cliente con una redireccion
  res.redirect("/lanzamientos");
};


const findArtist = async (req, res) => {
  const lanzamientos = await readFileAsJson("data.json");
  const { artista } = req.params;
  const results = lanzamientos.discos.filter(lanzamiento => lanzamiento.artista.toLowerCase() === artista.toLowerCase());
  console.log(results)
  res.render("lanzamientos", { discos: results });
};

// const findTitle = async (req, res) => {
//   const lanzamientos = await readFileAsJson("data.json");
//   const { titulo } = req.params;
//   const results = lanzamientos.discos.filter(lanzamiento => lanzamiento.titulo.toLowerCase() === titulo.toLowerCase());
//   console.log(results)
//   res.render("lanzamientos", { discos: results });
// };

module.exports = { nuevoLanzamiento, findArtist };
