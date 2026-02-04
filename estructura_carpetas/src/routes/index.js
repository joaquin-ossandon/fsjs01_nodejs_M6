const express = require("express")
const router = express.Router()
const gamesRoutes = require("./videogames.route")
const categoriesRoutes = require("./categories.route")

router.use("/games", gamesRoutes) // endpoint: /api/games
router.use("/categories", categoriesRoutes) // endpoint: /api/categories

module.exports = router