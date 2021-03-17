import React from 'react';

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  nextClick = (data) => (e) => {
    this.setState({ count: this.state.count + 1 })
  };

  prevClick = (data) => (e) => {
    this.setState({ count: this.state.count - 1 })
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.prevClick('data text')}>Decrement</button>
        <button onClick={this.nextClick('data text')}>Increment</button>
      </div>
    )
  }
}