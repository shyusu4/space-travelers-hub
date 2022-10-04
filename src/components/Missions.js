import React from 'react';

function Missions() {
  return (
  <table>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
      <tbody>
      <tr>
        <td><button className='mission-status-btn'>Not a Member</button></td>
        <td><button className='join-mission-btn'>Join Mission</button></td>
      </tr>
      </tbody>
  </table>
  )
}

export default Missions;
