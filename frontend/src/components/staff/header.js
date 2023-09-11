import "../style.css";
import logo from "../winzzam.png";
import Cookies from "js-cookie";
const { useState, useEffect } = require("react");

const Header = (props) => {
	const token = Cookies.get("token");
	const [items, setItems] = useState();
	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: "Bearer " + token,
			},
		};
		async function fetchData() {
			const response = await fetch(
				"http://localhost:8800/api/staff/basics",
				options
			);

			const json = await response.json();
			setItems(json.data);
		}
		fetchData();
	}, []);

	return (
		<div className="style-Header">
			<div className="cont">
				<img className="logo" src={logo} alt="logo" />
			</div>
			<div className="headerName">
				<h2>Hello, {items && items.firstName}</h2>
			</div>
			<div className="profileContainer">
				<button type="button" className="">
					<img
						className="profileIcon"
						src={items && items.profilePicture}
					/>
				</button>
				<div className="staffRole">
					<h5>{items && items.username}</h5>
				</div>
			</div>
		</div>
	);
};

export default Header;
