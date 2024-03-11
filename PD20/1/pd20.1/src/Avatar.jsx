import React from 'react';
import './Avatar.css';
import personImage from './assets/person.jpg'; 

const Avatar = () => {
  return <img className="avatar" src={personImage} alt="Person Avatar" />;
};

export default Avatar;

