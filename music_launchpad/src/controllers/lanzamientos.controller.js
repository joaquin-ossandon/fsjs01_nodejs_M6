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

module.exports = { nuevoLanzamiento };
