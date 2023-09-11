import Header from "../../components/staff/header";
import { useNavigate, useLocation } from "react-router-dom";
import "../../components/style.css";
import NewRegistrations from "../../components/staff/NewRegistrations";

function ProfileApprovals() {
	const navigate = useNavigate();
	const { state } = useLocation();

	const userID = state.userID;
	console.log(userID);
	return (
		<div>
			<div>
				<Header />
			</div>
			<div className="rowContainer">
				<div className="sidePanel">
					<h2>
						<center>New Registrations</center>
					</h2>
					<NewRegistrations />
					{/* <div className="cont">
						<h1>Profile</h1>
					</div> */}
				</div>
				<div className="colContainer">
					<div className="staffDetails">
						<h2></h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileApprovals;
