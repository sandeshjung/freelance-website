import mongoose from "mongoose";
// import { Jwt } from "jsonwebtoken";
// const Joi = require('joi');
// const passwordComplexity = require("joi-password-complexity")

const {Schema} = mongoose;

const userSchema = new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique:true },
      password: { type: String, required: true },
      password2: {type: String, required: true}
        // role: {
        //   type: [String],
        //   enum: ["Freelancer", "Hirer", "Admin"],
        //   default: ["Freelancer"],
        // }
        
    }
    );
    
    // userSchema.methods.generateAuthToken = function (){
    //   const token = Jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    //   return token
    // };


    
    // const validate= (data) => {
    //   const schema = Joi.object({
    //     firstName: Joi.string().required().label("First Name"),
    //     lastName: Joi.string().required().label("Last Name"),
    //     email: Joi.string().required().label("Email"),
    //     password: passwordComplexity().required().label("Passwrd"),
    //     // role: Joi.array().items(Joi.string().valid('not allowed').forbidden(), Joi.string())
    //   })
    // }
    //   return schema.validate(data)
      
    // module.exports={User, validate}
    // export default mongoose.model("User", userSchema);
    

    export default mongoose.model('User', userSchema);


    