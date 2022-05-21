const mongoose = require("mongoose");
const {Schema} = require("mongoose")



const requestSchema = new mongoose.Schema({
		
		jobId: {type: String, ref: "job"},
		fId: {type: Schema.Types.ObjectId, ref:"user"},
		accepted: {type:Boolean, default: false},
		
});

// jobSchema.methods.generateJobToken = function () {
// 	const jobToken = jwt.sign({ _id: this._id, jobName: this.jobName, price: this.price, category:this.category, details:this.details}, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "30d",
// 	});
// 	return jobToken;
// };

const request=mongoose.model("request", requestSchema);
module.exports = request;



