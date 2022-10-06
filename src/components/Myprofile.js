import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="my-profile">
      <table>
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
      </table>
    </div>
  );
}

export default MyProfile;
