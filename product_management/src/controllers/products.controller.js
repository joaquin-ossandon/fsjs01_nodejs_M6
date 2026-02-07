const { randomUUID } = require("crypto");
const fs = require("node:fs/promises");

const renderHome = (req, res) => {
  res.render("home");
};

const renderAllProducts = async (req, res) => {
  // 1. leer mi archivo products.json
  const productosText = await fs.readFile("./src/data/products.json", {
    encoding: "utf-8",
  }); // esto responde un tipo string
  // 2. parsear el rsultado (string) a JSON
  const productos = JSON.parse(productosText);
  // 3. devolver el rsultado JSON en la response
  res.render("productos", { productos });
}

const renderCreatePage = (req, res) => {
  res.render("crear");
}

const createProduct = async (req, res) => {
  // 1. leer mi archivo products.json
  const productosText = await fs.readFile("./src/data/products.json", {
    encoding: "utf-8",
  }); // esto responde un tipo string

  // 2. parsear el rsultado (string) a JSON
  const productos = JSON.parse(productosText);

  //3. pushear el nuevo producto
  const id = randomUUID();
  const newProduct = { id, ...req.body };
  productos.push(newProduct);

  //4. escribir el archivo
  await fs.writeFile(
    "./src/data/products.json",
    JSON.stringify(productos, "", 2),
    {
      encoding: "utf-8",
    },
  );

  res.redirect("/productos");
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // 1. leer mi archivo products.json
  const productosText = await fs.readFile("./src/data/products.json", {
    encoding: "utf-8",
  }); // esto responde un tipo string

  // 2. parsear el rsultado (string) a JSON
  const productos = JSON.parse(productosText);

  const productToDelete = productos.findIndex((producto) => producto.id == id)

  productos.splice(productToDelete, 1)

  //4. escribir el archivo
  await fs.writeFile(
    "./src/data/products.json",
    JSON.stringify(productos, "", 2),
    {
      encoding: "utf-8",
    },
  );

  res.redirect("/productos")
}

module.exports = {
    renderHome,
    renderAllProducts,
    renderCreatePage,
    createProduct,
    deleteProduct
}