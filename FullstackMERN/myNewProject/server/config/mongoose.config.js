const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/peopleDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established."))
    .catch(() => console.log("There was an error"))