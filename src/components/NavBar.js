import {
  faDatabase,
  faEnvelope,
  faHouseDamage,
  faLaptopCode,
  faUserTie
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";


const NavBar = () => {
  let nav = useRef(null);
  useEffect(() => {
    gsap.from(nav, {
      duration: 2,
      ease: "ease",
      xPercent: -100
    })
    return () => {
    };
  }, [nav]);
  return (
    <div>
      <div className="box1">
        <h2 className="logo off">
          {" "}
          <a className="lone logocolor" href="/">
            {" "}
            Jo{" "}
          </a>
        </h2>
        <div className="sidebar"  ref={(el) => (nav = el)}>
          <div className="nav">
            <NavLink exact className="nav-item" to="/">
              {" "}
              <FontAwesomeIcon className="fas" icon={faHouseDamage} />
            </NavLink>
            <NavLink className="nav-item" to="/about">
              {" "}
              <FontAwesomeIcon className="fas" icon={faUserTie} />
            </NavLink>
            <NavLink className="nav-item" to="/skill">
              {" "}
              <FontAwesomeIcon className="fas" icon={faLaptopCode} />
            </NavLink>
            <NavLink className="nav-item" to="/work">
              {" "}
              <FontAwesomeIcon className="fas" icon={faDatabase} />
            </NavLink>
            <NavLink className="nav-item" to="/contact">
              {" "}
              <FontAwesomeIcon className="fas" icon={faEnvelope} />
            </NavLink>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default NavBar;
