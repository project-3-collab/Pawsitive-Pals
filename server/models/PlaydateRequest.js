const { Schema, model, default: mongoose } = require('mongoose');

const playdateRequestSchema = new Schema(
    {
        requester: {
            type: String
        },
        petId: {
            type: String,
        },
        fromDate: {
            type: Date,
        },
        toDate: {
            type: Date
        },
        hasToddlers: {
            type: Boolean
        }, 
        hasKids: {
            type: Boolean
        },
        hasTeens: {
            type: Boolean
        }, 
        hasOtherAdults: {
            type: Boolean
        }, 
        animalsInfo: {
            type: String
        },
        homeInfo: {
            type: String
        },
        reason: {
            type: String
        },
        approvalStatus: {
            type: Number        
        }
    });

const PlaydateRequest = model('PlaydateRequest', playdateRequestSchema)
module.exports = PlaydateRequest