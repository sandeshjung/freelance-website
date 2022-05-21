const router = require("express").Router();
const Job = require("../models/Jobs");






router.get('/', (req, res) => {

    Job.find({  })
        .then((Job) => {
            console.log('Data: ', Job);
            res.json(Job);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/:id', (req, res) => {



    // Job.findById(req.params.id)
    Job.find({pid: req.params.id})
        .exec(function(err,job){
            if(err) {
                console.log("Error finding job");
            }
            else{
                res.json(job)
            }
        })
});

router.post("/postJob", async (req, res) => {
	try {
		
	

		await new Job({ ...req.body}).save();
		res.status(201).send({ message: "Job created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});




module.exports = router;

