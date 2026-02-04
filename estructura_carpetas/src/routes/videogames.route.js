const express = require("express")
const { allVideoGames, getGameById, getGamesByCategory } = require("../controllers/videogames.controller.js")
const { validateId } = require("../middlewares/validateID.js")
const router = express.Router()

router.get("/", allVideoGames) // endpoint: /api/games/
router.get("/:id", validateId, getGameById) // endpoint: /api/games/:id // /:id se guarda en req.params => req.params.id
router.get("/category/:category", getGamesByCategory) // endpoint: /api/games/category/:category

module.exports = router