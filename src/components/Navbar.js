import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className='logo-container'>
        <img src={require('./img/planet.png')} alt='logo'></img>
      </div>
      <h1>Space Travelers' Hub</h1>
      <ul className='links-container'>
        <li><Link to="/">Rockets</Link></li>
        <li><Link to="/">Missions</Link></li>
        <hr />
        <li><Link to="/">My Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
