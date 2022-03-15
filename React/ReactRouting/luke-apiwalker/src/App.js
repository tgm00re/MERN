import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
