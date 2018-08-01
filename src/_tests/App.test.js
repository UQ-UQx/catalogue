import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Notification, SaiComponent } from '../App';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders error notification', () => {
  const AppComponent = shallow(<App />);
  AppComponent.setState({
    error: true,
  });
  expect(AppComponent.find(Notification).length).toBe(1);
});

it('Sai components is added', () => {
  const AppComponent = shallow(<App />);
  AppComponent.setState({
    sai: true,
  });
  expect(AppComponent.find(SaiComponent).length).toBe(1);
});
