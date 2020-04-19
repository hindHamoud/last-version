mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = mongoose.Schema({
   
    admin: {
        type: Schema.Types.ObjectId,
       ref: 'User'
    },
    date:{
        type:Date,
        default:Date.now
    },
    fireIncident:{
        type:[Number]
    },
    electricityIncident:{
        type:[Number]
    },

    attackIncident:{
        type:[Number]
    },
    team:{
        type:[String]
    },
    internalContact:{
        type:[[String]]
    },
    externalContact:{
        type:[[String]]
    },
    human:{
        type:[[String]]
    },
    equipmemt:{
        type:[[String]]
    },
    system:{
        type:[[String]]
    },

}
);

const Plan = mongoose.model('Plan', planSchema);

module.exports = { Plan }