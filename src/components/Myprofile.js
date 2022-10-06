import React from 'react';
import { useSelector } from 'react-redux';
function MyProfile() {
  const rockets = useSelector((state) => state.rocketsReducer);
  const filterRockets = rockets.rockets.filter((rocket) => rocket.reserved == true);
  return (
    <div>
      <h2>My Rockets</h2>
      {filterRockets.length === 0 ? (
        <p>Let get some rockets !!!!</p>
      ) : (
        filterRockets.map((rocket) => <p key={rocket.id}>{rocket.rocket_name}</p>)
      )}
    </div>
  );
}

export default MyProfile;
