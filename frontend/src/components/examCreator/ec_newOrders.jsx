import React from "react";
import profile from "../../assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ec_newOrders.css";

const ec_newOrders = () => {
  return (
    <div className="new card border-0 mx-2 rounded-4 shadow-sm d-flex flex-column">
      <h2 className="name mx-4 text-info ">New Arrivals</h2>
      <div className="d-flex flex-row overflow-x-auto w-100"> 
      <div className="new_order card d-flex   m-4 px-1 shadow-lg border-light rounded-3">
        <div className="details d-flex w-100">
          <div className="profile p-2 py-4">
            <img src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-info">Tuition Master</h3>
            <h2>Janaka Abeywardhana</h2>
            <h3 className="text-muted">Due Date - 12/02</h3>
          </div>
        </div>
        <div className="btn-class align-items-end justify-content-end ">
          <button type="button" className="btn btn-info text-light px-4 rounded-4 ">View</button>
        </div>
      </div>
     
      <div className="new_order card d-flex  m-4 px-1 shadow-lg border-light rounded-3">
        <div className="details d-flex w-100">
          <div className="profile p-2 py-4">
            <img src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-info">Tuition Master</h3>
            <h2>Janaka Abeywardhana</h2>
            <h3 className="text-muted">Due Date - 12/02</h3>
          </div>
        </div>
        <div className="btn-class align-items-end justify-content-end ">
          <button type="button" className="btn btn-info text-light px-4 rounded-4  ">View</button>
        </div>
      </div>
      <div className="new_order card d-flex  m-4 px-1 shadow-lg border-light rounded-3">
        <div className="details d-flex w-100">
          <div className="profile p-2 py-4">
            <img src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-info">Tuition Master</h3>
            <h2>Janaka Abeywardhana</h2>
            <h3 className="text-muted">Due Date - 12/02</h3>
          </div>
        </div>
        <div className="btn-class align-items-end justify-content-end ">
          <button type="button" className="btn btn-info text-light px-4 rounded-4  ">View</button>
        </div>
      </div>
      <div className="new_order card d-flex  m-4 px-1 shadow-lg border-light rounded-3">
        <div className="details d-flex w-100">
          <div className="profile p-2 py-4">
            <img src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-info">Tuition Master</h3>
            <h2>Janaka Abeywardhana</h2>
            <h3 className="text-muted">Due Date - 12/02</h3>
          </div>
        </div>
        <div className="btn-class align-items-end justify-content-end ">
          <button type="button" className="btn btn-info text-light px-4 rounded-4 ">View</button>
        </div>
      </div>
      <div className="new_order card d-flex  m-4 px-1 shadow-lg border-light rounded-3">
        <div className="details d-flex w-100">
          <div className="profile p-2 py-4">
            <img src={profile} alt="" className="rounded-3" />
          </div>
          <div className="info align-items-start justify-content-center py-4">
            <h3 className="tuition_master text-info">Tuition Master</h3>
            <h2>Janaka Abeywardhana</h2>
            <h3 className="text-muted">Due Date - 12/02</h3>
          </div>
        </div>
        <div className="btn-class align-items-end justify-content-end ">
          <button type="button" className="btn btn-info text-light px-4 rounded-4 ">View</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ec_newOrders;
