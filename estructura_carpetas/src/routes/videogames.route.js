const express = require("express")
const { allVideoGames, getGameById, getGamesByCategory } = require("../controllers/videogames.controller.js")
const router = express.Router()

router.get("/games", allVideoGames)
router.get("/games/:id", getGameById) // /:id se guarda en req.params => req.params.id
router.get("/games/category/:category", getGamesByCategory)

module.exports = router