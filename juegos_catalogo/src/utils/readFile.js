const fs = require("node:fs/promises");

const readFile = async (filePath) => {
  const fileText = await fs.readFile(filePath, { encoding: "utf8" });
  return fileText;
};

const fileAsJson = async (filePath) => {
  const fileText = await readFile(filePath);
  const fileJSON = JSON.parse(fileText);
  return fileJSON;
};

module.exports = { fileAsJson };
