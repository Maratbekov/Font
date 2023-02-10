import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <FaAngleLeft/>
      </span>
      <span className="next" onClick={nextSlide}>
        <FaAngleRight/>
      </span>
    </div>
  );
}

export default Arrows;
