import React from "react";
import { Link } from 'react-router-dom';
import "./thumbnail.css";

function Thumbnail(props) {
    return (
        <div className="project-thumbnail">
            <Link className="card" to={props.link}>
                <div>
                    <img className="project-image card-image-top" src={props.image} alt="Project"/>
                </div>
                <div className="titles">
                    <h4 className="project-title">{props.title}</h4>
                    <h5 className="project-category">{props.category}</h5>
                </div>
            </Link>
        </div>
    );
}

export default Thumbnail;