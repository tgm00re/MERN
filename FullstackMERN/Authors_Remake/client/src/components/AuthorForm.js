import React, { useEffect, useState } from 'react'
import CancelButton from './CancelButton';

export default function AuthorForm({initialName, submitFunction, errors}) {
    const [name, setName] = useState(initialName);
    
    

    useEffect(() => {
        setName(initialName);

    }, [initialName])

    return (
        <form onSubmit={(e) => submitFunction(e, {name: name})}>
            <div className="form-group">
            <label htmlFor="name">Author Name</label>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} id="name"/>
            </div>
            <div className="mt-3">
                <CancelButton/>
                <button type="submit" className="btn btn-primary mx-3">Submit</button>
            </div>
        </form>
    )
}
