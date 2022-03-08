const router = require("express").Router();
const { User } = require("../models/user");


router.post("/becomehirer", async (req, res) => {
  try {
    // Find user from database
    const user = await User.findById(req.user._id).exec();
    if(!user.role.includes("Hirer")){
      user.role = "Hirer";
    } else {

       console.log('could not change or kunai error message');
   }
    user.findOneAndUpdate(req.user.role, {enum: "Hirer"}).save(); 
    return res.json({user});
  } catch (err) {
    console.log("Error upgrading to instructor", err);
  }
})

module.exports = router;