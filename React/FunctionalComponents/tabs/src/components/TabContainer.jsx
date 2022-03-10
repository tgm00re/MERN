import React from "react";



const TabContainer = (props) => {

    function handleClick(tab){
        console.log(tab);
        props.setCurrentTabNumber(tab.tabNumber);
        for(let i = 0; i < props.tabs.length; i++){
            if(tab.tabNumber != props.tabs[i].tabNumber){
                props.tabs[i].selected = false;
            } else{
                props.tabs[i].selected = true;
            }
            console.log(props.tabs[i].selected);
        }
    }

    return(
        <div className="tabContainer">
            {props.tabs.map( (tab, i ) => {
                return <div key={i+1} onClick={e => handleClick(tab)}
                style={tab.selected ? {backgroundColor: 'black', color:'white'} : null}
                className="tab" >Tab {i+1}</div>
            })}
        </div>
    )
}



export default TabContainer;