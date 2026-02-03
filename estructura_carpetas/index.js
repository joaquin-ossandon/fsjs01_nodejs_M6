const express = require("express")
const app = express()
const PORT = 3002

const routes = require("./src/routes")

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}: http://localhost:${PORT}`)
})