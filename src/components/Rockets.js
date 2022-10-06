import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, rocketsReducer } from '../redux/rockets/rockets';
function Rockets() {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, [dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.flickr_images} alt="img" />
          <h2>{rocket.rocket_name}</h2>
          <p>{rocket.description}</p>
          {!rocket.reserved ? (
            <button type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>
              Reseve Rocket
            </button>
          ) : (
            <button type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>
              Cancel Reservation
            </button>
          )}
        </div>
      ))}
    </>
  );
}
export default Rockets;
