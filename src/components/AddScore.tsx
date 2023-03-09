import React from "react";

interface Props {
  hole: number;
  score: number;
}

function AddScore({ hole, score }: Props) {
  return (
    <div className="add-score">
      <h1>Hole</h1>
      <div className="add-score_hole">
        <h2>Hole: {hole}</h2>
        <h2 className="add-score_score">Score: {score}</h2>
      </div>
    </div>
  );
}

export default AddScore;
