const http = require("node:http");
const { default: chalk } = require("chalk");
const path = require("node:path");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // posibilidades de URL: /contacto.html /nosotros.html -> /view.php
  const relativePath = url === "/" ? "index.html" : url;
  const filePath = path.join(__dirname, "src", "public", relativePath);

  console.log(`${chalk.blue(method)} - ${chalk.green(url)}`);

  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
  };

  const extname = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extname] || "application/octet-stream"

  if (method === "GET") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html; charset=utf8" });
        res.end("<h1>Archivo no encontrado</h1>");
      } else {
        res.writeHead(200, { "content-type": contentType });
        res.end(data);
      }
    });
  } else if (method === "POST") {
    // ...
  }
});

server.listen(3000, () => {
  console.log(path.join(__dirname, "src", "public"));
  console.log("El server está corriendo");
});
