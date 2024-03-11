import React from 'react';
import Avatar from './Avatar';
import Intro from './Intro';
import SkillList from './SkillList';
import './Card.css';

const Card = ({ isAvailable }) => {
  return (
    <div className={`card ${isAvailable ? 'available' : ''}`}>
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
};

export default Card;
