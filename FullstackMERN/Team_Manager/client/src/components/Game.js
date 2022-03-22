import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Game() {
    const [players, setPlayers] = useState([]);
    const {num} = useParams();
    const [game, setGame] = useState("");
    const [runEffect, setEffect] = useState(false);


    useEffect(() => {
        console.log("Running useEffect function");
        let isMounted = true;
        axios.get('http://localhost:8000/api/players')
        .then(response => {
            if(isMounted){
                setPlayers(response.data)
            }
        })
        .catch(err => console.log("Error: ", err))
        if(num == 1){
            console.log("Num is 1");
            setGame("gameOneStatus");
        } else if(num == 2){
            console.log("Num is 2");
            setGame("gameTwoStatus");
        } else {
            console.log("num is 3");
            setGame("gameThreeStatus");
        }
        return () => { isMounted = false }
    }, [runEffect, num])


    function handleClick(item, newNum){
        let newItem = item;
        newItem[game] = newNum
        axios.put(`http://localhost:8000/api/players/update/${item._id}`, newItem)
            .then(response => console.log(response))
            .catch(err => console.log("error: ", err))
        
        setEffect(!runEffect);
    }

    



    return (
        <>
        <h2 className="mt-3">Player Status - Game {num}</h2>
        <nav>
                <h3 className="mt-5">
                    { num == 1 ?
                    <p>
                        <span>Game 1{"  "}</span>
                        |
                        <span>{"  "}<Link to="/status/game/2">Game 2</Link>{"  "}</span>
                        |
                        <span>{"  "}<Link to="/status/game/3">Game 3</Link>{"  "}</span>
                    </p>
                    : num == 2 ?
                    <p>
                        <span><Link to="/status/game/1">Game 1</Link>{"  "}</span>
                        |
                        <span>{"  "}Game 2{"  "}</span>
                        |
                        <span>{"  "}<Link to="/status/game/3">Game 3</Link>{"  "}</span>
                    </p>
                    : 
                    <p>
                        <span><Link to="/status/game/1">Game 1</Link>{"  "}</span>
                        |
                        <span>{"  "}<Link to="/status/game/2">Game 2</Link>{"  "}</span>
                        |
                        <span>{"  "}Game 3{"  "}</span>
                    </p>
                    }
                </h3>
        </nav>

        <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {players.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <button className={"btn "+ (item[game] == 2 ? "btn-success" : "btn-light") } onClick={() => handleClick(item, 2)}>Playing</button>
                                <button className={"btn "+(item[game] == 1 ? "btn-danger" : "btn-light")+" mx-3"} onClick={() => handleClick(item, 1)}>Not Playing</button>
                                <button className={"btn "+ (item[game] == 0 ? "btn-warning" : "btn-light")} onClick={() => handleClick(item, 0)}>Undecided</button>
                            </td>
                        </tr>
                    )
                })}
                
                </tbody>
            </table>


        </>
    )
}
