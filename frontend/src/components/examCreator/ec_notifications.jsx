import React from "react";
import './css/ec_salary.css';

const ec_notifications = () => {
  return (
    <div className="card card-view p-3 card border-0 rounded-4 w-50 shadow-lg">
      <h2 className="text-info">Recent Notifications</h2>
      <div className="d-flex flex-column overflow-y-auto h-75">
        <div className="new_order card d-flex flex-row  m-2  border-light rounded-4 p-2 bg-opacity-10 bg-info-subtle">
          <div className="info align-items-center justify-content-center py-1 px-2 w-75">
            <h2>New work</h2>
            <h3 className="text-muted">2 days ago</h3>
          </div>

          <div className="btn-class align-items-end justify-content-end mt-3 ">
            <button type="button" className="btn btn-info text-light rounded-4 px-4 ">
              View
            </button>
          </div>
        </div>

        <div className="new_order card d-flex flex-row  m-2 border-light rounded-4 p-2 bg-opacity-10 bg-info-subtle">
          <div className="info align-items-center justify-content-center py-1 w-75 px-2">
            <h2>New work</h2>
            <h3 className="text-muted">2 days ago</h3>
          </div>

          <div className="btn-class align-items-end justify-content-end mt-3 ">
            <button type="button" className="btn btn-info text-light rounded-4 px-4 ">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ec_notifications;
