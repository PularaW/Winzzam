import "./Navbar.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { BsBell } from 'react-icons/bs';
import profile from "../../assets/profile.png";

const Navbar = () => {
  
  // Retrieve user data from localStorage
const userJSON = localStorage.getItem("user");
let username = "";
let userRole = ""; // Initialize username variable

if (userJSON) {
  // Parse JSON string to object
  const user = JSON.parse(userJSON);
  username = user.username;
  userRole = user.userRole;

} else {
  // Handle the case where user data is not available
  console.log("User data not found.");
}


  return (
    <div className='custom-header bg-light d-flex align-items-center justify-content-between'>
    <div className="right">
        <h1 className='name fw-medium d-inline-flex px-5'>Hello, {username}</h1>
    </div>
    <div className="left d-flex px-2">
    <button class="btn btn-primary pm-z">Create a New Batch</button>
    </div>
    <div className="left d-flex px-2">
        <div className="notification px-1 d-flex align-items-center justify-content-center">
            <BsBell></BsBell>
        </div>
        <div className="profile d-flex">
          <div className="profile-photo px-1 m-2">
            <img src={profile} alt="" style={{ height: "50px", width: "50px" }} />
          </div>
          <div className="info d-flex align-items-center justify-content-center">
            <div className="name">
                <small className='role'>{username}</small>
                <p>{userRole}</p>
                
            </div>
           
            

          </div>
        </div>
    </div>
</div>

  )
}

export default Navbar