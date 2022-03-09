import React, { useState, useReducer} from "react";
//learn redux afterwards
const ACTIONS  = {
    ONCHANGE: "onChange",
}

//This function RETURNS a NEW STATE
function reducer(state, action){ //State is the current state, action is what we pass into the dispatch function, this is what we use to determine HOW to update the states.
    switch(action.type){
        case ACTIONS.ONCHANGE:
            if ( action.payload.name === "firstName") {
                if ( action.payload.value.length < 2 ) {
                    return{
                        ...state,
                        [action.payload.name]: {
                            value: action.payload.value,
                            error: "First name too short yo"
                        }
                    }
                }
                return {
                    ...state,
                    [action.payload.name]: {
                        value: action.payload.value,
                        error: null
                    }
                }
                //do errors
                //return your state errors
                //return state with what the user has put as name
            } else if (action.payload.name === "lastName"){
                if(action.payload.value.length < 2){
                    return{
                        ...state,
                        [action.payload.name]: {
                            value: action.payload.value,
                            error: "Last name too short!"
                        }
                    }
                }
                return{
                    ...state,
                    [action.payload.name]: {
                        value: action.payload.value,
                        error: null
                    }

                }
            } else if (action.payload.name === "email"){
                if(!validateEmail(action.payload.value)){
                    return{
                        ...state,
                        [action.payload.name]: {
                            value: action.payload.value,
                            error: "Invalid email address!"
                        }
                    }
                }
            } else{
                return state;
            }

        default:
            return state;
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}


const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

export default function UserForm(){
    const[state,dispatch] = useReducer(reducer, initialState) //Dispatch function is what is called to update our current state (it calls reducer function)
    function handleChange(e) {
        dispatch({
            type: ACTIONS.ONCHANGE,
            payload: e.target
        })
    }
    return(
        <form>
            <div>
                <label>First Name:</label>
                <input name="firstName" type="text" onChange={handleChange}/>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label>Last Name:</label>
                <input name="lastName" type="text" onChange={handleChange}/>
                {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label>Email:</label>
                <input name="email" type="text" onChange={handleChange}/>
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
            <input type="submit" value="Submit the form"/>
        </form>
    )
        
}