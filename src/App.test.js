// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { mount } from 'enzyme';
import App from './App';
describe('Calculator', () => {
  it('+ test', () => {
    const component = mount(<App debug />);
    const one = component.find('button[value="1"]')
    one.simulate('click')
    const two = component.find('button[value="2"]')
    two.simulate('click')

    const plus = component.find('button[value="+"]')
    plus.simulate('click')

    const three = component.find('button[value="3"]')
    const eight = component.find('button[value="8"]')

    three.simulate('click')
    eight.simulate('click')

    const equal = component.find('button[value="="]')
    equal.simulate('click')
    expect(component.state().out.toString()).toBe("50")
  });

  it('- test', () => {
    const component = mount(<App debug />);
    const one = component.find('button[value="1"]')
    one.simulate('click')
    const two = component.find('button[value="2"]')
    two.simulate('click')

    const plus = component.find('button[value="-"]')
    plus.simulate('click')

    const three = component.find('button[value="3"]')
    const eight = component.find('button[value="8"]')

    three.simulate('click')
    eight.simulate('click')

    const equal = component.find('button[value="="]')
    equal.simulate('click')
    expect(component.state().out.toString()).toBe("-26")
  });

});