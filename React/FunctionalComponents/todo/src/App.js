import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useState, useEffect } from 'react';
import './App.css';
import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm';




function App() {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });
  const [idCounter, setIdCounter] = useState(0);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
    

    

  return (
    <div className="App">
      <div className="container">
        <TodoForm setTodos={setTodos} todos={todos} idCounter={idCounter} setIdCounter={setIdCounter}/>
        <TodoDisplay todos={todos} setTodos={setTodos}/>
      
      </div>
    </div>
  );
}

export default App;
