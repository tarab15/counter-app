import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <main className="container">
//         <Counters />
//       </main>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    //only called once
    super(); //necesarry to call the constructor of base class
    console.log("constructor is called");
    //cannot use setState in this hook
  }

  componentDidMount() {
    //Ajax Call
    // this.setState({})
    console.log("componentDidMount is called");
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    counters[counter.id - 1] = { ...counter };
    counters[counter.id - 1].value++;
    this.setState({ counters });
  };

  render() {
    console.log("render is called");
    return (
      <div className="App">
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
