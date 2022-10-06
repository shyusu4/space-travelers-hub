function MyProfile() {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((state) => state.rocketsReducer);
  const filterRockets = rockets.rockets.filter((rocket) => rocket.reserved == true);
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
        <tbody className="my-rockets">
          {filterRockets.length === 0 ? (
        <p>Let get some rockets !!!!</p>
      ) : (
        filterRockets.map((rocket) => <p key={rocket.id}>{rocket.rocket_name}</p>)
      )}
        </tbody>
      </table>
    </div>
  );
}

export default MyProfile;