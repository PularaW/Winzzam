import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsPhoneFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { LuLogOut } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import UseNavLinkHandler from "../../hooks/useState";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();
  const { activeLink, handleNavLinkClick } = UseNavLinkHandler();

  const activePathsPM = ["/tutor_panel", "/tutor_add_panel"];
  const activePathsDB = ["/tutor_active_month"]
  

  return (
    <>
    
      <div className="ex_sidebar fs-5 font-family-poppins" style={{ height: "100vh" }}>
        <div className=" px-5 m-2">
          <img src={logo} alt="" style={{ height: "100px", width: "100px" }} />
        </div>
        <div className="sidebar d-flex flex-column bg-light mx-4 fs-5">
          <NavLink
            to="/TutorDashboard"
            
            className={`d-flex p-2 rounded-3 mb-2 ${activePathsDB.some(path => path === location.pathname) ? "active" : ""}`}
            // onClick={() => handleNavLinkClick("/")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <RxDashboard />
            </span>
            <h3 className={`fw-medium mt-2`}>
              Dashboard
            </h3>
          </NavLink>

          <NavLink
            to="/tutor_panel"
            
            className={`d-flex p-2 rounded-3 mb-2 ${activePathsPM.some(path => path === location.pathname) ? "active" : ""}`}
            
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <BsFillPersonCheckFill />
            </span>
            <h3 className={`fw-medium mt-2 `}>
              Panel Members
            </h3>
          </NavLink>

          <NavLink
            to="/tutor_students"
            
            className={`d-flex p-2 rounded-3 mb-2 ${activeLink === "/tutor_students" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/tutor_students")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <BsPeopleFill />
            </span>
            <h3 className={`fw-medium mt-2 ${activeLink === "/tutor_students" ? "text-primary" : ""}`}>
              Students
            </h3>
          </NavLink>

          <NavLink
            to="/tutor_tickets"
            
            className={`d-flex p-2 rounded-3 mb-2 ${activeLink === "/tutor_tickets" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/tutor_tickets")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <BsPhoneFill />
            </span>
            <h3 className={`fw-medium mt-2 ${activeLink === "/tutor_tickets" ? "text-primary" : ""}`}>
              Tickets
            </h3>
          </NavLink>

          <NavLink
            to="/tutor_reports"
            
            className={`d-flex p-2 rounded-3 mb-2  ${activeLink === "/tutor_reports" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/tutor_reports")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <ImStatsDots />
            </span>
            <h3 className={`fw-medium mt-2 ${activeLink === "/tutor_reports" ? "text-primary" : ""}`}>
              Reports
            </h3>
          </NavLink>

          <NavLink
            to="/settings"
            
            className={`d-flex p-2 rounded-3 mb-2  ${activeLink === "/ExamCreator/settings" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/ExamCreator/settings")}
            style={{ textDecoration: "none" }}
          >
            <span className="icn pe-3">
              <BsFillGearFill />
            </span>
            <h3 className={`fw-medium mt-2 ${activeLink === "/ExamCreator/settings" ? "text-primary" : ""}`}>
              Settings
            </h3>
          </NavLink>

          <NavLink
            to="/Tutor/logout"
            
            className={`d-flex p-2 rounded-3 mb-2 ${activeLink === "/ExamCreator/logout" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/ExamCreator/logout")}
            style={{ textDecoration: "none", marginTop:'4rem' }}
          >
            <span className="icn pe-3">
              <LuLogOut />
            </span>
            <h3 className={`fw-medium mt-2 ${activeLink === "/ExamCreator/logout" ? "text-primary" : ""}`}>
              Log out
            </h3>
          </NavLink>
        </div>
      </div>
     
    </>
  );
};

export default Sidebar;


