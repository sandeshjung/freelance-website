const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
  role: {
          type: [String],
          enum: ["Freelancer", "Hirer", "Admin"],
          default: ["Freelancer"],
        }
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id, firstName: this.firstName, email: this.email}, process.env.JWTPRIVATEKEY, {
		expiresIn: "30d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
    role: Joi.string().label("Role"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };

// import mongoose from "mongoose";
// import Jwt from 'jsonwebtoken'



// const {Schema} = mongoose;

// const userSchema = new Schema(
//     {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//       email: { type: String, required: true, unique:true },
//       password: { type: String, required: true },
//         role: {
//           type: [String],
//           enum: ["Freelancer", "Hirer", "Admin"],
//           default: ["Freelancer"],
//         }
        
//     }
//     );
    
//     userSchema.methods.generateAuthToken = function (){
//       const token = Jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
//       return token
//     };


//     export default mongoose.model('User', userSchema);



    
//     // const validate = (data) => {
//     //   const schema = Joi.object({
//     //     firstName: Joi.string().required().label("First Name"),
//     //     lastName: Joi.string().required().label("Last Name"),
//     //     email: Joi.string().email().required().label("Email"),
//     //     password: passwordComplexity().required().label("Password"),
//     //     role: Joi.string().label("Role"),
//     //   });
//     //   return schema.validate(data);
//     // };

//     // export validate;
      
//     // module.exports={User, validate}
//     // export default mongoose.model("User", userSchema);
    

   


  