const fs = require("node:fs/promises");
const path = require("node:path");

const fileReader = async (filePath) =>
  await fs.readFile(filePath, { encoding: "utf8" });

const fileToJson = async (filePath) => {
    const stringData = await fileReader(filePath)
    const JSONData = JSON.parse(stringData)
    return JSONData
}

module.exports = {
    fileReader,
    fileToJson
}