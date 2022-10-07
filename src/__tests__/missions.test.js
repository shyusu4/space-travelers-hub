import React from 'react';
import TestRender from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/configureStore';

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
