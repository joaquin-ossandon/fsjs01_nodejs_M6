const { getAllGames, createGame, deleteGame } = require("../controllers/games.controllers")
const express = require("express")
const router = express.Router()

router.get("/games", getAllGames)
router.post("/games", createGame)
router.delete("/games/:id", deleteGame) // /games/1 games/4

module.exports = router