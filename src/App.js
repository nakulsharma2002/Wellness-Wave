import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nutriton from './pages/Nutriton';
import Chat from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\ChatApp\\Chat.jsx';
import Meditation from './pages/Meditation';
import Footer from './pages/Footer';
import AudioPayer from './pages/AudioPayer';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/nutrition" element={<Nutriton/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/meditation" element={<Meditation/>} />
          <Route path="/audio" element={<AudioPayer/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

