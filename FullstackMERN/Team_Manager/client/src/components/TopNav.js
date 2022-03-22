import React from 'react'
import { Link } from 'react-router-dom'

//props.players will be a boolean to represent whether or not you are currently on the players sections
//props.playerStatus will be a boolean to represent whether or not you are currently on the playerStatus sections
export default function TopNav(props) {
    return (
        <>
            <div className="mb-5" id="top-nav">
                {props.players ? 
                <h1> 
                    <span>Manage Players {"  "}</span>
                    |
                    <span>{"  "}</span><Link to="/status/game/1">Manage Player Status</Link>
                </h1>
                :
                <h1>
                    <Link to="/players/list">Manage Players</Link><span>{"  "}</span>
                    |
                    <span>{"  "}Manage Player Status</span>
                </h1>    
                }
            </div>
        </>
    )
}
