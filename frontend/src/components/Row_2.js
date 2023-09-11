import React from "react";

function Row_2(){
    return(
       <div className="row_2">
        <div className="arrived">
           <div className="arrived_title">
            New Arrivals-Paper Marking
            <div className="marking">
        <div className="card_1">
        <img className="sir_pic" src="vijey.jpg"></img>
        </div>
        <div className="card_2">
        <div className="con">
        <div className="sir_name">Anushka Indunil</div>
                     <div>paper-10</div>
                     <div className="due_date">Due date:-07/23</div>
        </div>
                  <button  className="btn_view">View</button>
        </div>
        
            </div> 
           </div>
        </div>
        <div className="arrived">
        <div className="arrived_title">
         New Arrivals- Discussions
         <div className="marking">
        <div className="card_1">
        <img className="sir_pic" src="vijey.jpg"></img>
        </div>
        <div className="card_2">
        <div className="con">
                     <div className="sir_name">Anushka Indunil</div>
                     <div>paper-10</div>
                     <div className="due_date">Due date:-07/23</div>
        </div>
                  <button  className="btn_view">View</button>
        </div>
        
            </div> 
         </div>
        </div>
       </div>
    )
}

export default Row_2;