import React from 'react';
import TestRender from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import { joinMissions, leaveMissions } from '../redux/missions/missions';
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
  afterEach(() => {
    act(() => store.dispatch({
      type: 'space-travelers-hub/missions/GET_MISSIONS',
      payload: [],
    }));
  });

  it('Test Missions Component ', () => {
    const component = TestRender.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('Join Mission', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const button = await screen.findAllByText('Join Mission');
    fireEvent.click(button[0]);
    const join = await screen.findAllByText('Leave Mission');
    expect(join.length).toBe(1);
  });

  it('Return JOIN_MISSIONS', () => {
    const id = 1;
    const action = joinMissions(id);
    expect(action.type).toBe('space-travelers-hub/missions/JOIN_MISSIONS');
  });

  it('Leave Mission', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const join = await screen.findAllByText('Join Mission');
    fireEvent.click(join[0]);
    const leave = await screen.findAllByText('Leave Mission');
    fireEvent.click(leave[0]);
    const btns = await screen.findAllByText('Join Mission');
    expect(btns.length).toBe(9);
  });

  it('Return LEAVE_MISSIONS', () => {
    const id = 1;
    const action = leaveMissions(id);
    expect(action.type).toBe('space-travelers-hub/missions/LEAVE_MISSIONS');
  });
});
