const { landingPage } = require("../controllers/views.controllers");

const express = require("express")
const router = express.Router()

router.get("/", landingPage)


module.exports = router