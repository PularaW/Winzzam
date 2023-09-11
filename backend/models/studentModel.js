const mongoose = require('mongoose')
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema

const studentSchema = new Schema({
    school: {
        type: String
    },
    district: {
        type: String
    },
    joinedClasses: [{
        tuitionMaster: {
            type: ObjectId
        },
        batch: {
            type: String
        },
        month: {
            type: String
        },
        mode: {
            type: Number
        }
    }],
    bankDetails: {
        bankName: {
            type: String
        },
        branchCode: {
            type: String
        },
        branchName: {
            type: String
        },
        accountNo: {
            type: String
        }
    },
    batches: [{
        type: String
    }],
    paymentMethod: {
        type: Number
    },
    preferredClasses: [{
        addDate: {
            type: Date
        },
        tutor: {
            type: ObjectId
        },
        batch: {
            type: String
        }
    }],
    exams: [{
        examNumber: {
            type: Number
        },
        tuitionMaster: {
            type: ObjectId
        },
        batch: {
            type: String
        },
        month: {
            type: String
        },
        exam: {
            type: ObjectId
        }
    }],
    userID: {
        type: ObjectId
    }
});

module.exports = mongoose.model('student', studentSchema)
  