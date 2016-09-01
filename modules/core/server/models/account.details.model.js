/**
 * Created by Prateek on 8/28/2016.
 */
/**
 * Created by Prateek on 8/15/2016.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');

var validateFieldStrategy = function(property){
    return property.length;
}

var validateEmailStrategy = function(property){
    return validator.isEmail(property);
};

var validateBalStrategy = function(property){
    return validator.isCurrency(property);
};

var BankAccountSchema = new Schema({

    email:{
        type: String,
        default:'',
        trim:true,
        unique:true,
        lowercase:true,
        validate:[validateEmailStrategy, 'Please enter valid email id']
    },

    firstName: {
        type: String,
        default: '',
        trim: true,
        validate: [validateFieldStrategy, 'password cannot be empty']
    },

    balance: {
        type: Number,
        default: 0,
        trim: true,
        validate: [validateBalStrategy, 'is not valid bal']
    }
});

var bankingacc = mongoose.model('bankacc', BankAccountSchema);

module.exports = bankingacc;
