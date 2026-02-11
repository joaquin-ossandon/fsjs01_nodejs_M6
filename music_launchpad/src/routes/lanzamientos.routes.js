const express = require("express");
const { nuevoLanzamiento } = require("../controllers/lanzamientos.controller");
const router = express.Router()

router.post("/api/nuevo-lanzamiento", nuevoLanzamiento);

module.exports = router