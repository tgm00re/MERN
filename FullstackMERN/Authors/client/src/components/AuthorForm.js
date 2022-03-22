import React, { useState } from 'react'

export default function AuthorForm(props) {
    const [name, setName] = useState(props.initialName);


    return (
        <form onSubmit={(e) => props.submitFunction(e, {name: name})}>
            <div className="form-group">
            <label htmlFor="name">Author Name</label>
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} id="name"/>
            </div>
            
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    )
}
