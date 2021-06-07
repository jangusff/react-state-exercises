import React, { Component } from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        var updatedCnt = this.state.count + 1;
        this.setState({
          count: updatedCnt
        })
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval)
    }

    renderDisplay() {
      const { count } = this.state
      if (count >= 8) {
        clearInterval(this.interval)
        return 'BOOM!!!!'
      } else if (count % 2 === 0) {
        return 'tick'
      } else {
        return 'tock'
      }
    }
  
    render() {
      return (
        <div className='CountdownBomb'>
          {this.renderDisplay()}
        </div>
      )
    }

  }


export default Bomb