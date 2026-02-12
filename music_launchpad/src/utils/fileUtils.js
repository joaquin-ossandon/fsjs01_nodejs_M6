const fs = require("node:fs/promises");

const readFileAsJson = async (filepath) => {
  const fileData = await fs.readFile(filepath, { encoding: "utf-8" });
  const data = JSON.parse(fileData);

  return data;
};

const writeFileFromJson = async (filePath, content) => {
  await fs.writeFile(filePath, JSON.stringify(content, "", 2), {
    encoding: "utf8",
  });
};

module.exports = { readFileAsJson, writeFileFromJson };
