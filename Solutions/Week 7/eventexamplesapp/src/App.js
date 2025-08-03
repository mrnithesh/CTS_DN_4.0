import React from 'react';
import CounterEvents from './CounterEvents';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples App</h1>
      <CounterEvents />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
