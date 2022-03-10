import React, { useState } from "react";


const ContentBox = (props) => {


    return(
        <div className="contentBox">
          <p>{props.tabs.filter(tab => tab.selected).map(filteredTab => filteredTab.content)}</p>
        
        </div>
    )
}


export default ContentBox