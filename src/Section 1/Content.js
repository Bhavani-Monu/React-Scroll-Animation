import React from "react";
import Line from "./Line.js";
import './Sec1.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Logo from "../Header/logo.png"



export default function Content(props) {
    gsap.registerPlugin(ScrollTrigger);
    let $ = require('jquery');
    React.useEffect(() => {
        $('.word').each(function(index){
            let triggerElement = $(this);
            let targetElement = $(this).find(".word-mask");
        
            let tl = gsap.timeline({
                scrollTrigger: {
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    trigger: triggerElement,
                    toggleActions: "restart none reverse none",
                }
            });
        
            tl.to(targetElement, {
                width: "0%",
                duration: 1,
            });
        });
    
    },[]);
    let content = props.content;
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

    let lines = [];
  
  	useEffect(() => {

            const handleResize = () => {
                setScreenSize(getCurrentDimension());
                lines = splitIntoLines(content, screenSize.width*0.8);
            }

    		window.addEventListener('resize', handleResize);
            
    		return(() => {
                
        		window.removeEventListener('resize', handleResize);
    		})
  	}, [screenSize.width])
    //let lines = content.split(' ')
    //const input = "I'm baby kickstarter authentic kinfolk PBR&B post-ironic live-edge readymade truffaut tousled activated charcoal etsy. Schlitz marfa yuccie heirloom yr, cornhole single-origin coffee master cleanse fixie tumblr street art edison bulb shoreditch. Keytar tousled hell of, XOXO selfies vegan hot chicken keffiyeh sriracha roof party jean shorts activated charcoal. Readymade flexitarian tbh, iceland health goth poutine wolf 8-bit put a bird on it street art vice mixtape kickstarter. Viral messenger bag kale chips sriracha chillwave.".split(" ");
    function splitIntoLines(text, windowWidth) {
        const words = text.split(" ");
        let line = "";
        const lines = [];
    
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          const wordWidth = window.innerWidth/50; // assuming each character has a width of 10 pixels
    
          if ((line + word).length*wordWidth > windowWidth) {
            lines.push(line.trim());
            line = " ";
          }
          line += word + " ";
    }

    lines.push(line.trim());

    return lines;
  }

  lines = splitIntoLines(content, screenSize.width*0.8);

    return(
        <div className="section1_content">
            <div className='content' >  
            {lines.map((line, index) => {
                return <Line key={index} line={line} />
            })}
        </div>
        </div>
    )
 }