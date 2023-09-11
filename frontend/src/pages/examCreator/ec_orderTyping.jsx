import React from "react";
import TextEditor from "../../components/examCreator/ec_typingPage";
import "./ec_order.css";
import Ec_resourses from "../../components/examCreator/ec_resourses";

const ec_orderTyping = () => {
  return (
    <>
      <div className="row  bg-secondary bg-opacity-10">
        {/* <div className="d-flex flex-column bg-light col-sm-2">
          <div className="header"></div>
          {/* <Sidebar></Sidebar> */}
        {/* </div> */} 
        {/* <div className="main col-sm-10"> */}
          <div className="insight rounded-2 d-grid ">
            {/* <div className=" m-3 shadow-lg rounded-2 d-grid typing-card "> */}
              <div className=" m-2 card rounded-2 border-0">
<Ec_resourses></Ec_resourses>
              </div>
              <div className="mh-75 m-2 card rounded-2 border-0">
                <h2 className="text-info p-2">Toolbox</h2>
                <TextEditor></TextEditor>
              </div>
            {/* </div> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ec_orderTyping;
