const { getAllGames, createGame, deleteGame } = require("../controllers/games.controllers")
const express = require("express")
const router = express.Router()

router.get("/games", getAllGames) // /api/games -> GET
router.post("/games", createGame) // /api/games -> POST
router.delete("/games/:id", deleteGame) // /api/games/1 games/4

module.exports = router