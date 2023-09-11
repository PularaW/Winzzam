import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useState } from "react";
import enteringOTP from "./enteringOTP.jpeg";
import "../../components/style.css";

function VerifyOTP() {
	const [otp, setOTP] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);
	const [success, setSuccess] = useState(null);

	const navigate = useNavigate();
	const { state } = useLocation();
	// const { userID, email } = state;
	// console.log(state.data.userID);
	const resendOTP = async () => {
		const data = { email: state.data.email };
		const response = await fetch(
			"http://localhost:8800/api/entrance/emailAddress/resendOTP",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
		}
		if (response.ok) {
			if (json.status === 400) {
				setError(json.message);
			} else if (json.status === 200) {
				setSuccess(json.message);
				setEmptyFields([]);
				setError(null);
				setOTP("");
			}
		}
	};

	const handleNavigation = (userRole, profCompleted) => {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(email);
		const data = {
			email: state.data.email,
			otp: otp,
			role: state.data.userRole,
		};
		let response, json;
		if (state.data.mode === "email") {
			response = await fetch(
				"http://localhost:8800/api/entrance/emailAddress/verifyOTP",
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			json = await response.json();
		} else if (state.data.mode === "phone") {
			response = await fetch(
				"http://localhost:8800/api/entrance/phoneNumber/verifyOTP",
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			json = await response.json();
		}

		if (!response.ok) {
			setError(json.error);
		}
		if (response.ok) {
			console.log(json);
			if (response.status === 500) {
				setError(json);
			} else if (response.status === 201) {
				const profileCompleted = json.savedUser.isProfileComplete;
				const userRole = json.savedUser.userRole;
				let tokn = json.userToken;
				setEmptyFields([]);
				setError(null);
				setOTP("");
				// Set the cookie
				Cookies.set("token", tokn);
				if (userRole === "Staff") {
					navigate("/Staff/Dashboard");
				} else if (userRole === "Tuition Master") {
					if (profileCompleted === 0) {
					} else if (profileCompleted === 1) {
					} else if (profileCompleted === 2) {
					}
				} else if (userRole === "Exam Creator") {
				} else if (userRole === "Panel Member") {
				}
			}
		}
	};
	return (
		<div className="entranceDiv">
			<img className="entranceLogo" src={enteringOTP}></img>
			<div className="login">
				<h3>
					<center>Enter The OTP That You Have Received</center>
				</h3>
				<div className="colContainer">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="OTP Code"
							value={otp}
							onChange={(e) => {
								setOTP(e.target.value);
								setError(null);
								setSuccess(null);
							}}
							className={
								emptyFields.includes("otp") ? "errMsg" : ""
							}
						/>
						<button
							type="button"
							className="loginButton"
							onClick={resendOTP}
						>
							Resend OTP
						</button>
						<button type="submit" className="loginButton">
							Submit OTP
						</button>
						{error && <div className="errMsg">{error}</div>}
					</form>
				</div>
			</div>
		</div>
	);
}

export default VerifyOTP;
