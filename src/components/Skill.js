import React from 'react';
import NavBar from './NavBar';

const Skill = () => {
    return (
        <div>
            <div className="skill">
                    <h1 className="skillh">Skills</h1>
                    <p>
                    The main area of my expertise is front end development (client side of the web).
                    I can buid small and medium apps with feature, animations and interactive layouts.
                    This are the technologies i have been working with recently:
                    </p>
                    <div className="skcontainer">

                            <div >
                                <h3 className="skh">Front End</h3>
                                    <ul className="sk">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>SCSS</li>
                                        <li>Tailwind CSS</li>
                                        <li>Bootstrap</li>
                                        <li>Material Design</li>
                                    </ul>  
                            </div>

                            <div> 
                                <h3 className="skh">Programming Language</h3>

                                <ul  className="sk">
                                    <li>Javascript(ES6)</li>
                                    <li>Javacript(Node)</li>
                                    <li>Python</li>
                                </ul>
                            </div>

                            <div> 
                                <h3 className="skh">Framework and Libraries</h3>

                                <ul  className="sk">
                                    <li>React Js</li>
                                    <li>Angular</li>
                                    <li>Gatsby</li>
                                    <li>Express</li>
                                    <li>Django</li>
                                    <li>Flask</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="skh">Back End</h3>
                                <ul className="sk">
                                <li>Node</li>
                                <li>Express</li>
                                <li>Firebase</li>
                                </ul>
                                
                            </div>


                            <div>
                                <h3 className="skh">Database</h3>
                                <ul className="sk">
                                    <li>Mysql</li>
                                    <li>PostgreSQl</li>
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                </ul>
                                
                            </div>

                            <div>
                                <h3 className="skh">Desktop Application</h3>
                                    <ul  className="sk">
                                        <li>Electron</li>
                                        <li>Python</li>
                                    </ul>
                            </div>

                            <div>
                                <h3 className="skh">Tools</h3>
                                <ul  className="sk">
                                <li>Git</li>
                                <li>Npm</li>
                                <li>Heroku</li>
                                <li>Netlify</li>
                                <li>Basic Linux</li>
                                </ul>
                               
                            </div>

                            <div>
                                <h3 className="skh">Cloud</h3>
                                <ul  className="sk">
                                <li>Amazon EC2</li>
                                <li>Aazon S3</li>
                                <li>Amazon Serverless</li>
                                </ul>
                                
                            </div>

                            <div>
                                <h3 className="skh">Design</h3>
                                <ul  className="sk">
                                <li>Figma</li>
                                </ul>
                                
                            </div>
                      
                    </div>
               </div>
            <NavBar></NavBar>
        </div>
    );
}

export default Skill;
