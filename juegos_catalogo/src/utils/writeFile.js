const fs = require("node:fs/promises");

const writeFile = async (filePath, data) => {
  await fs.writeFile(filePath, data, { encoding: "utf-8" });
};

const writeFileFromJson = async (filePath, data) => {
    const dataAsString = JSON.stringify(data)
    await writeFile(filePath, dataAsString)
}

module.exports = {
    writeFileFromJson
}