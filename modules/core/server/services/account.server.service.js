/**
 * Created by Prateek on 8/28/2016.
 */


'use strict'

var mongoose = require('mongoose'),
    banking = require('../models/account.details.model');

module.exports.verifyAccount = function (emailId, callback){

    banking.find({email: emailId}, function(err,contacts) {
        callback(err,contacts);
    });
}

module.exports.updateAccountBal = function (contact1, bal, callback){

    console.log(bal)
    banking.update({email: contact1.email}, { $set:  {balance: bal}},{multi:true},  function(err,contacts) {
        callback(err,contacts);
    });
}


