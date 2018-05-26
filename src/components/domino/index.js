import React from "react";
import "./domino.css";

const Dot = () => {
  return <div className="domino__dot" />;
};

const createDots = num => {
  return Array.apply(null, { length: num }).map((a, i) => <Dot key={i} />);
};

export default ({ first, second, flipped, onClick, size }) => {
  let dominoClasses = flipped ? "domino" : "domino domino--hidden";
  if (size === "large") {
    dominoClasses += " domino--large";
  }
  return (
    <div className={dominoClasses} onClick={onClick}>
      <div className="domino__side">{first}</div>
      <div className="domino__side">{second}</div>
    </div>
  );
};
