const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text : {
        type : String,
        trim : true,
        required : [true, 'please add some text']
    },
    amount : {
        type : Number,
        required : [true, 'please add a positive or negative number']
    },
    creatrdAt : {
        type : Date,
        default: Date.new
    }

})

module.exports = mongoose.model('Transaction',TransactionSchema)