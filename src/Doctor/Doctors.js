import React, { useState } from 'react';
import doctorsData from './doctorsdata';
import DoctorCard from './DoctorsCard';
import './Doctors.css'; // Import the CSS file

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.areas.some((area) => area.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="Doctorsapp">
      <input
       className='input'
        type="text"
        placeholder="Search by Area"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="doctors-container">
        {searchTerm === '' ? (
          // Display all doctors if no search term
          doctorsData.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
        ) : (
          // Display filtered doctors if there's a search term
          filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
        )}
      </div>
    </div>
  );
};

export default Doctors;
