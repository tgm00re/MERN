import React from 'react'

export default function TodoDisplay(props) {

    function handleClick(i){
        let items = [...props.todos];
        let item =items[i];
        item.complete = !item.complete;
        items[i] = item;
        props.setTodos(items)
    }

    function handleDelete(i){
        props.setTodos(props.todos.filter(todo => todo.id != i));
    }
        

return (
    <div className="todoList">
        <ul>
        {props.todos.map((todo, i) => {
            return (
            <div className="my-5" style={{display: 'flex', justifyContent: 'space-around', border: '3px solid black', alignItems: 'center'}} key={i}>
            <p  style={todo.complete ? {textDecoration: 'line-through'} : null}>{todo.name}</p>
            <div>
                <label>Completed?</label>
                <input type="checkbox" checked={todo.complete} onChange={() => handleClick(i)}/>
            </div>
            <button className="btn btn-primary" onClick={() => handleDelete(todo.id)}>Delete :(</button>
            </div>
            )
        })}
        </ul>
    </div>
)
}