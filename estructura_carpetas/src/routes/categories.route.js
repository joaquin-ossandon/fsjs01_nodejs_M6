const express = require("express")
const { allCategories } = require("../controllers/categories.controller.js")
const router = express.Router()

router.get("/", allCategories) // endpoint: /api/categories

module.exports = router