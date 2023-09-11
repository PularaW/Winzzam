import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import StaffDashboard from "./pages/staff/Dashboard";
import ProfileApprovals from "./pages/staff/ProfileApprovals";
import Landing from "./pages/general/Landing";
import Home from "./pages/general/Home";
import Entrance from "./pages/general/Entrance";
import EnterEmail from "./pages/general/EnterEmail";
import NumberLogin from "./pages/general/LoginNumber";
import VerifyOTP from "./pages/general/VerifyOTP";

import ActiveMonthTutor from "./pages/tutor/ActiveMonth";
import PanelMembersTutor from "./pages/tutor/PanelMembers";
import AddPanelMembersTutor from "./pages/tutor/AddPanelMembers";
import TutorDashboard from "./pages/tutor/Dashboard";
import StudentsTutor from "./pages/tutor/Students";
import TicketsTutor from "./pages/tutor/Tickets";	
import ReportsTutor from "./pages/tutor/Reports";

import ExamCreatorDashboard from "./pages/examCreator/ec_dashboard";
import Orders from "./pages/examCreator/ec_orders";
import Notification from "./pages/examCreator/ec_notifications";
import Payments from "./pages/examCreator/ec_payments";
import Setting from "./pages/examCreator/ec_settings";
import Typing from "./pages/examCreator/ec_typing";
import LoginPage from "./pages/examCreator/ec_login";
import Ordertyping from "./pages/examCreator/ec_orderTyping";
import ProfCompletion from "./pages/tutor/ProfCompletion"

// import "./components/style.css";

// import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						path="/Staff/Dashboard"
						element={<StaffDashboard />}
					/>
					<Route
						path="/Staff/ViewApprovals"
						element={<ProfileApprovals />}
					/>
					<Route path="/" element={<Landing />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Entrance" element={<Entrance />} />
					<Route path="/EmailEntrance" element={<EnterEmail />} />
					<Route path="/PhoneEntrance" element={<NumberLogin />} />
					<Route path="/VerifyOTP" element={<VerifyOTP />} />

					{/* <Route path="/" element={<TutorDashboard />} /> */}

					<Route path="/TutorDashboard" element={<TutorDashboard />} />
					<Route path="/TutorProfCom" element={<ProfCompletion />} />

					<Route path="/tutor_active_month" element={<ActiveMonthTutor />}/>
					<Route path="/tutor_panel" element={<PanelMembersTutor />} />
					<Route path="/tutor_add_panel" element={<AddPanelMembersTutor />}/>
					<Route path="/tutor_students" element={<StudentsTutor />} />
					<Route path="/tutor_tickets" element={<TicketsTutor />} />
					<Route path="/tutor_reports" element={<ReportsTutor />} />

					<Route
						path="/ExamCreator/dashboard"
						element={<ExamCreatorDashboard />}
					/>
					<Route
						path="/ExamCreator/Orders"
						element={<Orders></Orders>}
					/>
					<Route
						path="/ExamCreator/orderTyping"
						element={<Ordertyping></Ordertyping>}
					/>
					<Route
						path="/ExamCreator/Notifications"
						element={<Notification></Notification>}
					/>
					<Route
						path="/ExamCreator/Payments"
						element={<Payments></Payments>}
					/>
					<Route
						path="/ExamCreator/Settings"
						element={<Setting></Setting>}
					/>
					<Route
						path="/ExamCreator/Typing"
						element={<Typing></Typing>}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
