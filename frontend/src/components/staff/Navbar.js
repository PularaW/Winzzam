//create the components needed for the frontend
//create the components needed for each actor in different files and let's create a common file to include the components that are used by all actors

import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
	// const [clicked, setClicked] = useState(false);
	const defaultActiveButton = props.name; //get the default active button from the props
	// console.log(typeof defaultActiveButton);
	const [activeButton, setActiveButton] = useState(defaultActiveButton); // Set initial active button

	const handleButtonClick = (buttonName) => {
		setActiveButton(buttonName);
	};

	return (
		<div className="">
			<div className="title">
				<button
					type="button"
					className={`navButton ${
						activeButton === "Dashboard" ? "clickedButton" : ""
					}`}
					onClick={() => handleButtonClick("Dashboard")}
				>
					<FontAwesomeIcon className="navIcon" icon={faBorderAll} />
					Dashboard
				</button>
			</div>
			<div className="title">
				<button
					type="button"
					className={`navButton ${
						activeButton === "Profiles" ? "clickedButton" : ""
					}`}
					onClick={() => handleButtonClick("Profiles")}
				>
					<FontAwesomeIcon className="navIcon" icon={faIdCardClip} />
					Profile Approvals
				</button>
			</div>
			<div className="title">
				<button
					type="button"
					className={`navButton ${
						activeButton === "Payment" ? "clickedButton" : ""
					}`}
					onClick={() => handleButtonClick("Payment")}
				>
					<FontAwesomeIcon
						className="navIcon"
						icon={faCashRegister}
					/>
					Handle Payments
				</button>
			</div>
			<div className="title">
				<button
					type="button"
					className={`navButton ${
						activeButton === "Exam" ? "clickedButton" : ""
					}`}
					onClick={() => handleButtonClick("Exam")}
				>
					<FontAwesomeIcon className="navIcon" icon={faFilePen} />
					Exam Progress
				</button>
			</div>
			<div className="title">
				<button
					type="button"
					className={`logoutButton ${
						activeButton === "Logout" ? "clickedButton" : ""
					}`}
					onClick={() => handleButtonClick("Logout")}
				>
					<FontAwesomeIcon
						className="navIcon"
						icon={faRightFromBracket}
					/>
					Log Out
				</button>
			</div>

			{/* </div> */}
			{/* <div className="title">Payments</div>
				<div className="title">Profile Approvals</div>
				<div className="title">Exam Progress</div> */}
			{/* <Link to="/">
					<h1>Workout Buddy</h1>
					<h1>Go Back</h1>
				</Link> */}
		</div>
	);
};

export default Navbar;
