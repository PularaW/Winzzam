const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    currRating: Number,
    reviews: [
        {
            user: { type: Schema.Types.ObjectId, ref: "User" },
            comment: String,
            rating: Number,
        },
    ],
}); 

module.exports = mongoose.model('Feedback', feedbackSchema);
