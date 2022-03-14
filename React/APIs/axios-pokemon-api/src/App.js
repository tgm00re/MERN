import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])
  
  function handleClick(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => setPokemon(response.data.results));
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon!</button>
      <ul>
        {pokemon.map( (item, i) => {
          return <li key={i}>{item.name}</li>
        } )}
      </ul>
    </div>
  );
}

export default App;
