import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  style = {
    fontSize: '10px',
    fontWeight: 'bold'
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>there are no tags</p>;
    } else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }

  handleIncrement() {
    console.log('increment clicked');
  }

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          style={{ fontSize: '20px' }}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>

        {this.state.tags.length === 0 && <p>please enter some tags</p>}
        {this.renderTags()}
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
