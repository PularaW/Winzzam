const express = require("express");
const {
	getUsers,
	getUser,
	updateUser,
} = require("../controllers/userController");

const router = express.Router();




//GET all users

router.get("/", getUsers);

//GET a user
router.get("/:id", getUser);

//UPDATE a user
router.patch("/:id", updateUser);

module.exports = router;
