import React, { Component } from 'react';
import TheDate from './state/TheDate';

class HelloWorld extends React.Component {

  static defaultProps = {
    step: 1
  };

  constructor(props) {
    //console.log('props in constructor', props);
    super(props);
    this.state = { who: "World" };
    // this.handleButtonClick = this.handleButtonClick.bind(this); <-- one option to get around React's "TypeError: Cannot read property 'state' of undefined".
  }

 
  render() {
      /* <button onClick={function() { console.log('clicked!') }}> */
      /* <button onClick={this.handleButtonClick}> */
      /* <button onClick={() => this.handleButtonClick()}>  <-- another option to get around React's "TypeError: Cannot read property 'state' of undefined". */
      return (
        <div className='HelloWorld'>
        <p>Hello, {this.state.who}!</p>
        <button
          onClick={() => this.setState({ who: 'world' })}
        >
          World
        </button>
        <br/>
        <button
          onClick={() => this.setState({ who: 'friend' })}
        >
          Friend
        </button>
        <br />
        <button
          onClick={() => this.setState({ who: 'React' })}
        >
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld;

