import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'

export default function Chat() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const[socket] = useState(() => io(':8000')); //Notice how we dont give this a setSocket function. This is because we don't want it being ran everytime the component renders. These are also known as lazy useState hooks.

    useEffect(() => {
        //We need to set up all of our event listeners in the useEffect callback function
        socket.on("Welcome", data => console.log(data)); //Gets data from a trigger from the server.

        socket.on("userJoin", userData => {
            //when setting state, you HAVe uto use this EXACT SYNTAX. ANY difference in syntax WILL NOT WORK the way you expect.
            setMessages(prevUsers => {
                return [...prevUsers, userData + ' joined!'];
            })
        });

        socket.on("newMsg", msgData => {
            setMessages(prevMessages => {
                return [...prevMessages, "New Message: " + msgData];
            })
        })

        //Note that we're returning a callback function. This ensures that the underlying socket will be closed if App is unmounted. This would be more critical if we were creating the socket in a subcomponent.
        return () => socket.disconnect(true);
    }, []);


    useEffect(()  => {
        messagesEndRef.current?.scrollIntoView();
    }, [messages])


    function handleUserSubmit(e){
        e.preventDefault();
        console.log("Emitting name: ", name);
        socket.emit("newUser", name);
        setName("");
    }

    function handleMessageSubmit(e){
        e.preventDefault();
        socket.emit('newMessage', message);
        setMessage("");
    }



    return (
        <>
            <form onSubmit={handleUserSubmit} style={{marginBottom: '50px'}}>
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="submit"/>
            </form>
            <div id="message-container" style={{overflow: 'scroll', height:'400px', backgroundColor: 'grey'}}>
                {messages.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
                <div ref={messagesEndRef}/>
            </div>
            <form onSubmit={handleMessageSubmit} style={{position: 'absolute', bottom: '0', margin: '0 auto', width: '100%'}}>
                <input type="text" style={{width: '75%', height: '69px'}} name="message" id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder={"Type your message here"}/>
                <input type="submit" style={{width: '23%', height:'75px'}}/>
            </form>
        </>
    )
}
