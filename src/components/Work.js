import React, { useRef } from "react";
import NavBar from "./NavBar";

const Work = () => {
  const imgRef = useRef(null);

  const fc = () => {
    imgRef.current.src = "";
  };
  return (
    <div>
      <div className="project">
        <h1 className="proh"> Projects </h1>

        <div>
          <div className="card">
            <img
              src="solar.png"
              alt=""
              className="card-img"
              onMouseEnter={fc}
              ref={imgRef}
            />
          </div>
        </div>
      </div>
      <NavBar> </NavBar>{" "}
    </div>
  );
};

export default Work;
