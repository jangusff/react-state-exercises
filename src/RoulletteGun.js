import React, { Component } from 'react';

class RouletteGun extends Component {

  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  /*
    constructor(props) {
        super(props);
        
        static defaultProps = {
          bulletInChamber: 8
        };

        this.state = {
           chamber: null,
           spinningTheChamber: false
        };
    }
*/
    noClicksYet = true;

    componentDidMount() {
      /*
      this.interval = setInterval(() => {
        var updatedCnt = this.state.count + 1;
        this.setState({
          count: updatedCnt
        })
      }, 1000)
      */
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }


    // JAngus - 06/07/2021 Compensating for a Javascript / JSX shortcoming.
    // Thinkful, rule of thumb:  When adding an event listener function to a React class, use an arrow function to make sure that this is referring to the class instance.
    handleButtonClick = () => {
      this.setState({ spinningTheChamber: true });

      this.timeout = setTimeout(() => {
        const rndChamber = Math.ceil(Math.random() * 8);
        this.setState({
          chamber: rndChamber,
          spinningTheChamber: false
        });
      }, 2000)
      //console.log('props in handleButtonClick', this.props);
      //console.log('state in handleButtonClick', this.state);      
    }

    renderDisplay() {
      // Per Thinkful solution to this exercise, this syntax would be preferred...
      //const { chamber, spinningTheChamber } = this.state
      //const { bulletInChamber } = this.props

      if (this.noClicksYet) {
        this.noClicksYet = false;
        return "";
      } else {
        if (this.state.spinningTheChamber) {
          return "Spinning the chamber and pulling the trigger......";
        } else if (this.state.chamber === this.props.bulletInChamber) {
          return "BANG!!!";
        } else {
          return "You're safe...for now!"
        }
      }
    }
  
    render() {
      return (
        <div className='RouletteGun'>
          <button onClick={this.handleButtonClick}>
            Pull the trigger!
          </button>
          <br />
          <p>
            {this.renderDisplay()}
          </p>
        </div>
      )
    }

  }


export default RouletteGun