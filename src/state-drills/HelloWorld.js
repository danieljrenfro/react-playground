import React from 'react';

class HelloWorld extends React.Component {
  
  state = {
    who: 'World'
  }

  handleOnClick(name) {
    this.setState({ who: name })
  }
  
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={() => this.handleOnClick('World')} type="button">World</button>
        <button onClick={() => this.handleOnClick('Friend')} type="button">Friend</button>
        <button onClick={() => this.handleOnClick('React')} type="button">React</button>
      </div>
    )
  }
}

export default HelloWorld;