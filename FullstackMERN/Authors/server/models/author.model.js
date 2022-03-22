const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name: {type: String}
})

module.exports.Author = mongoose.model("Author", AuthorSchema)