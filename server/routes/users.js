const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");


router.get('/', (req, res) => {

    User.find({  })
        .then((User) => {
            console.log('Data: ', User);
            res.json(User);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.get('/:id', (req, res) => {



    User.findById(req.params.id)
    // User.find({pid: req.params.id})
        .exec(function(err,user){
            if(err) {
                console.log("Error finding user");
            }
            else{
                res.json(user)
            }
        })
});

router.post("/register", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.json({
			user: req.profile
		})
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});





module.exports = router;

