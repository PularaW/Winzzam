const express = require("express");
const {
	getTuitionMasters,
	getTuitionMaster,
	updateTuitionMaster,
	registerTutionMaster
} = require("../controllers/tuitionMasterController");
const {verifyAndAuthorization,verifyToken,verifyAndAdmin, verifyByRole} = require("../middleware/verifyToken")


const router = express.Router();

//GET all tuition masters
router.get("/", getTuitionMasters);

//GET a single tuition master
router.get("/:id", getTuitionMaster);

//UPDATE a tuition master
router.patch("/:id", updateTuitionMaster);

router.post("/register", verifyToken,  registerTutionMaster);

module.exports = router;
