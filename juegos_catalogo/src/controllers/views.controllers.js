const { fileAsJson } = require("../utils/readFile");

const landingPage = async (req, res) => {
  const games = await fileAsJson("src/models/games.json");

  res.render("index", { games: games.catalog, otros: [{title: "Regalo de 15 pesos"}, {title: "Regalo de 35 pesos"}] });
};

module.exports = { 
    landingPage, 
};
