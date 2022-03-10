import React, {useState} from "react";


const BoxForm = (props) => {

const [boxColor, setBoxColor] = useState("");
const [boxSize, setBoxSize] = useState("");

    function newBox(event){
        event.preventDefault();
        props.setBoxes([...props.boxes, {color: boxColor, size: boxSize}])
        setBoxColor("");
    }

    return(
        <form onSubmit={event => newBox(event)}>
            <label>Color</label>
            <input type="text" onChange={e => setBoxColor(e.target.value)} value={boxColor}/>
            <input type="number" onChange={e => setBoxSize(e.target.value + 'px')}/>
            <input type="submit" value="Add Box"/>
        </form>
    )
}





export default BoxForm