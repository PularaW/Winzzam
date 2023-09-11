const { get } = require("mongoose");
const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');



//Create a user

const createUser = async (req, res) => {
	let userToken;
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			//new User
			const newUser = new User({
				email: req.body.email,
				userRole: req.body.role
			});
			try {
				const savedUser = await newUser.save();
				userToken = jwt.sign({
					id: savedUser._id,
					userRole: savedUser.userRole,
				}, process.env.JWT_SEC, { expiresIn: "21d" });

				res.status(201).json({ savedUser, userToken });

			} catch (error) {
				res.status(500).json(error.message);
			}
		} else {
			userToken = jwt.sign({
				id: user._id,
				userRole: user.userRole,
			}, process.env.JWT_SEC, { expiresIn: "21d" });

			res.status(201).json({ user, userToken });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};






//get all users
const getUsers = async (req, res) => {
	const users = await User.find({}).sort({ createdAt: -1 });
	res.status(200).json({ users });
};

//get a single user
const getUser = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "User not found" });
	}
	const user = await User.findById(id);

	if (!user) {
		return res.status(404).json({ error: "User not found" });
	}

	res.status(200).json({ user });
};

//update a user
const updateUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "User not found" });
	}

	const user = await User.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!user) {
		return res.status(404).json({ error: "User not found" });
	}

	res.status(200).json(user);
};



module.exports = {
	getUsers,
	getUser,
	updateUser,
	createUser
};
