const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required!'],
        minLength: [2, 'Name must be at least 2 characters in length']
    },
    preferredPosition: {type: String},
    gameOneStatus: {type: Number}, // 0: UD, 1: NP, 2: P
    gameTwoStatus: {type: Number},
    gameThreeStatus: {type: Number},
    
    //Add game1Status, game2Status, game3Status B) Perhaps an array? 
}, {timestamps: true})

module.exports.Player = mongoose.model("Player", PlayerSchema)