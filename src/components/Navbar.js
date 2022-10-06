import { Link } from 'react-router-dom';
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
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions">Missions</Link>
        </li>
        <hr />
        <li>
          <Link to="/MyProfile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
