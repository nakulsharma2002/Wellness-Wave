// Popup.js
import React from 'react';
import Register from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\pages\\Register.jsx';
import SignIn from 'D:\\Desktop\\Wellnesswave\\wellness-wave\\src\\pages\\SignIn.jsx';

const Popup = ({ page, onClose, onSwitchPage }) => {
  return (
    <div>
      {page === 'register' && <Register onClose={onClose} onSignInClick={() => onSwitchPage('signin')} />}
      {page === 'signin' && <SignIn onClose={onClose} onRegisterClick={() => onSwitchPage('register')} />}
    </div>
  );
};

export default Popup;
