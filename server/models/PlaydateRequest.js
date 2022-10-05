const { Schema, model, default: mongoose } = require('mongoose');

const playdateRequestSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        dateOfBirth: {
            type: Date,
        },
        driverLicense: {
            type: String,
        },
        housingType: {
            type: String
        },
        housingStatus: {
            type: String,
            enum: ['Rent', 'Own']
        }, 
        housingComment: {
            type: String
        },
        otherComment: {
            type: String
        },
        approvalStatus: {
            type: Number        
        }
    });

const PlaydateRequest = model('PlaydateRequest', playdateRequestSchema)
module.exports = PlaydateRequest