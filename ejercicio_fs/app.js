const fs = require("node:fs/promises");

const command = process.argv[2];
const title = process.argv[3];
const newTitle = process.argv[4];

const run = async () => {
  console.log(command, title);
  try {
    await fs.access("movies.json");
    const moviesPlain = await fs.readFile("movies.json", "utf8");
    const moviesJson = JSON.parse(moviesPlain);

    if (command === "create") {
      return createMovie(moviesJson);
    }

    if (command === "edit") {
      console.log(`----- Editando la película: ${title} a ${newTitle} -----`);
      const movieIndex = moviesJson.findIndex((movie) => movie === title);
      if(movieIndex === -1) {
        return console.log("No encontramos la peli")
      }
      moviesJson.splice(movieIndex, 1, newTitle);
      await fs.writeFile("movies.json", JSON.stringify(moviesJson), "utf8");
      console.log(`----- Ahora la pelicula: ${title} se llama ${newTitle} -----`);
      return;
    }
  } catch (error) {
    console.log(error);
    await fs.writeFile("movies.json", JSON.stringify([]), "utf8");
    const moviesPlain = await fs.readFile("movies.json", "utf8");
    const moviesJson = JSON.parse(moviesPlain);

    await createMovie(moviesJson);
  }
};

const createMovie = async (movies) => {
  console.log(`----- Creando la película con el titulo: ${title} -----`);
  movies.push(title);
  await fs.writeFile("movies.json", JSON.stringify(movies));
  console.log("----- Pelicula guardada con éxito. -----");
};

run();
