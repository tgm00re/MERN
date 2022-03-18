const {Person} = require('../models/person.model')


module.exports.index = (req, res) => {
    Person.find({})
    .then(people => res.json({people: people}))
    .catch(err => res.json({message: "Something went wrong!", error: err}))
}

//Used to create a new person.
module.exports.createPerson = (req, res) => {
    //Get first and last name from request.body
    const { firstName, lastName } = req.body;
    Person.create({
        firstName,
        lastName
    })
    .then(person => res.json(person))
    .catch(err => res.json(err))
}
