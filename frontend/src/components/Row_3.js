import React from "react";

function Row_3(){
    return(
       <div className="row_3">
        <div className="arrived">
           <div className="arrived_title">Upcoming discussions
           <div className="upcoming_dis">
           <div className="card_3">
        <div className="con">
        <div className="sir_name">Anushka Indunil</div>
                     <div>paper-10</div>
                     <div className="due_date">Due date:-07/23</div>
                     <div>Time - 8.00a.m to 9.30 a.m</div>
        </div>
                  <button  className="btn_btn_view">View</button>
        </div>
           </div>
           </div>
        </div>
        <div className="arrived">
        <div className="arrived_title">
         Recent Notifications
         <div className="notify">
           <div className="card_3">
        <div className="con">
                     <div className="due_date">Exam 2 of Anushka Indunil due on two days.. </div>
                     <div>2 more days...</div>
        </div>
                  <button  className="btn_btn_view">View</button>
        </div>
           </div>
        </div>
        </div>
       </div>
    )
}

export default Row_3;