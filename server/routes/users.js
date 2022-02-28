import express from 'express'
import User from "../models/user.js";


const router= express.Router();

router.post("/register", (req, res) => {
	const { firstName,lastName, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "Email already registerd"})
        } else {
            const user = new User({
                firstName,
				lastName,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

export default router;