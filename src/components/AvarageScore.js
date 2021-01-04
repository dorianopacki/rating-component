import React from "react";

export const AvarageScore = ({ ratings }) => {
  const score = Math.round(
    ratings.reduce((prev, curr) => {
      return prev + curr.score;
    }, 0) / ratings.length
  );

  const getStars = (score) => {
    switch (score) {
      case 1:
        return "⭐☆☆☆☆";
      case 2:
        return "⭐⭐☆☆☆";
      case 3:
        return "⭐⭐⭐☆☆";
      case 4:
        return "⭐⭐⭐⭐☆☆";
      case 5:
        return "⭐⭐⭐⭐⭐";
      default:
        return "No ratings given";
    }
  };

  let stars = getStars(score);

  return (
    <>
      <span>
        <h1>Users avarage score for this film is </h1> {stars}
      </span>
    </>
  );
};
