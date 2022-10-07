import { NavLink } from 'react-router-dom';
import logo from './img/planet.png';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <h1>
        Space Travelers
        <span>&apos;</span>
        {' '}
        Hub
      </h1>
      <ul className="links-container">
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/Missions">Missions</NavLink>
        </li>
        <hr />
        <li>
          <NavLink to="/MyProfile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
