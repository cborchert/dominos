import React, { Component } from "react";
import Domino from "./components/domino/index.js";
import "./App.css";

class App extends Component {
  maxHandSize = 3;
  numSets = 2;

  state = {
    pool: this.createDominos(this.numSets).sort(function() {
      return 0.5 - Math.random();
    }),
    hand: [],
    discard: []
  };

  moveFromHandToDiscard(i) {
    this.setState({
      hand: this.state.hand.filter(domino => domino.id !== i),
      discard: [
        ...this.state.discard,
        ...this.state.hand.filter(domino => domino.id === i)
      ]
    });
  }

  moveFromPoolToHand(i) {
    if (this.state.hand.length >= this.maxHandSize) {
      return;
    }
    this.setState({
      pool: this.state.pool.filter(domino => domino.id !== i),
      hand: [
        ...this.state.hand,
        ...this.state.pool.filter(domino => domino.id === i)
      ]
    });
  }

  createDominos(sets) {
    // return Array.apply(null, { length: sets }).map((e, i) => Array.apply(null, {length: 2}).map(f,j)=>Array.apply(null, {length: 7}).map;
    let dominos = [],
      id = 0;
    for (let s = 0; s < sets; s++) {
      for (let sideOne = 0; sideOne < 7; sideOne++) {
        for (let sideTwo = sideOne; sideTwo < 7; sideTwo++) {
          id++;
          dominos.push({ first: sideOne, second: sideTwo, id });
        }
      }
    }
    return dominos;
  }

  render() {
    const { pool, hand, discard } = this.state;
    console.log(hand);
    return (
      <div className="App">
        <div className="Hand">
          <h1>Hand</h1>
          <div>
            {hand.map((domino, i) => (
              <Domino
                key={i}
                first={domino.first}
                second={domino.second}
                flipped={true}
                onClick={() => {
                  this.moveFromHandToDiscard(domino.id);
                }}
              />
            ))}
          </div>
        </div>
        <div className="Pool">
          <h1>Pool</h1>
          <div>
            {pool.map((domino, i) => (
              <Domino
                key={i}
                first={domino.first}
                second={domino.second}
                flipped={false}
                onClick={() => {
                  this.moveFromPoolToHand(domino.id);
                }}
              />
            ))}
          </div>
        </div>
        <div className="Discard">
          <h1>Discard</h1>
          <div>
            {discard.map((domino, i) => (
              <Domino
                key={i}
                first={domino.first}
                second={domino.second}
                flipped={true}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
