import React, {useState} from "react";

export default function TodoForm(props) {
    const [name, setName] = useState("");


    function newTodo(name){
        return { id: props.idCounter, name: name, complete: false };
    }


    function handleSubmit(e){
        e.preventDefault();
        props.setTodos([...props.todos, newTodo(name)]);
        setName("");
        props.setIdCounter(props.idCounter + 1);
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="todoName">Add A Todo</label>
                <input type="text" className="form-control mt-1" name="todoName" placeholder="Todo Name Goes Here!" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-4">Add</button>
        </form>
    )
}
