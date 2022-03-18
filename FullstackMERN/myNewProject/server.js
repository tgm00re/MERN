const express = require("express");
const cors = require("cors")
const app = express();

require("./server/config/mongoose.config")

//Middleware!
// Allows for connection between client and server.
app.use(cors()); 
//Allows us to accept post requests.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 8000;

//This must be before the app.use statements!
require('./server/routes/person.routes')(app);



app.listen(port, () => console.log(`You are connected to port ${port}`));
