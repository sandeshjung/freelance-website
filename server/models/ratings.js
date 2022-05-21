const mongoose = require("mongoose");
const {Schema} = require("mongoose")



const ratingSchema = new mongoose.Schema({
	ratings: { type: Number, default:0 },
		jobId: {type: Schema.Types.ObjectId, ref:"job"},
		fId: {type: Schema.Types.ObjectId, ref:"user"}
});

// jobSchema.methods.generateJobToken = function () {
// 	const jobToken = jwt.sign({ _id: this._id, jobName: this.jobName, price: this.price, category:this.category, details:this.details}, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "30d",
// 	});
// 	return jobToken;
// };

module.exports = mongoose.model("rating", ratingSchema);



