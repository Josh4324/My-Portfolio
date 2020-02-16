import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <span className="card-title">{props.title}</span>
                </div>
                <div className="card-body">
                    <img src={props.img} className="app-image" alt={props.alt}/>
                    <p className="content">{props.content}</p>
                </div>
                <div className="card-footer">
                    <div>
                        <a href={props.gitlink}><FontAwesomeIcon className="fab" icon={faGithubSquare} /></a>
                        <a href={props.link}><FontAwesomeIcon className="fab" icon={faExternalLinkSquareAlt} /></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;
