const router = require("express").Router();
const Rating = require("../models/ratings");



router.get('/', (req, res) => {

    Rating.find({  })
        .then((Rating) => {
            console.log('Data: ', Rating);
            res.json(Rating);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/:id', (req, res) => {



    // Rating.findById(req.params.id)
    Rating.find({pid: req.params.id})
        .exec(function(err,rating){
            if(err) {
                console.log("Error rating");
            }
            else{
                res.json(rating)
            }
        })
});

router.post("/ratings", async (req, res) => {
	try {
		
	

		await new Rating({ ...req.body}).save();
		res.status(201).send({ message: "Rated successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});




module.exports = router;

