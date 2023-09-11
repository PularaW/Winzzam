const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const WorkSchema = new Schema({
	tuitionMaster: { type: Schema.Types.ObjectId, ref: "users" },
	batch: { type: Schema.Types.ObjectId, ref: "Batch" },
	month: { type: Schema.Types.ObjectId, ref: "Month" },
	exam: { type: Schema.Types.ObjectId, ref: "Exam" },
	deadline: {
		type: Date,
	},
	completedOn: {
		type: Date,
	},
});

const examCreatorSchema = new Schema({
	isApproved: {
		type: Number,
	},
	subjects: [
		{
			type: String,
		},
	],
	idCopy: {
		type: String,
	},
	contractURL: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "users", // Use the model name you provided for the subject model
	},
	work: [WorkSchema],
});

module.exports = mongoose.model("examcreators", examCreatorSchema);
