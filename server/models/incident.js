mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incidentSchema = mongoose.Schema({
   
    admin: {
        type: Schema.Types.ObjectId,
       ref: 'User'
    },
    date:{
        type:Date,
        default:Date.now
    },
    incidentDate : {
        type: Date
    },
    incidentName:{
        type:String
    },
    incidentCriticality:{
        type:String
    },
    name:{
        type:String
    },
    address:{
        type:String
    },
    mobile:{
        type:String
    },
    email:{
        type:String
    },
    departmentAffected:{
        type:String
    },
    incidentDescription:{
        type:String
    },
    resolutionDiscretion:{
        type:String
    },
    recommendation:{
        type:String
    }
}
);

const Incident = mongoose.model('incident', incidentSchema);

module.exports = { Incident }