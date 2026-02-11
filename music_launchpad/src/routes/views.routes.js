const express = require("express");
const { index, lanzamientos, nuevoLanzamiento } = require("../controllers/views.controller");
const router = express.Router()

router.get("/", index);

router.get("/lanzamientos", lanzamientos);

router.get("/nuevo-lanzamiento", nuevoLanzamiento);

module.exports = router
