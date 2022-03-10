const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const jobSchema = new mongoose.Schema({
	jobName: { type: String, required: true },
		price: {type: Number, required: true},
		category: {type:String, required: true}
});

jobSchema.methods.generateJobToken = function () {
	const jobToken = jwt.sign({ _id: this._id, jobName: this.jobName, price: this.price, category:this.category}, process.env.JWTPRIVATEKEY, {
		expiresIn: "30d",
	});
	return jobToken;
};

const Job = mongoose.model("job", jobSchema);

module.exports=(Job);

