import React from 'react';
import TestRender from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Rockets from '../components/Rockets';
import Navbar from '../components/Navbar';
import store from '../redux/configureStore';

describe('Test NaveBar', () => {
  it('Test NaveBar renders ', () => {
    const component = TestRender.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Test Rocket ', () => {
  it('Test Rocket component ', () => {
    const component = TestRender.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
