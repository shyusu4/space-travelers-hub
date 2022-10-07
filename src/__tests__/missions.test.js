import React from 'react';
import TestRender from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Missions from '../components/Missions';
import store from '../redux/configureStore';
import Navbar from '../components/Navbar';

describe('Test NavBar', () => {
  it('Test NavBar renders ', () => {
    const component = TestRender.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Test Missions ', () => {
  it('Test Missions component ', () => {
    const component = TestRender.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
