const express = require("express")
const app = express()
const PORT = 3002

const routes = require("./src/routes")
const { logger } = require("./src/middlewares/logger")
const { fileWriter } = require("./src/utils/fileWriter")
// const morgan = require("morgan")

// app.use(morgan("short"))
app.use(logger(fileWriter, process.cwd(), "logs.txt"))
app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}: http://localhost:${PORT}`)
})