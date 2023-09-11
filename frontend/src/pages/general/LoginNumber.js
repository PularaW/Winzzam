import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../components/style.css";

function NumberLogin() {
	const [number, setNumber] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(email);
		const data = { number: number };

		const response = await fetch(
			"http://localhost:8800/api/entrance/phoneNumber",
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
				console.log(data);
				setEmptyFields([]);
				setError(null);
				setNumber("");
				navigate("/VerifyOTP", { state: { data } });
			}
		}
	};

	return (
		<div>
			<div className="login">
				<div className="colContainer">
					<h3>
						Enter Your Phone Number in the Provided Space Given
						Below.
					</h3>
					<form onSubmit={handleSubmit}>
						<input
							type="string"
							placeholder="Phone Number"
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							className={
								emptyFields.includes("number") ? "errMsg" : ""
							}
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

export default NumberLogin;
