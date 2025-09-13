import React from 'react'
import './Toggle.css'
import { useState } from 'react';

export const Toggle = () => {
  const [IsOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!IsOn);
  };

  const checkIsOn = IsOn? "on": "off";
  const toggleColor = {backgroundColor: IsOn? "#5de162ff" : "#e9574cff"}

  return (
    <div className='toggle-switch' style={toggleColor} onClick={handleToggle}>
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{IsOn ? "on": "off"}</span>
      </div>
    </div>
  )
}

