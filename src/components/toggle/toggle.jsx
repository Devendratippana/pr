import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    console.log(`Toggle is now ${newValue ? 'ON' : 'OFF'}`);

    // Scroll if toggled ON
    if (newValue) {
      setTimeout(() => {
        const formElement = document.getElementById('form-element');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
    }
  };

  return (
    <label className={`switch`}>
      <input type="checkbox" checked={isOn} onChange={toggleHandler} />
      <span className={`slider round  ${isOn ? 'on' : 'off'}`}>
        {isOn ? 'ON' : 'OFF'}
      </span>
    </label>
  );
};

export default ToggleSwitch;
