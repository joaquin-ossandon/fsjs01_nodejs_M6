const logger = (req, res, next)=> {
    const start = Date.now(); // marca de tiempo

    res.on("finish", () => {
        const end = Date.now()
        const duration = end - start;
        console.log(`${req.method} - ${req.originalUrl} - ${duration} ms - ${res.statusCode}`)
    })

    next()
}

module.exports = { logger }