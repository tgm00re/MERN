import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router'
import obiImage from '../imgs/obi-wan.png'

export default function Display() {
    const {type, id} = useParams();
    const [info,setInfo] = useState({});
    const [error, setError] = useState(false);
    const [homeWorld, setHomeWorld] = useState("");
    useEffect(()=> {
        axios.get("https://swapi.dev/api/"+type+"/"+id)
        .then(response => {
            let info = response.data;
            if(type === 'people'){
                axios.get(response.data.homeworld)
                .then( response => {
                    info.homeworld = response.data.name;
                    setInfo(info)
                })
            } else{
                setInfo(info)
            }
            // setInfo(response.data);
            setError(false);
            
        } 
        )
        .catch(() => setError(true));
    },[id,type])

    // function getHomeWorld(){
    //     console.log("Getting homeworld")
    //         axios.get(info.homeworld)
    //         .then(res => {
    //             setHomeWorld(res.data.name);
    //         })
    //     console.log("new HW: " + homeWorld);
    //     return homeWorld;
    // }

    return (
        <div>
            {error ? 
            <div>
                <p>These aren't the droids you're looking for!</p>
                <img src={obiImage}/>
            </div>
            :type === "people" ?
                <div>
                    <h1>{info.name}</h1>
                    <h3>Height: {info.height}</h3>   
                    <h3>Mass: {info.mass}</h3>   
                    <h3>Hair Color: {info.hair_color}</h3>
                    <h3>Skin Color: {info.skin_color}</h3>
                    <h3>Home World: {info.homeworld}</h3>
                </div>   
            : type === "planets" ? 
                <div>
                    <h1>{info.name}</h1>
                    <h3>Terrain: {info.terrain}</h3>
                    <h3>Surface Water: {info.surface_water}</h3>
                    <h3>Population: {info.population}</h3>
                </div>
            :
                <div>
                    <h1>{info.name}</h1>
                    <h3>Passengers: {info.passengers}</h3> 
                    <h3>Cost in credits: {info.cost_in_credits}</h3>
                    <h3>Model: {info.model}</h3>
                </div>
            
            }
        </div>
    )
}
