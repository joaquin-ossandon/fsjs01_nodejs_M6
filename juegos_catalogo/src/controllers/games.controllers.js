const { fileAsJson } = require("../utils/readFile");
const { writeFileFromJson } = require("../utils/writeFile");

const getAllGames = async (req, res) => {
  const games = await fileAsJson("src/models/games.json");
  res.json(games);
};

const createGame = async (req, res) => {
  const newGame = req.body;

  const games = await fileAsJson("src/models/games.json");
  games.catalog.push(newGame);

  await writeFileFromJson("src/models/games.json", games);

  res.status(201).json({
    new_game: newGame,
    current_database: games,
  });
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  const games = await fileAsJson("src/models/games.json");

  const gameIndex = games.catalog.findIndex((game) => game.id === id);

  const deletedGame = games.catalog.splice(gameIndex, 1);

  await writeFileFromJson("src/models/games.json", games);

  res.status(200).json({
    deleted_game: deletedGame[0],
    current_database: games,
  });
};

module.exports = {
  getAllGames,
  createGame,
  deleteGame,
};
