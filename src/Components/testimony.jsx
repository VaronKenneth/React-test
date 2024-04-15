import React from 'react';
import '../Stylesheets/Testimony.css';


function Testimony(props) {
  return (
    <div className='ts-container'>
      <img 
        className='ts-img' 
        src={require(`../Imgs/imguser-${props.img}.jpg`)}
        alt="profile-icon" />
      <div className='ts-text-container'>
        <p className='ts-name'>
          <b>{props.name}</b> de <b>{props.country}</b>
        </p>
        <p className='ts-position'>
          {props.position} en <b>{props.company}</b>
        </p>
        <p className='ts-text'>"{props.text}"</p>
      </div>
    </div>
  );
};

export default Testimony;