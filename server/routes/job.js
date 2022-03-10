const router = require("express").Router();
const Job = require("../models/Jobs");


router.post("/postJob", async (req, res) => {
	try {
		
	

		await new Job({ ...req.body}).save();
		res.status(201).send({ message: "Job created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});




module.exports = router;

