const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const monthSchema = new Schema({
    name: Number, 
    fee: Number,
    order: Number, // ? createed At 
    active: Number, 
    exams: [{
        type: Schema.Types.ObjectId,
        ref: 'Exam' 
    }],
	paid_users:[{
		user: {
        	type: Schema.Types.ObjectId,
        	ref: 'User' 
       		},
		payment: {
        	type: Schema.Types.ObjectId,
        	ref: 'Payment' // Reference to the BankPayment model
    	}
	}],
  
});


module.exports = mongoose.model('Month', monthSchema);