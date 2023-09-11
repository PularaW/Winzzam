//create the functions needed for staff data retrieval, manipulation and deletion from the database
const users = require("../models/userModel");
const panelMembers = require("../models/panelMemberModel");
const examCreators = require("../models/examCreatorModel");
const tuitionMasters = require("../models/tutionMasterModel");

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const getBasicInfo = async (req, res) => {
	const authHeader = req.headers.token;
	const token = authHeader.split(" ")[1];
	// console.log(token);
	jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
		if (err) res.status(403).json("Invalid token");

		req.user = user;
	});

	const userID = req.user.id; //extract the parameters from the fetch request

	// console.log("user" + userID);
	const data = await users.findOne(
		{ _id: userID },
		{ _id: 1, firstName: 1, lastName: 1, username: 1, profilePicture: 1 }
	);

	if (data === null) {
		res.json({
			status: 400,
			message: "User with the given ID does not exist",
		});
	} else {
		res.json({
			status: 200,
			data: data,
		});
	}
};

const getAllUsers = async (req, res) => {
	const userRole = req.query.userRole;

	const data = await users.find({ userRole: userRole, isActive: 1 }); //get the active user count related to the user role
	if (data === null) {
		res.json({
			status: 200,
			count: 0,
		});
	} else {
		res.json({
			status: 200,
			count: data.length,
		});
	}
};

const newRegistrations = async (req, res) => {
	let pendingRegistrations = [];
	const inactiveUsers = await users.find(
		{
			isProfileComplete: 1,
			$or: [{ userRole: "Exam Creator" }, { userRole: "Panel Member" }],
		},
		{ userRole: 1, firstName: 1, lastName: 1, profilePicture: 1 }
	);

	for (let i = 0; i < inactiveUsers.length; i++) {
		let userID = inactiveUsers[i]._id;
		let userRole = inactiveUsers[i].userRole;
		if (userRole === "Exam Creator") {
			let data = await examCreators.findOne({
				user: userID,
				isApproved: 0,
			});
			if (data !== null) {
				pendingRegistrations.push(inactiveUsers[i]);
			}
		}
		if (userRole === "Panel Member") {
			let data = await panelMembers.findOne({
				user: userID,
				isApproved: 0,
			});
			if (data !== null) {
				pendingRegistrations.push(inactiveUsers[i]);
			}
		}
		if (userRole === "Tuition Master") {
			let data = await tuitionMasters.findOne({
				user: userID,
				isApproved: 0,
			});
			if (data !== null) {
				pendingRegistrations.push(inactiveUsers[i]);
			}
		}
	}
	if (pendingRegistrations.length === 0) {
		res.json({
			status: 200,
			message: "No pending registrations",
		});
	} else {
		res.json({
			status: 200,
			data: pendingRegistrations,
		});
	}

	// console.log(pendingRegistrations);
};

const getRegistrationDetails = async (req, res) => {
	try {
		const userRole = req.body.userRole;
		const uID = req.body.userID;
		console.log(userRole, uID);
		// const basicInfo = await users.findOne(
		// 	{ _id: uID },
		// 	{
		// 		firstName: 1,
		// 		lastName: 1,
		// 		email: { address: 1 },
		// 		phone: { number: 1 },
		// 		registerDate: 1,
		// 		profilePicture: 1,
		// 	}
		// );
		let uniqueInfo;
		if (userRole === "Tuition Master") {
			const tutorProfile = await tuitionMasters
				.findOne({ user: uID })
				.populate("user")
				.exec();

			if (!tutorProfile) {
				res.status(401).json("No tutor profile found");
			} else {
				res.status(200).json(tutorProfile);
			}
			// uniqueInfo = await tuitionMasters.findOne(
			// 	{ userID: uID },
			// 	{
			// 		NIC_Path: 1,
			// 		gender: 1,
			// 		educationalSkills: 1,
			// 		subject: 1,
			// 		studentCountPhysical: 1,
			// 		yearsTeaching: 1,
			// 	}
			// );
		} else if (userRole === "Panel Member") {
			const panelMemProfile = await panelMembers
				.findOne({ user: uID })
				.populate("user")
				.exec();

			if (!panelMemProfile) {
				res.status(401).json("No such panel member found");
			} else {
				res.status(200).json(panelMemProfile);
			}
		} else if (userRole === "Exam Creator") {
			const examCreatorProfile = await examCreators
				.findOne({
					user: uID,
				})
				.populate("user")
				.exec();

			if (!examCreatorProfile) {
				res.status(401).json("No such exam creator found");
			} else {
				res.status(200).json(examCreatorProfile);
			}
		}
	} catch (error) {
		res.json({
			status: 400,
			message: error.message,
		});
	}
};

module.exports = {
	getAllUsers,
	getBasicInfo,
	newRegistrations,
	getRegistrationDetails,
};
