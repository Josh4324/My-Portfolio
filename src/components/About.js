import React, {useRef, useState} from 'react';
import NavBar from './NavBar';

const About = () => {
    const imageRef = useRef(null);
    const [st, setSt] = useState(false) 
    const mouseOver = () => {
        setSt(true)
    }

    const mouseOut = () => {
        setSt(false)
    }

    return (
        <div>
             <h1 className="abouth">About Me</h1>
                <div className="about">
                    <div className="ab1">
                        <div className="innerp" style={{display:"inline-block"}}>
                            <p>Hello, i am Joshua Adesanya, a front end developer based in Lagos Nigeria,
                            i am also an Urban Planner and GIS Analyst, who is
                            passionate about website and software development,
                            i also love working with maps and building gis and web application
                            </p>
                        </div>
                        
                        <div className="ab1p">
                            <div className="innerp">
                                <p>I am a problem solver, footbal lover and i love watching tv series,
                                i support Barcelona and my all time best series is 24 hours.</p>
                            </div>
                           
                        </div>
                        
                    </div>
                   

                    <div className="ab2">
                       <img onMouseOver={mouseOver}
                       onMouseOut = {mouseOut}
                       ref = {imageRef}
                       className="image" src={ st ? '/jc.jpg' : 
                       "/josh_gray.jpg"} alt="Josh"/> 
                        
                    </div>
                    

                   
                </div>
            <NavBar></NavBar>
        </div>
    );
}

export default About;
