const videogames = require("../assets/videojuegos");

const generos = new Set(videogames.map((videogame) => videogame.genero));

const allCategories = (req, res) => {
  res.json(Array.from(generos));
};

module.exports = { allCategories };
