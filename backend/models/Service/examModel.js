const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
    number: Number,
    type: Number,
    status: Number,
    scheduledDates: [
        {type: Schema.Types.ObjectId, ref: 'sheduled_dates' },
    ],
    duration: String,
	resources: { type: Schema.Types.ObjectId, ref: 'Resources' },
	production: [{ type: Schema.Types.ObjectId, ref: 'Production' }],
});

module.exports = mongoose.model('Exam', examSchema);