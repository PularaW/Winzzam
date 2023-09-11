import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "../../components/style.css";
import emailFill from "./emailFill.jpg";

function EnterEmail() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const navigate = useNavigate();
	const { state } = useLocation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(email);
		const data = { email: email };

		const response = await fetch(
			"http://localhost:8800/api/entrance/emailAddress",
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
				let data = json.data;
				Object.assign(data, { userRole: state });
				console.log(data);
				setEmptyFields([]);
				setError(null);
				setEmail("");
				navigate("/VerifyOTP", { state: { data } });
			}
		}
	};
	return (
		<div className="entranceDiv">
			<img className="entranceLogo" src={emailFill}></img>
			<div className="login">
				<h3>
					<center>
						Enter Your Email Address in the Provided Space Give
						Below.
					</center>
				</h3>
				<div className="colContainer">
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={"styleInput"}
						/>
						<button type="submit" className="loginButton">
							Send OTP
						</button>
						{error && <div className="errMsg">{error}</div>}
					</form>
				</div>
			</div>
		</div>
	);
}

export default EnterEmail;
