const fs = require("node:fs/promises");
const path = require("node:path");

const fileWriter = async ({ dirPath, fileName, data, flag }) => {
  await fs.mkdir(dirPath, {
    recursive: true,
  });
  const filePath = path.join(dirPath, fileName);
  await fs.writeFile(filePath, `${data}\n`, { flag });
};

const logWriter = async ({ dirPath, fileName, data }) => {
  await fileWriter({ dirPath, fileName, data, flag: "a" });
};

module.exports = {
  fileWriter,
  logWriter
};
