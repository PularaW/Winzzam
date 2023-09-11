import "../style.css";
import { useEffect, useState } from "react";

const ClientBase = (props) => {
	const [items, setItems] = useState();
	const userRole = String(props.role);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"http://localhost:8800/api/staff/clientInfo?userRole=" +
					userRole.substring(0, userRole.length - 1) // remove the last character from the string
			);

			const json = await response.json();
			setItems(json);
		}
		fetchData();
	}, []);
	return (
		<div className="activeUserCard">
			<div>
				<h2>{items && "0" + items.count}</h2>
				<h4>{props.role}</h4>
			</div>
		</div>
	);
};

export default ClientBase;
