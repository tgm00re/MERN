const express = require('express')
const app = express();

const server = app.listen(8000, () => {
    console.log("The server is all fired up on port 8000.");
})

//To initialize the socket, wee need to invoke the socket.io library and pass it our express server.
const io = require('socket.io')(server, {cors: true});


//Once intialized, we can now set event listeners and event emitters
// To help pass data along between the server and client. There is one event listener,
// Named “connection,” that is *REQUIRED* that we must have before we can create
// Our own event listeners Here is what it looks like: 

//emitters - passes data where it needs to go (emit)
// on - trigger -- listening for a particular event 

//'connection' is the name of the trigger.
io.on('connection', socket => {
    //Each client gets their own socket id
    console.log(socket.id);
    //If this is logged in our node terminal, that means a new client has ssuccessfully completed the handshake.
    socket.emit("Welcome", "Hello, welcome! You connected on the client side!");

    socket.on('newUser', data => {
        io.emit('userJoin', data);
    });

    socket.on('newMessage', data => {
        io.emit('newMsg', data);
    })
    //We add all of our additioanl event listeners right inside of this function. 
    //Note: "connection" is a built-in event listener.
});