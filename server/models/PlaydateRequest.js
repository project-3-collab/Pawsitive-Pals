const { Schema, model, default: mongoose } = require('mongoose');
// import schema from Pet.js
const petSchema = require('./Pet');

const playdateRequestSchema = new Schema(
    {
        requester: {
            type: String
        },
        pet: petSchema,
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

const PlaydateRequest = model('PlaydateRequest', playdateRequestSchema);
module.exports = PlaydateRequest