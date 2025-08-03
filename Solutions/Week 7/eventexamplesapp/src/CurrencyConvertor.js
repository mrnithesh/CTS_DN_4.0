// src/CurrencyConvertor.js
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { rupees } = this.state;
    const euro = (rupees / 90).toFixed(2); 

    alert(`₹${rupees} is approximately €${euro}`);
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Enter amount in Rupees: </label>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="e.g. 9000"
            required
          />
          <button type="submit">Convert</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
