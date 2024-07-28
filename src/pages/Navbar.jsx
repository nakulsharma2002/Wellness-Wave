import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\pages\\Popup.jsx';
import 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\App.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <Navbar_Values/>
      </nav>
    </>
  );
};

export default Navbar;

function Navbar_Values() {

  const [showPopup, setShowPopup] = useState(false);
  const [popupPage, setPopupPage] = useState('register');

  const handleOpenPopup = (page) => {
    setPopupPage(page);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nutrition">Nutrition</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">Chat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/meditation">Meditation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/audio">Audio</Link>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="App" style={{ display: 'flex', width: '23%', height: '40px', flexWrap: 'wrap', paddingLeft: '33px' }}>
        <header className="App-header" style={{ padding: '0px', height: '0px', width: '133px', backgroundColor: '#f4f4ff', minHeight: '6vh' }}>
          <button style={{ fontSize: '12px', height: '36px', width: '124px' }} onClick={() => handleOpenPopup('register') } className="AppButton">Create Account</button>
        </header>
        {showPopup && <Popup page={popupPage} onClose={handleClosePopup} onSwitchPage={handleOpenPopup} />}
      </div>
      <div>
        {/* {weatherDetails ? (
          <div>
            <h2>{weatherDetails.weather[0].description}</h2>
            <p>Temperature: {weatherDetails.main.temp}°C</p>
          </div>
        ) : (
          <p>No weather details available</p>
        )} */}
      </div>
    </nav>
  );
}







