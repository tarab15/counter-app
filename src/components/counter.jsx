import React, { Component } from "react";

class Counter extends Component {
  countValue() {
    if (this.props.counter.value === 0) return <span>Zero</span>;
    return <span>{this.props.counter.value}</span>;
  }
  bootClassCount() {
    let appear = "m-2 badge badge-";
    appear += this.props.counter.value === 0 ? "warning" : "primary";
    return appear;
  }

  //life cycle hook
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //ajax call for some data to server
    }
  }

  componentWillUnmount() {
    console.log("counter unmount");
    //can be used for any kind of cleanup we want before a component is removed
  }

  render() {
    console.log("counter render called");
    return (
      <div>
        <span className={this.bootClassCount()}>{this.countValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
