const jokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes/", jokeController.getAllJokes);
    app.get("/api/jokes/random", jokeController.getRandomJoke);
    app.get("/api/jokes/:id", jokeController.getSingleJoke);
    app.post("/api/jokes/new", jokeController.createJoke);
    app.put("/api/jokes/update/:id", jokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", jokeController.deleteJoke);
}