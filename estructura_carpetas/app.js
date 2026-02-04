const express = require("express")
const app = express()
const PORT = 3002

const routes = require("./src/routes")
const { logger } = require("./src/middlewares/logger")
// const morgan = require("morgan")

// app.use(morgan("tiny"))
app.use(logger)
app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}: http://localhost:${PORT}`)
})