import React, { Component } from 'react';
import TheDate from './state/TheDate';


/*
function App() {
  return (
    <main className='App'>
      <h1>Hello All.</h1>
    </main>
  );
}
*/


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Current Date and Time</h1>
        <TheDate />
      </div>
    );
  }
}


export default App;
