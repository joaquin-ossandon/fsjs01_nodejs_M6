exports.validate = (req, res, next) => {
    if(req.url === "/") {
        console.log("Petición rechazada a: " + req.url)
        res.status(403)
        res.send("No tienes permisos")
        return
    }
    
    console.log("Petición rechazada a: " + req.url)
    req.flaquito = "perrito"
    next()
}
