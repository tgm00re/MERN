const { Author } = require('../models/author.model')

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.getAuthorById = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(author => res.json(author))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name: name
    })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    Author.updateOne({_id: req.params._id}, {name: name}, {runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(results => res.json(results))
        .catch(err => res.json({message: "Something went wrong!", error: err}))
}

