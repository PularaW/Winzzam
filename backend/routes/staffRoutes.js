//handle routes realted to the actor staff
const express = require("express");
const {
	getAllUsers,
	getBasicInfo,
	newRegistrations,
	getRegistrationDetails,
} = require("../controllers/staffController");
const {
	verifyAndAuthorization,
	verifyToken,
	verifyAndAdmin,
	verifyByRole,
} = require("../middleware/verifyToken");

const router = express.Router();

router.get("/clientInfo", getAllUsers);
router.get("/basics", getBasicInfo);
router.get("/newRegistrations", newRegistrations);
router.get("/registrationInfo", getRegistrationDetails);

module.exports = router;
