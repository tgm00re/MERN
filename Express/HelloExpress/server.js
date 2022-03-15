const express = require("express");
const app = express();
//These lines allows us to pull data out of request objects.
//They are 'Express Middleware Functions.' They are responsible for providing and parsing the request.body data
app.use( express.json() );
app.use(express.urlencoded({ extended: true }) );
const port = 8000;

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json(users);
});

//Here is how we get form data:
app.post('/api/users', (req, res) => {
  //req.body will contain the form data from postman or from react
  console.log(req.body);
  
  //We can push it into the users array for now...
  //LAter on this will be inserted into a database
  users.push(req.body);
  
  //We always need to response with something
  res.json( {status: "ok" } );
});


//ROUTE PARAMETERS

//Getting data from a URL

// - Any data you wish to pass via the URL must be indicated by a colon ( : ). It will then be available in the req.params object:

//If we want to get a user with a specific id, we can make the id a part of the url.
//Be sure to preface the id variable with a `:` colon.
app.get("/api/users/:id", (req, res) => {
  //We can get this `id` variable from req.parms
  console.log(req.params.id);
  ///Assuming this id is the index of the users array we could return on user this way:
  res.json( users[req.params.id] );
});


//Update Data
app.put("/api/users/:id", (req, res) => {
  //We can get this `id` variable from req.params
  const id = req.params.id;
  //Assuming this id is the index of the users array we can replace the user like so:
  users[id] = req.body;
  //We always need to respond with something
  res.json( {status: "ok"} );
});


//Delete Data
app.delete("/api/users/:id", (req, res) => {
  // We can this id variable from req.params
  const id = req.params.id;
  
  //We can delete it from our users list like this:
  users.splice(index, 1); 

  //We always need to respond with something
  res.json( { status: "ok" } );
});







const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
