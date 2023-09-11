import Navbar from "../../components/staff/Navbar";
import ClientBase from "../../components/staff/ClientBase";
import ExamProgress from "../../components/staff/ExamProgress";
import NewRegistrations from "../../components/staff/NewRegistrations";
import Revenue from "../../components/staff/Revenue";
import Updates from "../../components/staff/Updates";
import Header from "../../components/staff/header";
import "../../components/style.css";
import { useLocation } from "react-router-dom";

function Dashboard(props) {
	const location = useLocation();
	console.log(location.state.result.userID);
	// console.log(location.state.userRole);
	// console.log(location.state.isProfileComplete);
	return (
		<div>
			<div>
				<Header />
			</div>
			<div className="body">
				<div className="rowContainer">
					<div className="navBarContainer">
						<Navbar name="Dashboard" icons="faBorderAll" />
						{/* <Navbar /> */}
					</div>
					<div className="colContainer">
						<div className="cardContainer">
							<ClientBase role="Tuition Masters" />
							<ClientBase role="Students" />
							<ClientBase role="Panel Members" />
							<ClientBase role="Exam Creators" />
						</div>
						<div className="background">
							<ExamProgress />
						</div>
						<div className="background">
							<h3 className="tableTitle"> New Registrations</h3>
							<div className="rowContainer">
								<NewRegistrations />
							</div>
						</div>
						<div className="rowContWithSpace">
							<Revenue />
							<Updates />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
