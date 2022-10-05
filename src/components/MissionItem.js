import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { name, description } = props;
  return (
    <tr className='mission-item'>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td><button className='mission-status-btn'>Not a Member</button></td>
      <td><button className='join-mission-btn'>Join Mission</button></td>
    </tr>
  );
};

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;