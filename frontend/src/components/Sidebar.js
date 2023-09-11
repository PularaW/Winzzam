import React from "react";
import Content from "./Content";

function Sidebar(){
    return(
        <div id="viewport">
<div className="header">
      <a  className="topic" href="#"><img className="topicpic" src="transparency.png"></img>Winzzam</a>
      <div className="profile">
        <div className="div_1">
        <img className="profilepic" src="vijey.jpg"></img>
        </div>
        <div className="div_2">
          <div>Sachithra</div>
          <div>Panel memeber</div>
        </div>
        <div>
        <img className="downpic" src="down.png"></img>
        </div>
      </div>
    </div>
  <div id="sidebar">
    
    <ul class="nav">
      <li className="list">
        <a href="#"><img className="dashpic" src="dash.png"></img>
           Dashboard
        </a>
      </li>
      <li className="list">
        <a href="#"><img className="dashpic" src="dash.png"></img>
          Shortcuts
        </a>
      </li>
      <li className="list">
        <a href="#"><img className="dashpic" src="dash.png"></img>
          Overview
        </a>
      </li>
      <li className="list">
        <a href="#"><img className="dashpic" src="dash.png"></img>
          Events
        </a>
      </li>
      <li className="list">
        <a href="#"><img className="dashpic" src="dash.png"></img>
          About
        </a>
      </li>
      
    </ul>
  </div>

  <div className="content">
    <Content/>
  </div>
  
</div>
    );
}

export default Sidebar;