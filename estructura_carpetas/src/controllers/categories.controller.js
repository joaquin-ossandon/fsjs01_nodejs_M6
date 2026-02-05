const { fileToJson } = require("../utils/fileReader");

const allCategories = async (req, res) => {
  const videogames = await fileToJson("src/assets/videojuegos.json")
  const generos = new Set(videogames.map((videogame) => videogame.genero));
  res.json(Array.from(generos));
};

module.exports = { allCategories };
