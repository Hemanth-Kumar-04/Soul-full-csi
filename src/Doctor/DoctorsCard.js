// DoctorCard.js
import React from 'react';
import Doctor1 from './1.png'
const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={Doctor1}/>
      <h2>{doctor.name}</h2>
      <p>Areas: {doctor.areas.join(', ')}</p>
      <span className="tag">Psychologist</span>
    </div>
  );
};

export default DoctorCard;
