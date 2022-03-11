const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const jobSchema = new mongoose.Schema({
	jobName: { type: String, required: true },
		price: {type: Number, required: true},
		category: {type:String, required: true},
        details: {type:String, required: true},
        pid: {type:String, required: true}
});

// jobSchema.methods.generateJobToken = function () {
// 	const jobToken = jwt.sign({ _id: this._id, jobName: this.jobName, price: this.price, category:this.category, details:this.details}, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "30d",
// 	});
// 	return jobToken;
// };

module.exports = mongoose.model("job", jobSchema);



