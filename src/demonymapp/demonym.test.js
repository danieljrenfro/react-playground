import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './demonym';

describe(`Demonym Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})