const { fileAsJson } = require("../utils/readFile");
const { randomUUID } = require("node:crypto");
const { writeFileFromJson } = require("../utils/writeFile");

const landingPage = async (req, res) => {
  const games = await fileAsJson("src/models/games.json");

  res.render("index", { games: games.catalog });
};

const createGameForm = async (req, res) => {
  res.render("createGameForm");
};

module.exports = {
  landingPage,
  createGameForm,
};
