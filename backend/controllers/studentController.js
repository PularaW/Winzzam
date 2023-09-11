const { get } = require("mongoose");
const Student = require("../models/studentModel");
const mongoose = require("mongoose");

//get all students
const getStudents = async (req, res) => {
	const students = await Student.find({}).sort({ createdAt: -1 });

	res.status(200).json({ students });
};

//get a single student
const getStudent = async (req, res) => {
	const { id } = req.params;
	//check the type of id to stop crashing the app
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Student not found" });
	}
	const student = await Student.findById(id);

	if (!student) {
		return res.status(404).json({ error: "Student not found" });
	}

	res.status(200).json({ student });
};

//update a student
const updateStudent = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "Student not found" });
	}

	const student = await Student.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!student) {
		return res.status(404).json({ error: "Student not found" });
	}

	res.status(200).json(student);
};

module.exports = {
	getStudents,
	getStudent,
	updateStudent,
};
