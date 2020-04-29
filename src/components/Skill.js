import React from "react";
import NavBar from "./NavBar";

const Skill = () => {
  return (
    <div>
      <div className="skill">
        <h1 className="skillh skh">Skills</h1>
        <p>
          The main area of my expertise is front end development (client side of
          the web). I can buid small and medium apps with feature, animations
          and interactive layouts. These are the technologies i have been working
          with recently:
        </p>
        <div className="skflex">
          <div className="skillb">
            <img src="img/icons8-html-5.svg" className="icn" alt="html" />
            <p className="text-center">HTML5</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-css3.svg" className="icn" alt="" />
            <p className="text-center">CSS3</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-nodejs.svg"  className="icn" alt="" />
            <p className="text-center">Node JS</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-git.svg"  className="icn" alt="" />
            <p className="text-center">GIT</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-python.svg"  className="icn" alt="" />
            <p className="text-center">PYTHON</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-firebase.svg"  className="icn" alt="" />
            <p className="text-center">FIREBASE</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-javascript.svg"  className="icn" alt="" />
            <p className="text-center">JAVASCRIPT</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-mongodb.svg"  className="icn" alt="" />
            <p className="text-center">MONGODB</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-postgresql.svg"  className="icn" alt="" />
            <p className="text-center">POSTGRESQL</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-redux.svg"  className="icn" alt="" />
            <p className="text-center">REDUX</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-mysql-logo.svg"  className="icn" alt="" />
            <p className="text-center">MYSQL</p>
          </div>
          <div className="skillb">
            <img src="img/icons8-react.svg"  className="icn" alt="" />
            <p className="text-center">REACT</p>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Skill;
