const videojuegos = require("../assets/videojuegos.js")

const allVideoGames = (req, res) => {
    res.json(videojuegos)
}

const getGameById = (req, res) => {
    const { id } = req.params
    const videoGame = videojuegos.find(game => game.id === Number(id))
    
    res.json(videoGame)
}

const getGamesByCategory = (req, res) => {
    const { category } = req.params
    const videoGames = videojuegos.filter(game => game.genero === category)
    
    res.json(videoGames)
}

module.exports = {
    allVideoGames,
    getGameById,
    getGamesByCategory
}