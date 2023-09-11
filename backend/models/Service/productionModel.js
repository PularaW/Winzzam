const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productionSchema = new Schema({
    question_number : Number,
    questionURL: String,
    explanationURL: String,
    answer: String,
    lesson: String,
});

module.exports = mongoose.model('Production', productionSchema);