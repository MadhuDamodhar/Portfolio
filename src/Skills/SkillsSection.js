import React from 'react';
import { useSpring, animated } from 'react-spring';
import './SkillsSection.css'; 

const SkillBar = ({ skill, level }) => {
  const { width } = useSpring({
    width: `${level}%`,
    from: { width: '0%' },
  });

  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}:</div>
      {level}%<animated.div className="progress-bar" style={{ width }} />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="skills-section">
    <div data-aos="fade-up" className='frontend'>
      <h2>Frontend Skills<sub>Basic 😁</sub></h2>
      <SkillBar skill="React Js" level={50} />
      <SkillBar skill="HTML" level={90} />
      <SkillBar skill="CSS" level={60} />
      <SkillBar skill="JavaScript" level={60} />
  
      </div>
      <div data-aos="fade-up" className='backend'>
      <h2>Backend Skills<sub>Basic 😁</sub></h2><br/>
      <SkillBar skill="Spring Boot" level={70} />
      <SkillBar skill="Core Java" level={90} />
      <SkillBar skill="Advance Java" level={80} />
      <SkillBar skill="Oracle Database" level={70} />
      </div>
    </div>
  );
};

export default SkillsSection;
