import React from "react";
import AddScore from "./AddScore";
import "./Card.css";

function Card() {
  return <div className="card">
    <AddScore hole={1} score={2} />
  </div>;
}

export default Card;
