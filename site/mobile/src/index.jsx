import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('NODE_ENV===>', process.env.NODE_ENV);
  }

  render() {
    return (
      <div className="App">
        <h2>mobile000</h2>
        <span>pure react cli for you</span>
      </div>
    );
  }
}