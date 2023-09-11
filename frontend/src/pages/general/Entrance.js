import { useNavigate, useLocation } from "react-router-dom";
import entranceLogo from "./examPreparation.png";
import "../../components/style.css";

function Entrance() {
	const navigate = useNavigate();
	const { state } = useLocation();

	console.log(state);
	return (
		<div className="entranceDiv">
			<img className="entranceLogo" src={entranceLogo}></img>
			<div className="login">
				<h2>
					<center>WINZZAM</center>
				</h2>
				<h3>
					<center>Online Paper Class Hosting Platform</center>
				</h3>
				<div className="colContainer">
					<button
						onClick={() => {
							navigate("/EmailEntrance", { state: state });
						}}
						type="button"
						className="loginButton"
					>
						Continue with Email
					</button>
					{/* <button
						onClick={() => {
							navigate("/PhoneEntrance", { state: state });
						}}
						type="button"
						className="loginButton"
					>
						Continue with Mobile
					</button> */}
				</div>
			</div>
		</div>
	);
}

export default Entrance;
