import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Typing from "react-typing-animation";
import NavBar from "./NavBar";

const Home = () => {
  let t1 = useRef(null);
  let t2 = useRef(null);
  let sc = useRef(null);
  useEffect(() => {
    const time = gsap.timeline();
    time.from(t1, 0.5, {
      delay: 2,
      ease: "bounce",
      xPercent: 150,
    }).from(t2, 0.5, {
      delay: 0.5,
      ease: "slow",
      opacity: 0.3,
    }).from([sc.children], 0.7, {
        delay:0.8,
        ease:"power",
        opacity: 0,
        stagger: {
          amount: 0.5
        }  
    })

    return () => {};
  }, [t1, t2]);
  return (
    <div>
      <div className="cpage">
        <h1 className="hello" ref={(el) => (t1 = el)}>
          Hello,
        </h1>

        <Typing>
          <h1 className="hf">I am Josh</h1>
        </Typing>

        <h1 className="hf" ref={(el) => (t2 = el)}>
          A Front End Developer
        </h1>

        <Typing hideCursor={true} loop={true} speed={200}>
          <p>I develop quality applications and websites </p>
          <Typing.Reset />
        </Typing>

        <div className="contact">
          <NavLink className="box" to="/contact">
            Hire Me
          </NavLink>
          <NavLink className="box" to="/work">
            View my Work
          </NavLink>
          <a
            className="box"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1BxP7yirAEltqXwlvDU7aqVTssIcEzJfq/view?usp=sharing"
          >
            Resume
          </a>
        </div>

        <div className="social"  ref={(el) => (sc = el)}>
          <a href="https://www.facebook.com/adesanyajoshua" >
            <FontAwesomeIcon className="fab sc" icon={faFacebookSquare} />
          </a>
          <a href="https://twitter.com/josh_my_man" >
            <FontAwesomeIcon className="fab sc" icon={faTwitterSquare} />
          </a>
          <a href="https://www.linkedin.com/in/joshuaadesanya/" >
            <FontAwesomeIcon className="fab sc" icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Josh4324" >
            <FontAwesomeIcon className="fab sc" icon={faGithubSquare} />
          </a>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
