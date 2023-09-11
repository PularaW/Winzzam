import "../style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const ExamProgress = () => {
	return (
		<div>
			<div className="tableTitle">
				<h2>Exams</h2>
				{/* <h5>Month</h5>
				<h5>Status</h5> */}
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th>Tuition Master</th>
							<th>Month</th>
							<th>Exam</th>
							<th>Progress</th>
							<th>Due Date</th>
							<th>View</th>
						</tr>
					</thead>
					<tr>
						<td>Akila Premadasa</td>
						<td>January</td>
						<td>MCQ - 1</td>
						<td>4/5</td>
						<td>2023/04/26</td>
						<td>
							<button className="viewBtn">View</button>
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default ExamProgress;
