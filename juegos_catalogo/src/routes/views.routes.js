const { landingPage, createGameForm } = require("../controllers/views.controllers");

const express = require("express")
const router = express.Router()

router.get("/", landingPage)
router.get("/create-game", createGameForm)

module.exports = router