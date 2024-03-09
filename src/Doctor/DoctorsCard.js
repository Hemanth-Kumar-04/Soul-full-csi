// DoctorCard.js
import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.img}/>
      <h2>{doctor.name}</h2>
      <p>Areas: {doctor.areas.join(', ')}</p>
      <span className="tag">Psychologist</span>
    </div>
  );
};

export default DoctorCard;
