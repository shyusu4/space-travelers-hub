import { useSelector } from 'react-redux';
import '../App.css';

function MyProfile() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rocketsReducer);
  const filterRockets = rockets.rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="my-profile">
      <table>
        <div>
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody className="my-missions">
            {joinedMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
              </tr>
            ))}
          </tbody>
        </div>
        <div className="rocketsCon">
          <th className="rocket-title">My Rockets</th>
          <tbody className="my-rockets">
            {filterRockets.length === 0 ? (
              <p className="rocketp">Let get some rockets !!!!</p>
            ) : (
              filterRockets.map((rocket) => (
                <p key={rocket.id} className="rocket-list">
                  {rocket.rocket_name}
                </p>
              ))
            )}
          </tbody>
        </div>
      </table>
    </div>
  );
}

export default MyProfile;
