import React from "react";
import "./domino.css";

const Dot = () => {
  return <div className="domino__dot" />;
};

const createDots = num => {
  return Array.apply(null, { length: num }).map((a, i) => <Dot key={i} />);
};

export default ({ first, second, flipped, onClick }) => {
  const dominoClasses = flipped ? "domino" : "domino domino--hidden";
  return (
    <div className={dominoClasses} onClick={onClick}>
      <div className="domino__side">{first}</div>
      <div className="domino__side">{second}</div>
    </div>
  );
};
