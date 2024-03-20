import React from 'react';
import './SkillCard.css';

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
    return (
        <div className={`skills-card ${isActive ? "active" : ""}`} 
        onClick={()=>onClick()}>
            <h3 className='skill-title'>{title}</h3>
            <div className='skill-icon'>
                <img src={iconUrl} alt={title}/>
                </div>
            </div>
    );
};

export default SkillCard;