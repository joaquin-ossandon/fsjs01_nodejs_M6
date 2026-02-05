const path = require("node:path");
const dayjs = require("dayjs");

const logger = (cb, dirPath, fileName) => async (req, res, next) => {
  const start = Date.now(); // marca de tiempo

  res.on("finish", async () => {
    const end = Date.now();
    const duration = end - start;
    const date = dayjs(end).format('ddd D MMM YYYY HH:mm:ss')
    const log = `${date}, ${req.method}, ${res.statusCode}, ${req.originalUrl}, ${duration} ms`;

    cb({ dirPath, fileName, data: log });
    console.log(log);
  });

  next();
};

module.exports = { logger };
