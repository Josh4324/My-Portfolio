import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";

const Work = () => {
  let pro = useRef(null);
  useEffect(() => {
    const timepro = gsap.timeline();
    timepro.from([pro.children], {
      duration: 2,
      ease: "back",
      opacity: 0,
      stagger: {
        amount: 5,
      },
    });
    return () => {};
  }, [pro]);
  return (
    <div>
      <div className="project">
        <h1 className="proh"> Projects </h1>

        <div className="container" ref={(el) => (pro = el)}>
          <div className="card">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1593129012/farm_toztul.png"
              alt="farmvest"
              className="card-img"
            />
            <p>FarmVestNg</p>
            <p className="np">
              <a
                href="https://farmvestng.netlify.app/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/startng/bank-of-spain-farmvest-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>
          <div className="card">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1593129691/manage_oolnlf.png"
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
              src="https://res.cloudinary.com/josh4324/image/upload/v1593131531/solar_lhfr8k.png"
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
          <div className="card">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1593126455/doc_nnvjwr.png"
              alt="farmvest"
              className="card-img"
            />
            <p>Online Tutoring API</p>
            <p className="np">
              <a
                href="https://app.swaggerhub.com/apis-docs/Joshade/Online-Tutoring-API/1.0.0-oas3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/online-tutoring-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>

          <div className="card item">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1594083942/rest_disu6q.png"
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
              src="https://res.cloudinary.com/josh4324/image/upload/v1593552914/card_bnc7ha.png"
              alt=""
              className="card-img"
            />
            <p>Card Matching Game</p>
            <p className="np">
              <a
                href="https://josh4324.github.io/Card-Matching-Game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Webiste
              </a>
            </p>
            <p className="np">
              <a
                href="https://github.com/Josh4324/Card-Matching-Game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Code
              </a>
            </p>
          </div>

          <div className="card item">
            <img
              src="https://res.cloudinary.com/josh4324/image/upload/v1593130902/easy_rxu1vk.png"
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
              src="https://res.cloudinary.com/josh4324/image/upload/v1593131074/rps_fgooaf.png"
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
