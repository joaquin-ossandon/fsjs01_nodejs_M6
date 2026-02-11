const fs = require("node:fs/promises");
const { readFileAsJson } = require("../utils/fileUtils");

const index = (req, res) => {
  res.render("index");
};

const lanzamientos = async (req, res) => {
  const lanzamientos = await readFileAsJson("data.json");

  res.render("lanzamientos", { ...lanzamientos });
};

const nuevoLanzamiento = (req, res) => {
  res.render("nuevoLanzamiento");
};

module.exports = {
  nuevoLanzamiento,
  index,
  lanzamientos,
};
