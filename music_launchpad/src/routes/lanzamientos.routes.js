const express = require("express");
const { nuevoLanzamiento, findArtist } = require("../controllers/lanzamientos.controller");
const router = express.Router()

router.post("/api/nuevo-lanzamiento", nuevoLanzamiento);

router.get("/lanzamientos/artista/:artista", findArtist);

// router.get("/lanzamientos/titulo/:titulo", findTitle);

module.exports = router