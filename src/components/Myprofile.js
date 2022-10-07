import { useSelector } from 'react-redux';
import '../App.css';

function MyProfile() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rocketsReducer);
  const filterRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="my-profile">
      <div className="my-profile-titles">
        <h2>My Missions</h2>
        <h2>My Rockets</h2>
      </div>
      <div className="my-profile-body">
        <div className="my-missions">
          {joinedMissions.length === 0 ? (
            <p className="missionp">Lets get some missions!</p>
          ) : (
            joinedMissions.map((mission) => (
              <p key={mission.id}>
                <>{mission.name}</>
              </p>
            ))
          )}
        </div>
        <div className="my-rockets">
          {filterRockets.length === 0 ? (
            <p className="rocketp">Lets get some rockets!</p>
          ) : (
            filterRockets.map((rocket) => (
              <p key={rocket.id} className="rocket-list">
                {rocket.rocket_name}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
