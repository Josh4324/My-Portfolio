import React from "react";
import NavBar from "./NavBar";

const Work = () => {
  return (
    <div>
      <div className="project">
        <h1 className="proh"> Projects </h1>

        <div className="container">
          <div className="card">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1589472665/manage_xbok81.png"
              alt="manage"
              className="card-img"
            />
            <p>Manage Landing Page</p>
            <p className="np">
              <a
                href="http://managelanding.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/Manage-Landing-Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195580/solar_ws2jmm.png"
              alt=""
              className="card-img"
            />
            <p>Solar Calculator</p>
            <p className="np">
              <a
                href="https://hngi.github.io/Poseidon-Solar-Calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/hngi/Poseidon-Solar-Calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>

          <div className="card item">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588197019/wiw_majstp.png"
              alt=""
              className="card-img"
            />
            <p>Where in the World</p>
            <p className="np">
              <a
                href="https://whereintheworld1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/Rest-Country-With-Dark-Theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>

          <div className="card item">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588197661/easy_v0h1xt.png"
              alt=""
              className="card-img"
            />
            <p>Easy Bank Landing Page</p>
            <p className="np">
              <a
                href="https://easybanklanding.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/easybank-landingpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>

          <div className="card item">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195580/covid_jpwa3l.png"
              alt=""
              className="card-img"
            />
            <p>Covid 19 Awareness Quiz</p>
            <p className="np">
              <a
                href="https://covid19awarenessquiz.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/Covid-19-Quizzer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>

          <div className="card item">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1588195581/rps_duqd2l.png"
              alt=""
              className="card-img"
            />
            <p>Rock Paper Scissors</p>

            <p className="np">
              <a
                href="https://rps1.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/Rock-Paper-Scissors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>
        </div>
      </div>
      <NavBar> </NavBar>{" "}
    </div>
  );
};

export default Work;
