import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Home() {
	const navigate = useNavigate();
	const { state } = useLocation(); //state is about the userRole
	const [isCompleted, setIsCompleted] = useState(null);
	const [userRole, setUserRole] = useState(null);
	const [userID, setUserID] = useState(null);

	const token = Cookies.get("token");
	console.log(state);
	useEffect(() => {
		if (token === null) {
			console.log("token is null");
			navigate("/Entrance", { state: state });
		}
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: "Bearer " + token,
			},
		};
		async function fetchData() {
			const response = await fetch(
				"http://localhost:8800/api/entrance/userStatus",
				options
			);

			const json = await response.json();
			console.log(json);
			setUserRole(json.userRole);
			setIsCompleted(json.isProfileComplete);
			setUserID(json.userID);

			const result = {
				userID: json.userID,
				userRole: json.userRole,
				profileComplete: json.isProfileComplete,
			};

			if (json.status === 401 || json.userRole !== state) {
				navigate("/Entrance");
			} else {
				if (json.isProfileComplete === 0) {
					navigate("/" + json.userRole + "/ProfileCompletion", {
						state: { result },
					});
				} else if (json.isProfileComplete === 1) {
					navigate("/" + json.userRole + "/PendingApproval", {
						state: { result },
					});
				} else if (json.isProfileComplete === 2) {
					navigate("/" + json.userRole + "/Dashboard", {
						state: { result },
					});
				}
			}
		}
		fetchData();
	}, []);

	// console.log(state);
	return (
		<div className="">
			<h1>Home</h1>
		</div>
	);
}

export default Home;
