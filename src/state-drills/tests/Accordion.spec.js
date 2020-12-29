import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Accordion from '../Accordion';

import sections from '../accordion-sections';

describe('Accordion component', () => {
  it('renders without crashing without props', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(<Accordion />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders without crashing with props', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(<Accordion sections={sections} />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders empty given no sections', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly given section', () => {
    const wrapper = shallow(<Accordion sections={sections}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens the first section when button clicked', () => {
    const wrapper = shallow(<Accordion sections={sections}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('only opens the last section when it is clicked, not before', () => {
    const wrapper = shallow(<Accordion sections={sections}/>);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})