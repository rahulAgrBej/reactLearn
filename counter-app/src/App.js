import React, { Component } from 'react';
import NavBar from './components/navBar';
import CounterList from "./components/counters";

class App extends React.Component {

  state = {
      counters: [
          {id: 1, value: 4},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
      ]
  };

  handleIncrement = (counter) => {
      console.log(counter);
      let newCounters = [...this.state.counters]
      const index = this.state.counters.indexOf(counter);

      newCounters[index] = {...counter};
      newCounters[index].value += 1;
      console.log('state', this.state.counters);
      console.log('newCounters', newCounters);

      this.setState({
          counters: newCounters
      });
      
  }

  handleReset = () => {
      const resetCounters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });

      this.setState({
          counters: resetCounters
      });

  }

  handleDelete = (counterId) => {
      console.log("event handler called", counterId);
      const newCounters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({
          counters: newCounters
      });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <CounterList
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
