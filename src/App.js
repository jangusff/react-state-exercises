import React, { Component } from 'react';
import Accordion from './Accordion';

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

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


class App extends Component {
  render() {
    return <div>
      <Accordion sections={sectionsProp} />
    </div>
  }
}

export default App;