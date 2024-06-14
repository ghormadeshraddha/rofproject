import React, { useState } from 'react';
import './ClientInfoForm.css';
import logo from './Images/Assets/logo.png';
import formVisual from './Images/Assets/form-visual.png';

const ClientInfoForm = () => {
  const [budget, setBudget] = useState('');

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleNext = () => {
    // Handle the next step logic here
    alert(`Budget: ${budget}`);
  };

  const handleBack = () => {
    // Handle the back step logic here
    alert('Going back to the previous step');
  };

  return (
    <div className="form-container">
    <div className='layout'>
      <img src={logo} alt="ROF Logo" className="logo" />
      </div>

      <div className="left-panel">
        <img src={formVisual} alt="Form Visual" className="form-image" />
        <h2>Client Information Form</h2>
      </div>

      <div className="right-panel">
        <div className="stepper">
          <div className="step completed">Client Details</div>
          <div className="step completed">Project Interest</div>
          <div className="step active">Budget</div>
          <div className="step">Additional Requirements & Notes</div>
          <div className="step">Assign Lead</div>
        </div>


        <div className="form-step">
          <h3>Budget</h3>
          {/* <label>Estimated Budget </label> */}
          <input
            type="text"
            placeholder="Enter Your Budget"
            value={budget}
            onChange={handleBudgetChange}
          />
          <div className="button-group">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfoForm;
