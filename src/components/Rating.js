import React from "react";

export const Rating = ({ key, name, score, content }) => {
  return (
    <div className="rate" key={key}>
      <h1>{name}</h1>
      <span>Ocena: {score}</span>
      <p>{content}</p>
    </div>
  );
};
