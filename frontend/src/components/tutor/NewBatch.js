
import React from 'react';
import './NewBatch.css'; // Create this CSS file for styling the popup
import '@fortawesome/fontawesome-free/css/all.min.css';


const BatchFormPopup = ({ onClose }) => {
  // Handle form submission logic here

  return (
    <div className="batch-form-overlay">
      <div className="batch-form-container">
      <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i> {/* FontAwesome close icon */}
        </button>
        <form>
          {/* BsXCircle */}
          <h2>Create New Batch</h2>
          <label className="form-label">
            <h4>YEAR</h4>
            <input className="form-input" type="text" name="year"  />
          </label>
          {/* Add more form fields as needed */}
          <button className="btn btn-primary pm-z" type="submit">
            Create Batch
          </button>
        </form>
        {/*   <form>
          
        <label>
          Batch Name:
          <input type="text" />
        </label>
        {/* Add more form fields as needed */}
        {/* <button type="submit">Create Batch</button>
      </form> */} 
      </div>
    </div>
  );
};

export default BatchFormPopup;

