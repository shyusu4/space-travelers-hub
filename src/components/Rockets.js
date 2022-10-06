import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket, rocketsReducer } from '../redux/rockets/rockets';
import './rockets.css';
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
        <div key={rocket.id} className="rocket-container">
          <img src={rocket.flickr_images} alt="img" className="rocket-img" />
          <div className="rocket-div">
            <h2 className="rocket-name">{rocket.rocket_name}</h2>
            <p className="rocket-discription">{rocket.description}</p>
            {!rocket.reserved ? (
              <button
                type="button"
                className="reseveRocket"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reseve Rocket
              </button>
            ) : (
              <button
                type="button"
                className="cancelReservation"
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
