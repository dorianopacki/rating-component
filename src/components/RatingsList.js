import React from "react";
import { AvarageScore } from "./AvarageScore";
import { Rating } from "./Rating";

export const RatingsList = ({ ratings }) => {
  const usersRate = ratings.map((user) => {
    const { ratingId, name, score, content } = user;
    return (
      <Rating key={ratingId} name={name} score={score} content={content} />
    );
  });
  return (
    <>
      <AvarageScore ratings={ratings} />
      {usersRate}
    </>
  );
};
