import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import { gsap } from "gsap";

const About = () => {
  let abt = useRef(null);
  let pic = useRef(null);
  useEffect(() => {
  const time1 = gsap.timeline();
  time1.from(abt, 0.5, {
    delay: 1,
    ease: "back",
    yPercent: 200,
  }).from(pic, 0.5, {
    ease: "ease",
    xPercent: 200,
  })
    return () => {
    };
  }, [abt, pic]);
  
  return (
    <div>
      <h1 className="abouth"> About Me </h1>{" "}
      <div className="about">
        <div className="ab1" ref={(el) => (abt = el)}>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <p>
              Hello, i am Joshua Adesanya, a front end developer based in Lagos
              Nigeria, i am also an Urban Planner and GIS Analyst, who is
              passionate about website and software development, i also love
              working with maps and building gis and web application{" "}
            </p>
          </div>

          <div className="ab1p">
            <div>
              <p>
                I am a problem solver, footbal lover and i love watching tv
                series, i support Barcelona and my all time best series is 24
                hours.
              </p>
            </div>
          </div>
        </div>

        <div className="ab2">
          <img ref={(el) => (pic = el)} className="image" src="/jc.jpg" alt="Josh" />
        </div>
      </div>
      <NavBar> </NavBar>
    </div>
  );
};

export default About;
