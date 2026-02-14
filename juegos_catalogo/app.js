require("dotenv").config()

const express = require("express")
const app = express()

const gamesRoutes = require("./src/routes/games.routes")

const PORT = process.env.PORT || 3001

app.use(express.json())

app.use(gamesRoutes)

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})