import React from "react";
import './Sec1.css'

export default function Line(props) {
    let line = props.line;
    return(
        <div className="word"> 
            {line} 
            <div className="word-mask"></div>
        </div>
    )
}