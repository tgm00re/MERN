import './App.css';
import React,{useState} from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';



function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <BoxForm setBoxes={setBoxes} boxes={boxes}/>
      <BoxDisplay boxes={boxes}/>
    </div>
  );
}

export default App;
