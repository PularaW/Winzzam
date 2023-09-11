/* 
import React, { useState } from 'react';
import './NewMonth.css'; // Create this CSS file for styling the popup
import '@fortawesome/fontawesome-free/css/all.min.css';


const MonthFormPopup = ({ onClose }) => {
  // Handle form submission logic here
  const [formData, setFormData] = useState({
    month: '',
    fee: '',
    paperType: 'mcq',
    examDate: '',
    discussionDate: '',
    markingDeadline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API call or state update
    console.log(formData);
    onClose();
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="batch-form-overlay">
      <div className="batch-form-container">
      <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <form onSubmit={handleSubmit}>
          
          <h2>Create New Month</h2>
          <label>
            Select Month:
            <select
              value={formData.month}
              onChange={(e) => handleChange('month', e.target.value)}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
              
            </select>
          </label>
          <label>
            Monthly Fee (Rs.):
            <input
              type="number"
              value={formData.fee}
              onChange={(e) => handleChange('fee', e.target.value)}
            />
          </label>
          <label>
            Select Paper Type:
            <select
              value={formData.paperType}
              onChange={(e) => handleChange('paperType', e.target.value)}
            >
              <option value="mcq">MCQ</option>
              <option value="essay">Essay</option>
            </select>
          </label>
          <label>
            Exam Date:
            <input
              type="date"
              value={formData.examDate}
              onChange={(e) => handleChange('examDate', e.target.value)}
            />
          </label>
          <label>
            Discussion Date:
            <input
              type="date"
              value={formData.discussionDate}
              onChange={(e) => handleChange('discussionDate', e.target.value)}
            />
          </label>
          <label>
            Marking Deadline:
            <input
              type="date"
              value={formData.markingDeadline}
              onChange={(e) => handleChange('markingDeadline', e.target.value)}
            />
          </label>
         
        </form>
        <button className="btn btn-primary pm-z" type="submit">
            Add Month
          </button>
        
      </div>
    </div>
  );
};

export default MonthFormPopup;

 */

// ... (imports and existing code)

import React, { useState } from 'react';
import './NewMonth.css'; // Create this CSS file for styling the popup
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons';


const MonthFormPopup = ({ onClose }) => {
  const initialPaper = {
    month: '',
    fee: '',
    paperType: 'mcq',
    examDate: '',
    discussionDate: '',
    markingDeadline: ''
  };

  const [papers, setPapers] = useState([initialPaper]);

  const handleAddPaper = () => {
    if (papers.length < 8) {
      const lastPaper = papers[papers.length - 1];
      const newPaper = {
        ...initialPaper,
        month: lastPaper.month,
      fee: lastPaper.fee,
      /*   paperType: papers.paperType, // Use previous paper's type
        examDate: papers.examDate, // Use previous paper's exam date
        discussionDate: papers.discussionDate, // Use previous paper's discussion date
        markingDeadline: papers.markingDeadline, */ // Use previous paper's marking deadline
      };
      setPapers([...papers, newPaper]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API call or state update
    console.log(papers);
    onClose();
  };

  const handleChange = (index, field, value) => {
    const updatedPapers = [...papers];
    updatedPapers[index][field] = value;
    setPapers(updatedPapers);
  };

  return (
    <div className="batch-form-overlay">
      <div className="batch-form-container">
        <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faClose} />
          {/* <i className="fas fa-times"></i> */}
        </button>
        <div className="scrollable-form">
        <form onSubmit={handleSubmit}>
          <h2>Create New Month</h2>
          {papers.map((paper, index) => (
            <div key={index} className="paper-container">
               {index === 0 && ( // Show only for the first paper
      <>
              <label>
                Select Month:
                <select
                  value={paper.month}
                  onChange={(e) => handleChange(index, 'month', e.target.value)}
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
              
            </select>
              
            </label>
          <label>
            Monthly Fee (Rs.):
            <input
              type="number"
              value={paper.fee}
              onChange={(e) => handleChange('fee', e.target.value)}
            />
          </label>
          </>
               )}
          <label>
            Select Paper Type:
            <select
              value={paper.paperType}
              onChange={(e) => handleChange(index,'paperType', e.target.value)}
            >
              <option value="mcq">MCQ</option>
              <option value="essay">Essay</option>
            </select>
          </label>
          <label>
            Exam Date:
            <input
              type="date"
              value={paper.examDate}
              onChange={(e) => handleChange(index,'examDate', e.target.value)}
            />
          </label>
          <label>
            Discussion Date:
            <input
              type="date"
              value={paper.discussionDate}
              onChange={(e) => handleChange(index,'discussionDate', e.target.value)}
            />
          </label>
          <label>
            Marking Deadline:
            <input
              type="date"
              value={paper.markingDeadline}
              onChange={(e) => handleChange(index,'markingDeadline', e.target.value)}
            />
          </label>
          <hr /> 
            </div>
          ))}
          <label className="icon-label">
          <FontAwesomeIcon icon={faPlus} />
          <button className="btn btn-primary pm-s" type="button" onClick={handleAddPaper}>
           Add New Paper
          </button>
          </label>
          
          <button className="btn btn-primary pm-z" type="submit">
            Add Month
          </button>
         
        </form>
        </div>
      </div>
    </div>
  );
};

export default MonthFormPopup;
