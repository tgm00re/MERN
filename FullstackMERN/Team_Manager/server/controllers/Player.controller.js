const {Player} = require('../models/Player.model');

module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.createPlayer = (req, res) => {
    const {name, preferredPosition, gameOneStatus, gameTwoStatus, gameThreeStatus} = req.body;
    Player.create({
        name: name,
        preferredPosition: preferredPosition,
        gameOneStatus: gameOneStatus,
        gameTwoStatus: gameTwoStatus,
        gameThreeStatus: gameThreeStatus
    })
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePlayer =  (req, res) => {
    const {name, preferredPosition, gameOneStatus, gameTwoStatus, gameThreeStatus} = req.body;
    Player.updateOne({_id: req.params._id}, {name: name, preferredPosition: preferredPosition, gameOneStatus: gameOneStatus, gameTwoStatus: gameTwoStatus, gameThreeStatus: gameThreeStatus}, {runValidators: true, new: true})
        .then(response => res.json(response))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params._id})
        .then(response => res.json(response))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}
