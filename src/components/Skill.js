import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NavBar from "./NavBar";

const Skill = () => {
  let bounce = useRef(null);
  useEffect(() => {
    const time3 = gsap.timeline();
    time3.from([bounce.children], 0.5, {
      ease:"back",
      opacity: 0, 
      stagger: {
        amount: 3
      }
  })
    return () => {
      
    };
  }, [bounce]);
  return (
    <div>
      <div className="skill">
        <h1 className="skillh skh">Skills</h1>
        <p>
          The main area of my expertise is front end development (client side of
          the web). I can buid small and medium apps with feature, animations
          and interactive layouts. These are the technologies i have been
          working with recently:
        </p>
        <div className="skflex" ref={(el) => (bounce = el)}>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195734/icons8-html-5_l5tau6.svg"
              className="icn"
              alt="html"
            />
            <p className="text-center">HTML5</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195732/icons8-css3_qzkrvo.svg"
              className="icn"
              alt="HTML5"
            />
            <p className="text-center">CSS3</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195734/icons8-nodejs_cja88e.svg"
              className="icn"
              alt="CSS3"
            />
            <p className="text-center">Node JS</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195732/icons8-git_umzmib.svg"
              className="icn"
              alt="Node JS"
            />
            <p className="text-center">GIT</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195736/icons8-python_e4v19s.svg"
              className="icn"
              alt="GIT"
            />
            <p className="text-center">PYTHON</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195732/icons8-firebase_xuqt6f.svg"
              className="icn"
              alt="PYTHON"
            />
            <p className="text-center">FIREBASE</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195734/icons8-javascript_cn4ljx.svg"
              className="icn"
              alt="FIREBASE"
            />
            <p className="text-center">JAVASCRIPT</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195734/icons8-mongodb_inhzmm.svg"
              className="icn"
              alt="JAVASCRIPT"
            />
            <p className="text-center">MONGODB</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195735/icons8-postgresql_f5obqy.svg"
              className="icn"
              alt="MONGODB"
            />
            <p className="text-center">POSTGRESQL</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195736/icons8-redux_jqzukk.svg"
              className="icn"
              alt="POSTGRESQL"
            />
            <p className="text-center">REDUX</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195734/icons8-mysql-logo_ri192j.svg"
              className="icn"
              alt="REDUX"
            />
            <p className="text-center">MYSQL</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195736/icons8-react_ncprld.svg"
              className="icn"
              alt="MYSQL"
            />
            <p className="text-center">REACT</p>
          </div>
          <div className="skillb">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195734/icons8-heroku_yezgtg.svg"
              className="icn"
              alt="REACT"
            />
            <p className="text-center">HEROKU</p>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};

export default Skill;
