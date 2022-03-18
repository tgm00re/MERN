import logo from './logo.svg';
import './App.css';

import Main from './views/Main';
import { Switch, Route, Link } from 'react-router';
import Product from './components/Product';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
