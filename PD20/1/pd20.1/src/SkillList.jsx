import React from 'react';
import './SkillList.css';

const SkillList = () => {
  return (
    <div className="skill-list">
      <div className="skill-line">
        <div className="skill-box skill-js">JS</div>
        <div className="skill-box skill-html">Html</div>
      </div>
      <div className="skill-line">
        <div className="skill-box skill-css">Css</div>
        <div className="skill-box skill-react">React</div>
      </div>
    </div>
  );
};

export default SkillList;
