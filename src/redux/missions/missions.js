import { createAsyncThunk } from '@reduxjs/toolkit';
const missionsURL = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
// const JOIN_MISSIONS = 'space-travelers-hub/missions/JOIN_MISSIONS';
// const LEAVE_MISSIONS = 'space-travelers-hub/missions/LEAVE_MISSIONS';

const initialState = [];

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'space-travelers-hub/missions/GET_MISSIONS':
      return action.payload;

    default:
        return state;
  }
}

const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
    const response = await fetch(missionsURL);
    const data = await response.json();
    const missions = Object.keys(data).map((key) => ({
      ...data[key][0],
      mission_id: key,
    }));
    return missions;
});

export { getMissions };