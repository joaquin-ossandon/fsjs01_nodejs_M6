require("dotenv").config();


const query = async () => {
    const {rowCount, rows} = await intanciaConexion.query("SELECT * FROM pets")
    console.log(`Cantidad de columnas: ${rowCount}`)
    console.table(rows)
}

query()