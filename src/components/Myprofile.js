import { useSelector } from 'react-redux';
import '../App.css';

function MyProfile() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rocketsReducer);
  const filterRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);

  return (
    <table className="my-profile">
      <thead>
        <tr className="my-profile-titles">
          <th>My Missions</th>
          <th>My Rockets</th>
        </tr>
      </thead>
      <tbody>
        <td className="my-missions">
          <tr>
            {joinedMissions.length === 0 ? (
              <p>Lets get some missions!</p>
            ) : (
              joinedMissions.map((mission) => (
                <p key={mission.id}>
                  <p>{mission.name}</p>
                </p>
              ))
            )}
          </tr>
        </td>
        <td className="my-rockets">
          <tr>
            {filterRockets.length === 0 ? (
              <p className="rocketp">Lets get some rockets!</p>
            ) : (
              filterRockets.map((rocket) => (
                <p key={rocket.id} className="rocket-list">
                  {rocket.rocket_name}
                </p>
              ))
            )}
          </tr>
        </td>
      </tbody>
    </table>
  );
}

export default MyProfile;
