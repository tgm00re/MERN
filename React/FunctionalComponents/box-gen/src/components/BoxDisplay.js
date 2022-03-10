import React from "react";


const BoxDisplay = (props) => {
    


    return(
        <section style={{ display: 'flex', justifyContent: 'center' }}>
            {props.boxes.map((box, i) => {
                return <div key={i} style={{ backgroundColor: box.color, width: box.size, height: box.size }}></div>
            })}
        </section>
    )
}


export default BoxDisplay;