"use client";
import React from "react";
import { Rating } from "react-simple-star-rating";

const StarRating = ({ stars }) => {
  return (
    <Rating
      size={25}
      iconsCount={5}
      ratingValue={5}
      transition
      allowFraction
      readonly
      initialValue={stars}
      fillColor="#D32748"
    />
  );
};

export default StarRating;
