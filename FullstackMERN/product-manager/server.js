const express = require('express')
const app = express();
const cors = require('cors')

require('./server/config/mongoose.config')

//Middleware
//Allows for connection between client and server
app.use(cors());
//Allows for post requests to be sent to server.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/Product.routes')(app);


const port = 8000;

app.listen(port, () => console.log("Successfully connected to port: ", port));
