import { useNavigate } from "react-router-dom";
import tuitionMaster from "./tutor.jpg";
import typist from "./typist.jpeg";
import panel from "./panel.jpg";
import staff from "./staff.jpg";
import "../../components/style.css";

function Landing() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="title">
				<h2>Welcome All to WINZZAM</h2>
			</div>

			<div className="rowContainer">
				<div className="landingTile">
					<h3>
						<center>Continue As A Tuition Master</center>
					</h3>
					<img className="tileImage" src={tuitionMaster}></img>
					<button
						onClick={() => {
							let userRole = "Tuition Master";
							navigate("/Home", { state: userRole });
						}}
						type="button"
						className="loginButton"
					>
						GO IN
					</button>
					{/* </div> */}
				</div>
				<div className="landingTile">
					<h3>
						<center>Continue As A Exam Creator</center>
					</h3>
					<img className="tileImage" src={typist}></img>
					<button
						onClick={() => {
							let userRole = "Exam Creator";
							navigate("/Home", { state: userRole });
						}}
						type="button"
						className="loginButton"
					>
						GO IN
					</button>
				</div>
				<div className="landingTile">
					<h3>
						<center>Continue As A Panel Member</center>
					</h3>
					<img className="tileImage" src={panel}></img>
					<button
						onClick={() => {
							let userRole = "Panel Member";
							navigate("/Home", { state: userRole });
						}}
						type="button"
						className="loginButton"
					>
						GO IN
					</button>
				</div>
				<div className="landingTile">
					<h3>
						<center>Continue As A Staff Member</center>
					</h3>
					<img className="tileImage" src={staff}></img>
					<button
						onClick={() => {
							let userRole = "Staff";
							navigate("/Home", { state: userRole });
						}}
						type="button"
						className="loginButton"
					>
						GO IN
					</button>
				</div>
			</div>
		</div>
	);
}

export default Landing;
