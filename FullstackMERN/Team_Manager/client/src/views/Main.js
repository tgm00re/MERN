import React from 'react'
import {Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import PlayerList from '../components/PlayerList';
import AddPlayer from '../components/AddPlayer';
import TopNav from '../components/TopNav';
import Game from '../components/Game';


export default function Main() {
    return (
        <>
            <div className="container">
                <Switch>  
                    <Route eaxct path="/players/list">
                        <TopNav players={true} />
                        <PlayerList/>
                    </Route>
                    <Route exact path="/players/addplayer">
                        <TopNav players={true} />
                        <AddPlayer/>
                    </Route>
                    <Route exact path="/status/game/:num">
                        <TopNav players={false}/>
                        <Game/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/players/list"/>
                    </Route>
                </Switch>
            </div>
        </>
    )
}
