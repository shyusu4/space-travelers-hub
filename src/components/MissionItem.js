import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissions, leaveMissions } from '../redux/missions/missions';
import './Missions.css';

const MissionItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, reserved,
  } = props;

  const joinMissionsHandler = () => {
    dispatch(joinMissions(id));
  };

  const leaveMissionsHandler = () => {
    dispatch(leaveMissions(id));
  };

  return (
    <tr className="mission-item" id={id}>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td className="mission-badge">
        {reserved ? (<span className="active-member">Active Member</span>)
          : (<span className="non-member">Not A Member</span>)}
      </td>
      <td className="mission-btn">
        {reserved ? (
          <button
            type="button"
            className="leave-mission"
            onClick={leaveMissionsHandler}
          >
            Leave Mission
          </button>
        )
          : (
            <button
              type="button"
              className="add-mission"
              onClick={joinMissionsHandler}
            >
              Join Mission
            </button>
          )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
