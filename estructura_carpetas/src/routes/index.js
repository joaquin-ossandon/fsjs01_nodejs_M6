const express = require("express")
const router = express.Router()
const gamesRoutes = require("./videogames.route")
const categoriesRoutes = require("./categories.route")

router.use("/", gamesRoutes)
router.use("/", categoriesRoutes)

module.exports = router