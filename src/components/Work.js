import React from "react";
import NavBar from "./NavBar";

const Work = () => {
  return (
    <div>
      <div className="project">
        <h1 className="proh"> Projects </h1>

        <div className="container">
          <div className="card">
            <img src="solar.png" alt="" className="card-img" />
            <p>Solar Calculator</p>
            <p>
              A Progressive Web App calculates solar power needed to power an
              household. Built by Me and my team mates at HNGI6
            </p>
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
            <img src="solar.png" alt="" className="card-img" />
            <p>Solar Calculator</p>
            <p>
              A Progressive Web App calculates solar power needed to power an
              household. Built by Me and my team mates at HNGI6
            </p>
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
            <img src="solar.png" alt="" className="card-img" />
            <p>Solar Calculator</p>
            <p>
              A Progressive Web App calculates solar power needed to power an
              household. Built by Me and my team mates at HNGI6
            </p>
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
        </div>
      </div>
      <NavBar> </NavBar>{" "}
    </div>
  );
};

export default Work;
