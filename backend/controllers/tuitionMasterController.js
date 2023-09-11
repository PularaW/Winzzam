const { get } = require("mongoose");
const TuitionMaster = require("../models/tutionMasterModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//get all tuition masters
const getTuitionMasters = async (req, res) => {
	const tuitionMasters = await TuitionMaster.find({}).sort({ createdAt: -1 });
	res.status(200).json({ tuitionMasters });
};

//get a single tuition master
const getTuitionMaster = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}
	const tuitionMaster = await TuitionMaster.findById(id);

	if (!tuitionMaster) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}

	res.status(200).json({ tuitionMaster });
};

//update a tuition master
const updateTuitionMaster = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}

	const tuitionMaster = await TuitionMaster.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!tuitionMaster) {
		return res.status(404).json({ error: "Tuition Master not found" });
	}

	res.status(200).json(tuitionMaster);
};

const registerTutionMaster = async (req, res) => {
		console.log(req.user.id);

		try {
			// Save the User document
			const {firstName, lastName, phone, profilePicture, NIC_Path, gender, degree, subject, years_of_experience, description} = req.body;
			const updatedUser = await User.findOneAndUpdate(
				{ _id: req.user.id }, // Replace userId with the actual user's _id
				{
					firstName: firstName,
					lastName: lastName,
					phone: phone,
					profilePicture: profilePicture
				},
				{ new: true } // Return the updated user document
			);
			// Use the savedUser._id to create the TutionMaster document
			const newTuitionMaster = new TuitionMaster({
				user: updatedUser._id,
				NIC_Path: NIC_Path,
				gender: gender,
				degree: degree,
				subject: subject,
				years_of_experience: years_of_experience,
				description: description
			});
			const savedTuitionMaster = await newTuitionMaster.save();
			res.status(200).json({ savedTuitionMaster });
			// Return the savedTuitionMaster or any other response you need
		} catch (error) {
			// Handle any errors here
			console.error('Error saving documents:', error);
			throw error;
		}
	}

	




module.exports = {
	getTuitionMasters,
	getTuitionMaster,
	updateTuitionMaster,
	registerTutionMaster
};
