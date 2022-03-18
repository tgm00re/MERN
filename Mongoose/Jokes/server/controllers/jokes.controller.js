const Joke = require("../models/jokes.model");


module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes} ))
        .catch(err => res.json({message: "Something went wrong.", error: err}))
}

module.exports.getSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id })
        .then(singleJoke => res.json({joke: singleJoke}))
        .catch(err => res.json({message: "Something went wrong.", error: err}))
}

module.exports.getRandomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then(result => res.json({joke: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createJoke = (req, res) => {
    console.log(req.params);
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedJoke => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

