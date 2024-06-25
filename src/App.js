import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import ContrastToggle from './components/ContrastToggle';
import TextSizeToggle from './components/TextSizeToggle';
import ProfileComponent from './components/ProfileComponent';
import MapComponent from './components/MapComponent'; 
import { useUserModel } from './models/userModel';
import { useContrastModel } from './models/contrastModel';
import { useTextSizeModel } from './models/textSizeModel';
import { logout } from './controllers/authController';
import { toggleContrast } from './controllers/contrastController';
import { increaseTextSize, decreaseTextSize } from './controllers/textSizeController';

function App() {
  const { user, setUser } = useUserModel();
  const { isHighContrast, setIsHighContrast } = useContrastModel();
  const { textSize, setTextSize } = useTextSizeModel();

  useEffect(() => {
    document.body.classList.toggle('high-contrast', isHighContrast);
  }, [isHighContrast]);

  const userProfile = {
    name: 'User Example',
    age: 30,
    email: 'user@example.com',
    profilePicture: 'https://thispersondoesnotexist.com'
  };

  return (
    <Router>
      <div className={`App ${isHighContrast ? 'high-contrast' : ''}`}>
        <Header user={user} onLogout={() => logout(setUser)} />
        <ContrastToggle isHighContrast={isHighContrast} toggleContrast={() => toggleContrast(isHighContrast, setIsHighContrast)} />
        <TextSizeToggle textSize={textSize} increaseTextSize={() => increaseTextSize(textSize, setTextSize)} decreaseTextSize={() => decreaseTextSize(textSize, setTextSize)} />
        <div className={`content scale-${textSize}`}>
          <Routes>
            <Route exact path="/" element={<MainContent user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            {user && <Route path="/profile" element={<ProfileComponent userProfile={userProfile} />} />}
            <Route path="/map" element={<MapComponent />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
