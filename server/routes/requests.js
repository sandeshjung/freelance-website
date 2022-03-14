const router = require("express").Router();
const Request = require("../models/request");



router.get('/', (req, res) => {

    Request.find({  })
        .then((Request) => {
            console.log('Data: ', Request);
            res.json(Request);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/:id', (req, res) => {



    // Request.findById(req.params.id)
    Request.find({pid: req.params.id})
        .exec(function(err,request){
            if(err) {
                console.log("Error rating");
            }
            else{
                res.json(request)
            }
        })
});

router.post("/requests", async (req, res) => {
	try {
		
	

		await new Request({ ...req.body}).save();
		res.status(201).send({ message: "Requested successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});




module.exports = router;

