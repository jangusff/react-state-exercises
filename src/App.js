import React, { Component } from 'react';
import Tabs from './state/Tabs';

/*
function App() {
  return (
    <main className='App'>
      <h1>Hello All.</h1>
    </main>
  );
}

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
*/

// array of objects each with a name and content
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return <div>
      <Tabs tabs={tabsProp} />
    </div>
  }
}

export default App;