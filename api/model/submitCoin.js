const mongoose = require('mongoose');

const submitCoin = mongoose.Schema({
    logo:{
        type: String,
        required: true
    },
    chain:{
        type: String,
        required: true
    },
    contract_Address:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    symbol:{
        type: String,
        required: true
    },
    presale:{
        type: String,
        required: false
    },
    lunchDate:{
        type: String,
        required: false
    },
    description:{
        type: String,
        require: false
    },
    website:{
        type: String,
        required: true
    },
    telegram:{
        type: String,
        required: false
    },
    twitter:{
        type: String,
        require: false
    },
    facebook:{
        type: String,
        require: false
    },
    instagram:{
        type: String,
        require: false
    },

})
module.exports = mongoose.model('submitCoin', submitCoin)