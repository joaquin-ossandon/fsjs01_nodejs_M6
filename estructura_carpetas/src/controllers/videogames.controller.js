const { fileToJson } = require("../utils/fileReader");
const { fileWriter, fileWriterOverride } = require("../utils/fileWriter");

const allVideoGames = async (req, res) => {
  const videojuegos = await fileToJson("src/assets/videojuegos.json");
  res.json(videojuegos);
};

const getGameById = async (req, res) => {
  const videojuegos = await fileToJson("src/assets/videojuegos.json");

  const { id } = req.params;
  const videoGame = videojuegos.find((game) => game.id === Number(id));

  res.json(videoGame);
};

const getGamesByCategory = async (req, res) => {
  const videojuegos = await fileToJson("src/assets/videojuegos.json");
  const { category } = req.params;
  const videoGames = videojuegos.filter((game) => game.genero === category);

  res.json(videoGames);
};

const createGame = async (req, res) => {
  const videojuegos = await fileToJson("src/assets/videojuegos.json");
  console.log(videojuegos)
  const nuevoJuego = {
    id: 0,
    titulo: "FIFA 26666",
    plataforma: "Multiplataforma",
    genero: "Deportes",
    año: 2026,
  };

  videojuegos.push(nuevoJuego);

  await fileWriter({dirPath: "src/assets", fileName: "videojuegos.json", data: JSON.stringify(videojuegos, "", 2)})

  res.status(201).json({ nuevo: nuevoJuego });
};

module.exports = {
  allVideoGames,
  getGameById,
  getGamesByCategory,
  createGame
};
