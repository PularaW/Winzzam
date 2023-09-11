import "../style.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NewRegistrations = (props) => {
	const [items, setItems] = useState();
	const navigate = useNavigate();

	const location = useLocation();
	// console.log(location.pathname);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"http://localhost:8800/api/staff/newRegistrations"
			);

			const json = await response.json();
			setItems(json.data);
		}
		fetchData();
	}, []);

	// console.log(window.location.method);
	const handleSubmit = (userID) => (event) => {
		event.preventDefault();
		// console.log(userID);
		navigate("/Staff/ViewApprovals", { state: { userID } });
	};

	return (
		<div
			className={
				location.pathname === "/Staff/ViewApprovals"
					? "newArrivals"
					: "cont"
			}
		>
			{items &&
				items.map((data) => (
					<form
						className="profileForm"
						onSubmit={handleSubmit(data._id)}
					>
						<div className="profile">
							<div key={data._id}>
								<img
									className="profileIcon"
									src={data.profilePicture}
									alt=""
								></img>
								<p>{data.userRole}</p>
								<h3 className="profileName">
									{data.firstName + " " + data.lastName}
								</h3>
								<button type="submit" className="viewBtn">
									View
								</button>
							</div>
						</div>
					</form>
				))}
		</div>
	);
};

export default NewRegistrations;
