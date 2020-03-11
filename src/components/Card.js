import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Card = props => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img src={props.img} className="app-image" alt={props.alt} />{" "}
        </div>

        <div className="card-body">
          <span className="card-title"> {props.title} </span>{" "}
          <p className="content"> {props.content} </p>{" "}
          <div>
            <a href={props.gitlink}>
              <FontAwesomeIcon className="fab" icon={faGithubSquare} />
            </a>
            <a href={props.link}>
              <FontAwesomeIcon className="fab" icon={faExternalLinkSquareAlt} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
