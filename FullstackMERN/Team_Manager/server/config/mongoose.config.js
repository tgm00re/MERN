const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/players", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log("established connection with the database"))
    .catch(err => console.log("error connecting to the database", err))



