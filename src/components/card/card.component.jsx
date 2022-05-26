import React from "react";
import './card.styles.css';

export const Card = props =>(
    <div className="card">
        <div className="card-image">
            <img src={"https://robohash.org/"+props.monster.id+"?set=set2"} alt="" />
        </div>
        <div className="card-title">
            <h3>{props.monster.name}</h3>
        </div>
    </div>
)
