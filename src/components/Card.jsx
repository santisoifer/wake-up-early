import React from "react";

function Card(props) {

    return (
        <div className="card">
            <div className="card__container">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p><i class="fa-solid fa-bullseye"></i> {props.objetive}</p>
            </div>
            <div className="card__container">
                <h3>by {props.creator}</h3>
            </div>
        </div>
    )
}

export default Card;