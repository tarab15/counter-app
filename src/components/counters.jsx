import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("counters rendered")
    const { onReset, counters, onDelete, onIncrement } = this.props; //object destructuring
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            // id={counter.id}
            // value={counter.value}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
