const router = require("express").Router();
const { User } = require("../models/user");


router.post("/freelancer", async (req, res) => {



//  User.updateOne("62278467cb01c0234e1ed58f",{role: "Hirer"})

  try {
    // Find user from database
		
		const user = await User.findById(req.body._id); 
   console.log(user._id)
    // await user.findOneAndUpdate(user._id, {role: "Hirer"}).save(); 
    // User.findByIdAndUpdate(user._id, { role:'Hirer' }).save();

    User.findByIdAndUpdate(
      { _id: user._id },
      { category: req.body.category },
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
    // user.findOneAndUpdate(user.role,  {role: "Hirer"}).save(); 


    

    // if(!user.role.includes("Hirer")){
     
      
      
  //   } else {

  //      console.log('could not change');
  //  }
    // user.findOneAndUpdate(req.user.role, {role: "Hirer"}).save(); 
    // return res.json({user});
  } catch (err) {
    console.log("Error adding category", err);
  }
})





module.exports = router;