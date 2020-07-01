import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedinIn,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Typing from "react-typing-animation";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <div className="cpage">
        <h1 className="hello">Hello,</h1>

        <Typing>
          <h1 className="hf">I am Josh</h1>
        </Typing>

        <h1 className="hf">A Front End Developer</h1>

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

        <div className="social">
          <a href="https://www.facebook.com/adesanyajoshua">
            <FontAwesomeIcon className="fab sc" icon={faFacebookSquare} />
          </a>
          <a href="https://twitter.com/josh_my_man">
            <FontAwesomeIcon className="fab sc" icon={faTwitterSquare} />
          </a>
          <a href="https://www.linkedin.com/in/joshuaadesanya/">
            <FontAwesomeIcon className="fab sc" icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/Josh4324">
            <FontAwesomeIcon className="fab sc" icon={faGithubSquare} />
          </a>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
