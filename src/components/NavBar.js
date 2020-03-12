import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faLaptopCode,
  faEnvelope,
  faDatabase,
  faHouseDamage
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
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
        <div className="sidebar">
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
