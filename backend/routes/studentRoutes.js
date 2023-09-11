const express = require("express");
const {
	getStudents,
	getStudent,
	updateStudent,
} = require("../controllers/studentController");

const router = express.Router();

//GET all students
router.get("/", getStudents);

//GET a single student
router.get("/:id", getStudent);

//UPDATE a student
router.patch("/:id", updateStudent);

module.exports = router;
