import React from 'react';

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false
  }

  static defaultProps = {
    bulletInChamber: 8
  }

  onTriggerPull = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      const selectedChamber = Math.ceil(Math.random() * 8);
      this.setState({ chamber: selectedChamber });
      this.setState({ spinningTheChamber: false });
    }, 2000)
  }

  generateResponse = () => {
    if (this.state.spinningTheChamber) {
      return <p>spinning the chamber and pulling the trigger!...</p>;
    } else if (this.state.chamber) {
      if (this.state.chamber === this.props.bulletInChamber) {
        return <p>BANG!!!!</p>
      } else {
        return <p>you're safe!</p>
      }
    } else {
      return '';
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onTriggerPull()} type="button">Pull the Trigger!</button>
        {this.generateResponse()}
      </div>
    )
  }

}


export default RouletteGun;