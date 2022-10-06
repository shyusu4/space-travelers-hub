const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const GET_MISSIONS_SUCCESS = 'space-travelers-hub/missions/GET_MISSIONS_SUCCESS';
const JOIN_MISSIONS = 'space-travelers-hub/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'space-travelers-hub/missions/LEAVE_MISSIONS';

const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = { missions: [] };

const getMissions = () => async (dispatch) => {
  dispatch({ type: GET_MISSIONS });
  const response = await fetch(missionsURL);
  const data = await response.json();
  return dispatch({ type: GET_MISSIONS_SUCCESS, data });
};

const renderMissions = (data) => {
  const missionsArr = [];
  for (let i = 0; i < data.length; i += 1) {
    missionsArr.push({
      id: data[i].mission_id,
      name: data[i].mission_name,
      description: data[i].description,
      reserved: false,
    });
  }
  return missionsArr;
};

const joinMissions = (id) => ({
  type: JOIN_MISSIONS,
  id,
});

const leaveMissions = (id) => ({
  type: LEAVE_MISSIONS,
  id,
});

export const joinMissionsFunc = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });
  return newState;
};

export const leaveMissionsFunc = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, loading: true };

    case GET_MISSIONS_SUCCESS:
      renderMissions(action.data);
      return { ...state, loading: false, missions: renderMissions(action.data) };

    case JOIN_MISSIONS:
      return { ...state, missions: joinMissionsFunc(state.missions, action.id) };

    case LEAVE_MISSIONS:
      return { ...state, missions: leaveMissionsFunc(state.missions, action.id) };

    default:
      return state;
  }
};

export {
  missionsReducer, getMissions, joinMissions, leaveMissions,
};
