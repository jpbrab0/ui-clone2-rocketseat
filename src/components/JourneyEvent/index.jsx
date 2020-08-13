import React from "react";
import "./styles.css";

function JourneyEvent(props) {
  return (
    <div className="event">
      <main>
        <div className="info">
          <header>
            <span>{props.category}</span>
            <p>0{props.count}</p>
          </header>
          <div className="description">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default JourneyEvent;
