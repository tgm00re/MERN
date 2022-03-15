import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Display from './Display';

export default function Form() {
    const [type, setType] = useState("people");
    const [id, setId] = useState(1);

    


    return (
        <BrowserRouter>
            <form>
                <label htmlFor="type">Search For: </label>
                <select name="type" onChange={(e) => setType(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <label htmlFor="id">Id:</label>
                <input type="number" name="id" id="id" onChange={(e) => setId(e.target.value)} />
                <Link to={"/" + type + "/" + id}>Search</Link>
            </form>

            <Switch>
                <Route exact path="/:type/:id">
                    <Display/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
