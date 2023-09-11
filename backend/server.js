require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const loginRoute = require("./routes/loginRoute");
const panelMemberRoutes = require("./routes/panelMemberRoutes");
const studentRoutes = require("./routes/studentRoutes");
const tuitionMasterRoutes = require("./routes/tuitionMasterRoutes");
const staffRoute = require("./routes/staffRoutes");
const sampleRoute = require("./routes/sampleRoutes");

const commonRoute = require("./routes/common");


const app = express();
app.use(cors());
//middleware
app.use(express.json());
//middleware
app.use((req, res, next) => {
	console.log(req.path, res.method);
	next();
});

// routes
app.use("/api/userRegistration", userRoutes);

//user login
app.use("/api/entrance", loginRoute);

app.use("/api/staff", staffRoute);
app.use("/api/panel_member", panelMemberRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/tuition_master", tuitionMasterRoutes);
//api/tuition_master/register
//sample
app.use("/api/sample", sampleRoute );
app.use("/api/common", commonRoute );

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(
				`DB is connected.Server is working on PORT`,
				process.env.PORT
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});
