import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  style = {
    fontSize: '10px',
    fontWeight: 'bold'
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          style={{ fontSize: '20px' }}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
