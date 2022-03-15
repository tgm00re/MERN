import './App.css';
import { BrowserRouter,
Link,
Route,
Switch 
} 
from 'react-router-dom';
import OneParam from './components/OneParam';
import Home from './components/Home';
import ManyParams from './components/ManyParams';

function App() {
  return (
      <BrowserRouter>
        <Link to="/home">Home</Link>
        {"    |    "}
        <Link to="/4">4</Link>
        {"    |    "}
        <Link to="/hello">Hello</Link>
        {"    |    "}
        <Link to="/hello/blue/red">h/b/r</Link>

        <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/:word/:color/:bgColor">
            <ManyParams/>
          </Route>
          <Route exact path="/:any">
            <OneParam/>
          </Route> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
