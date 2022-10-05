const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const GET_MISSIONS_SUCCESS = 'space-travelers-hub/missions/GET_MISSIONS_SUCCESS';
const JOIN_MISSIONS = 'space-travelers-hub/missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'space-travelers-hub/missions/LEAVE_MISSIONS';

const missionsURL = 'https://api.spacexdata.com/v3/missions';
const initialState = { missions: [] };

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return { ...state, loading: true };
      
    case GET_MISSIONS_SUCCESS:
      renderMissions(action.data);
      return { ...state, loading: false, missions: renderMissions(action.data) };

    default:
      return state;
  }
};

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

const joinMissions = (payload) => ({
  type: JOIN_MISSIONS,
  payload,
});

const leaveMissions = (payload) => ({
  type: LEAVE_MISSIONS,
  payload,
});

export { missionsReducer, getMissions, joinMissions, leaveMissions };