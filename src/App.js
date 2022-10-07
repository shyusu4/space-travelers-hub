import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import MyProfile from './components/Myprofile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
