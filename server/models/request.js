const mongoose = require("mongoose");



const requestSchema = new mongoose.Schema({
		jobId: {type: String, required: true},
		fId: {type:String, required: true}
});

// jobSchema.methods.generateJobToken = function () {
// 	const jobToken = jwt.sign({ _id: this._id, jobName: this.jobName, price: this.price, category:this.category, details:this.details}, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "30d",
// 	});
// 	return jobToken;
// };

module.exports = mongoose.model("request", requestSchema);



