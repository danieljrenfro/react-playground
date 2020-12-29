import React, { Component } from 'react';

class Accordion extends Component {
  state = {
    currentSection: null
  }

  static defaultProps = {
    sections: []
  }

  onClick = (index) => {
    this.setState({ currentSection: index });
  }
  
  render() {
    const buttons = this.props.sections.map((section, i) => {
      return <li key={i}>
        <button onClick={() => this.onClick(i)} type="button">{section.title}</button>
        {this.state.currentSection === i && <p>{section.content}</p>}
      </li>
    })

    return (
      <ul>
        {buttons}
      </ul>
    )
  }
}

export default Accordion;