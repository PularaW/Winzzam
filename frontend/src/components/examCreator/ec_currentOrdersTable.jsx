import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./css/ec_oders.css";
import { NavLink } from "react-router-dom";

const ec_table = () => {
  return (
    <div className="insight-first d-flex px-1 py-3">
      <div className="table w-75 p-3 bg-light border-5 rounded-4 shadow-sm ">
        <h2 className="text-info">
           Recent Orders
        </h2>
        <table className="order table table-hover">
          <thead className="head">
            <tr>
              <th>#</th>
              <th>Tuition Master</th>
              <th>Month</th>
              <th>Exam</th>
              <th>Progress</th>
              <th>Due Date</th>
              <th><NavLink className="border-0 bg-transparent custom-transition" >View all </NavLink></th>
            </tr>
          </thead>
          <tbody className="bdy">
            <tr>
              <td>01</td>
              <td>Janaka Abeywardhana</td>
              <td>March</td>
              <td>MCQ-1</td>
              <td>
                <div className="progress mt-2">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                  >
            
                  </div>
                </div>
              </td>
              <td>22/01</td>
              <td><NavLink to="/ExamCreator/orderTyping" className="border-0 text-light rounded-3 px-3 text-decoration-none py-1 ">View </NavLink></td>
            </tr>
            <tr>
              <td>01</td>
              <td>Janaka Abeywardhana</td>
              <td>March</td>
              <td>MCQ-1</td>
              <td>
                <div className="progress  mt-2">
                  <div
                    className="progress-bar w-50 "
                    role="progressbar"
                  >
         
                  </div>
                </div>
              </td>
              <td>22/01</td>
              <td><NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">View </NavLink></td>
            </tr>
            <tr>
              <td>01</td>
              <td>Janaka Abeywardhana</td>
              <td>March</td>
              <td>MCQ-1</td>
              <td>
                <div className="progress  mt-2">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                  >

                  </div>
                </div>
              </td>
              <td>22/01</td>
              <td><NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">View </NavLink></td>
            </tr>
            <tr>
              <td>01</td>
              <td>Janaka Abeywardhana</td>
              <td>March</td>
              <td>MCQ-1</td>
              <td>
                <div className="progress mt-2">
                  <div
                    className="progress-bar w-50"
                    role="progressbar"
                  >

                  </div>
                </div>
              </td>
              <td>22/01</td>
              <td><NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">View </NavLink></td>
            </tr>
            <tr>
              <td>01</td>
              <td>Janaka Abeywardhana</td>
              <td>March</td>
              <td>MCQ-1</td>
              <td>
                <div className="progress mt-2">
                  <div
                    className="progress-bar w-25"
                    role="progressbar"
                  >
                  </div>
                </div>
              </td>
              <td>22/01</td>
              <td><NavLink className="border-0 text-light rounded-3 px-3 text-decoration-none py-1">View </NavLink></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cards d-grid">
        <div className="ongoing card align-items-center justify-content-center m-4 px-5 rounded-4 border-0 text-light">
          <h2>115</h2>
          <h3>Ongoing work</h3>
        </div>
        <div className="completed card align-items-center justify-content-center m-4 px-5 rounded-4 border-0 text-light">
          <h2>15</h2>
          <h3>Completed work</h3>
        </div>
      </div>
    </div>
  );
};

export default ec_table;
