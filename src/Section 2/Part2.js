import React from "react";
import { useState, useEffect } from "react";
import Visual1 from "./gifs/visual1.gif";
import Visual2 from "./gifs/visual2.gif";
import Visual3 from "./gifs/visual3.gif";
import "./Part2.css"

export default function Part2() {

    const [val, setVal] = useState("01");
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(400*(window.scrollY-2*window.innerHeight)/(window.innerHeight));
            if(window.scrollY < 7*(window.innerHeight)/3){
                setVal("01");
                document.querySelector(".visual1").style.display = "block";
                document.querySelector(".visual2").style.display = "none";
                document.querySelector(".visual3").style.display = "none";
            } else {
                if(window.scrollY < (8*window.innerHeight)/3){
                    setVal("02");
                    document.querySelector(".visual1").style.display = "none";
                    document.querySelector(".visual2").style.display = "block";
                    document.querySelector(".visual3").style.display = "none";
                }
                else if (window.scrollY < 9*(window.innerHeight)/3){
                    setVal("03");
                    document.querySelector(".visual1").style.display = "none";
                    document.querySelector(".visual2").style.display = "none";
                    document.querySelector(".visual3").style.display = "block";
                }else {
                    setScroll(400);
                }
            }
        })
    })
    return(
        <div className="second_part">
            <div className="visuals">
                <div className="visual1">
                    <img src={Visual1} alt="visual1"  />
                </div>
                <div className="visual2">
                    <img src={Visual2} alt="visual2" />
                    </div>
                <div className="visual3">
                    <img src={Visual3} alt="visual3"  />
                </div> 
            </div>   
            <div className="scrollbar">
                <p className="visual_number1">{val}</p>
                <div className="scroller">
                    <span style={{
                        backgroundColor: "#A594FD",
                        display: "block",
                        borderRadius: "3px",
                        marginTop: "5px",
                        opacity: 1,
                        width: "3px",
                        height: `${scroll}px`
                    }}>
                    </span>
                </div>
                <p className="visual_number2">03</p>
            </div>
        </div>
    )
}