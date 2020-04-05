const mongoose = require('mongoose');


const supportSchema = mongoose.Schema({
    type: {
        type:String,
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    problem: {
        type: String,
    },
    
})
const Support = mongoose.model('Support', supportSchema);

module.exports = { Support }