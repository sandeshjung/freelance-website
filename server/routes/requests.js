const router = require("express").Router();
const Request = require("../models/request");



router.get('/', (req, res) => {
    Request.find().populate('fId').
    exec(function (err, data) {
        console.log('Data: ', data);
            res.json(data);
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

