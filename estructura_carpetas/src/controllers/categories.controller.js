const videogames = require("../assets/videojuegos");


const allCategories = (req, res) => {
  const generos = new Set(videogames.map((videogame) => videogame.genero));
  res.json(Array.from(generos));
};

module.exports = { allCategories };
