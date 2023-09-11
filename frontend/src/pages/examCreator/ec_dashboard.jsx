// pages/HomePage.js
import React from "react";
import Sidebar from "../../components/examCreator/ec_sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ec_dashboard.css";
import Ec_header from "../../components/examCreator/ec_header";
import Ec_table from "../../components/examCreator/ec_currentOrdersTable";
import Ec_newOrders from "../../components/examCreator/ec_newOrders";
import Ec_salaryView from "../../components/examCreator/ec_salaryView";
import Ec_notifications from "../../components/examCreator/ec_notifications";

const dashboard = () => {
  return (
    <>
      <div className="row  bg-secondary bg-opacity-10">
        <div className="d-flex flex-column bg-light col-sm-2">
          <Sidebar></Sidebar>
        </div>
        <div className="main col-sm-10">
          <div className="header">
            <Ec_header></Ec_header>
          </div>
          <div className="insight">
            <Ec_table></Ec_table>
            <Ec_newOrders></Ec_newOrders>
            <div className="last my-4 mx-1 border-0 d-flex gap-4">
              <Ec_salaryView></Ec_salaryView>
              <Ec_notifications></Ec_notifications>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
