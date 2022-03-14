const mongoose = require("mongoose");



const ratingSchema = new mongoose.Schema({
	ratings: { type: Number },
		jobId: {type: String, required: true},
		fId: {type:String, required: true}
});

// jobSchema.methods.generateJobToken = function () {
// 	const jobToken = jwt.sign({ _id: this._id, jobName: this.jobName, price: this.price, category:this.category, details:this.details}, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "30d",
// 	});
// 	return jobToken;
// };

module.exports = mongoose.model("rating", ratingSchema);



