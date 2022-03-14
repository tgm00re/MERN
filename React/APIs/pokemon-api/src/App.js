import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState(false);
  // useEffect(() => {
  //   console.log("FETCHING C:!!")
  //   fetch('https://pokeapi.co/api/v2/pokemon')
  //   .then(response => response.json())
  //   .then(response => setPokemon(response.results));
  // }, clicked);

  function handleClick(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response => setPokemon(response.results));
  }



  return (
    <div className="App">
      <button onClick={handleClick}> Click Me!</button>
      <ul>
        {pokemon.map((pokemon, i) => {
          return <li key={i}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
