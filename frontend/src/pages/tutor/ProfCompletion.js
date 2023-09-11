import React, { useState } from 'react';
import ProfCPersonal from '../../components/tutor/profcompletion/ProfCPersonal';
/* import ProfCProfessional from '../../components/tutor/profcompletion/ProfCProfessional';
import ProfCDocuments from '../../components/tutor/profcompletion/ProfCDocuments'; */
import './ProfCompletion.css'

const ProfCompletion = () => {
  const [activePage, setActivePage] = useState(1);

  const handleNext = () => {
    setActivePage(activePage + 1);
  };

  const handleBack = () => {
    setActivePage(activePage - 1);
  };

  const renderForm = () => {
    switch (activePage) {
      case 1:
        return <ProfCPersonal />;
      /* case 2:
        return <ProfCProfessional />;
      case 3:
        return <ProfCDocuments />; */
      default:
        return null;
    }
  };

  return (
    <div className="com-prof  ProfCompletion">
    <div className="com-prof-container ProfCompletion"> 
    <h1 ProfCompletion>Profile Completion</h1> 
    
    <div >
      {/* Progress Bar */}
      {/* <div className="progress-bar">
        <div className={`progress ${activePage === 1 ? 'active' : ''}`} />
        <div className={`progress ${activePage === 2 ? 'active' : ''}`} />
        <div className={`progress ${activePage === 3 ? 'active' : ''}`} />
      </div> */}

      {/* Form */}
      {renderForm()}

      {/* Navigation Buttons */}
      {/* <div className="buttons">
        {activePage !== 1 && <button className='btn btn-primary pm-x' onClick={handleBack}>Back</button>}
        {activePage !== 3 ? <button className='btn btn-primary pm-x' onClick={handleNext}>Next</button> : <button className='btn btn-primary pm-x'>Submit</button>}
      </div> */}
    </div>
    </div>
    </div>
  );
};

export default ProfCompletion;
