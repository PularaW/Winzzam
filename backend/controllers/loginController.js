require("dotenv").config();

const users = require("../models/userModel");

const pendingUsers = require("../models/pendingUserModel");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
	apiKey: process.env.vonage_api_key,
	apiSecret: process.env.vonage_api_secret,
});

async function sendSMS(number, otp, res, uID) {
	let from = "Winzzam Group";
	let to = "94" + number.substring(1);
	let text =
		"You are trying to login into the winzzam system. System generated OTP is " +
		otp;

	await vonage.sms
		.send({ to, from, text })
		.then((resp) => {
			res.json({
				status: 200,
				message: "OTP is sent to the user",
				data: {
					userID: uID,
					number: number,
					mode: "phone",
				},
			});
			console.log(resp);
		})
		.catch((err) => {
			console.log("There was an error sending the messages.");
			console.error(err);
		});
}

//creating the transporter
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.USER,
		pass: process.env.PASS,
	},
});

async function generateMail(otp, email, res) {
	//send OTP to the user
	let mailOptions = {
		from: "winzzam.group@gmail.com",
		to: email,
		subject: "OTP for login",
		html: `<p>You are trying to enter into the winzzam system. System generated OTP is <b>${otp}</b> </p>`,
	};

	transporter.sendMail(mailOptions, (error, data) => {
		// console.log(process.env.USER, process.env.USER);
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent successfully");
			return res.json({
				status: 200,
				message: "OTP is sent to the user",
				data: {
					email: email,
					mode: "email",
				},
			});
		}
	});
}

function saveOTP(email, otp, mode) {
	let saltRounds = 10;
	if (mode === "phone") {
		bcrypt.hash(String(otp), saltRounds).then((hashedOTP) => {
			users
				.findOneAndUpdate(
					{ _id: userID },
					{ $set: { "phone.otp": hashedOTP } }
				)
				.then((result) => {
					console.log("OTP is saved in the database");
				});
		});
	} else if (mode === "email") {
		bcrypt.hash(String(otp), saltRounds).then((hashedOTP) => {
			const newUser = new pendingUsers({
				email: email,
				otp: hashedOTP,
			});

			newUser.save().then((result) => {
				console.log("OTP is saved in the database");
			});
		});
	}
}

const generateOTP = async (req, res) => {
	// console.log(req.path);
	if (req.path === "/phoneNumber") {
		let number = req.body.number;
		// console.log(typeof number);
		if (number === "") {
			return res.json({
				message: "Phone Number is required",
				status: 400,
			});
		}
		if (!/[0-9]{10,11}/.test(number)) {
			return res.json({
				message: "Phone Number is not valid",
				status: 400,
			});
		}
		//checking if such users exists
		users
			.findOne(
				{ "phone.number": number, "phone.isConfirmed": 1 },
				{ _id: 1 }
			)
			.then((result) => {
				if (result === null) {
					return res.json({
						message:
							"User with the given phone number does not exist",
						status: 400,
					});
				} else {
					let userID = result._id;
					//generate OTP
					let otp = Math.floor(1000 + Math.random() * 9000);

					sendSMS(number, otp, res, userID);

					// save the OTP in the database
					saveOTP(userID, otp, "phone");
				}
			});
	} else if (req.path === "/emailAddress") {
		console.log(req.body);
		let email = req.body.email;

		if (email === "") {
			return res.json({
				message: "Email Address is required",
				status: 400,
			});
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return res.json({
				message: "Email Address is not valid",
				status: 400,
			});
		}

		//checking if such user exists
		let otp = Math.floor(1000 + Math.random() * 9000);
		generateMail(otp, email, res);
		saveOTP(email, otp, "email");
	}
};

const verifyOTP = async (req, res) => {
	let email = req.body.email;
	let otp = req.body.otp;
	let saltRounds = 10;

	if (req.path === "/emailAddress/verifyOTP") {
		let result = await pendingUsers.findOne({ email: email });

		console.log(result);

		if (result === null) {
			res.json({
				status: 200,
				message: "User with the given email does not exist",
			});
		} else {
			// console.log(result);
			bcrypt.compare(otp, result.otp).then((otpValid) => {
				if (otpValid) {
					//Here the create user function goes.
					createUser(req, res);
					deletePendingMail(email);
					// need to to delete the document containing the peding database.
				} else {
					res.json({
						status: 400,
						message: "Entered OTP is not correct",
					});
				}
			});
		}
	} else if (req.path === "/phoneNumber/verifyOTP") {
		let result = await users.findOne(
			{ _id: userID },
			{ _id: 1, "phone.otp": 1, userRole: 1 }
		);
		if (result === null) {
			res.json({
				status: 200,
				message: "User with the given ID does not exist",
			});
		} else {
			bcrypt.compare(otp, result.phone.otp).then((otpValid) => {
				if (otpValid) {
					res.json({
						status: 200,
						message: "OTP is verified",
						user: userID,
						userRole: result.userRole,
					});
				} else {
					res.json({
						status: 400,
						message: "Entered OTP is not correct",
					});
				}
			});
		}
	}
};
const resendOTP = async (req, res) => {
	if (req.path === "/phoneNumber/resendOTP") {
		let otp = Math.floor(1000 + Math.random() * 9000);
		let number = req.body.number;
		let userID = req.body.userID;

		sendSMS(number, otp, res, userID);
		// save the OTP in the database
		saveOTP(userID, otp, "phone");
	} else if (req.path === "/emailAddress/resendOTP") {
		let email = req.body.email;
		let userID = req.body.userID;
		let otp = Math.floor(1000 + Math.random() * 9000);

		generateMail(otp, email, res, userID);
		// save the OTP in the database
		saveOTP(userID, otp, "email");
	}
};

const deletePendingMail = async (email) => {
	try {
		await pendingUsers.findOneAndDelete({ email: email });
		console.log("BookMark Succesfully deleted");
	} catch (error) {
		console.log(error);
	}
};

const createUser = async (req, res) => {
	let userToken;
	console.log(req.body.email);
	try {
		const user = await users.findOne({ email: req.body.email });
		console.log(req.body.email, user);
		if (!user) {
			//new User
			const newUser = new users({
				email: req.body.email,
				userRole: req.body.role,
			});
			try {
				const savedUser = await newUser.save();
				userToken = jwt.sign(
					{
						id: savedUser._id,
						userRole: savedUser.userRole,
					},
					process.env.JWT_SEC,
					{ expiresIn: "21d" }
				);

				res.status(201).json({
					savedUser: savedUser,
					userToken: userToken,
				});
			} catch (error) {
				res.status(500).json(error.message);
			}
		} else {
			userToken = jwt.sign(
				{
					id: user._id,
					userRole: user.userRole,
				},
				process.env.JWT_SEC,
				{ expiresIn: "21d" }
			);

			res.status(201).json({
				savedUser: user,
				userToken: userToken,
			});
		}
	} catch (error) {
		res.status(500).json(error.message);
	}
};

const checkUserStatus = async (req, res) => {
	try {
		const authHeader = req.headers.token;
		const token = authHeader.split(" ")[1];
		// console.log(token);
		// const expirationTime = token.payload.exp;  Check the expiry date of the token

		// if (Date.now() >= expirationTime * 1000) {
		// 	res.status(401).json("Token is Expired");
		// }
		jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
			if (err) res.status(403).json("Invalid token");

			req.user = user;
		});
		console.log(req.user);
		const userID = req.user.id;
		const user = await users.findOne(
			{ _id: userID },
			{ isProfileComplete: 1, userRole: 1 }
		);
		// console.log(user);
		res.status(201).json({
			isProfileComplete: user.isProfileComplete,
			userRole: user.userRole,
			userID: user._id,
		});
	} catch (error) {
		res.status(401).json(error.message);
	}
};

module.exports = { generateOTP, verifyOTP, resendOTP, checkUserStatus };
