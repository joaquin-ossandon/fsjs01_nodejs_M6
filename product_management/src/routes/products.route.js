const express = require("express");
const { renderHome, renderAllProducts, renderCreatePage, createProduct, deleteProduct } = require("../controllers/products.controller");
const router = express.Router()

router.get("/", renderHome);

router.get("/productos", renderAllProducts);

router.get("/productos/crear", renderCreatePage);

router.post("/api/productos/crear", createProduct);

router.get("/api/productos/eliminar/:id", deleteProduct);

module.exports = router