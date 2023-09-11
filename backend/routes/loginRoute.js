const express = require("express");
const {
	generateOTP,
	verifyOTP,
	resendOTP,
	checkUserStatus,
} = require("../controllers/loginController");

const { createUser } = require("../controllers/userController");

const router = express.Router();
//user creating route
router.post("/createUser", createUser);

//User Entrance and verification
router.get("/userStatus", checkUserStatus);
router.post("/phoneNumber", generateOTP);
router.post("/emailAddress", generateOTP);


router.post("/phoneNumber/verifyOTP", verifyOTP);
router.post("/emailAddress/verifyOTP", verifyOTP);

router.post("/phoneNumber/resendOTP", resendOTP);
router.post("/emailAddress/resendOTP", resendOTP);

module.exports = router;
