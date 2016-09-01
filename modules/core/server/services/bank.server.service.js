/**
 * Created by Prateek on 8/28/2016.
 */


'use strict'

var mongoose = require('mongoose'),
    banking = require('../models/bank.server.models'),
members = mongoose.model('banklogin');

// have to pass parameters n arguments to function
module.exports.getBankUser = function (emailId, password, callback){

    banking.find({email: emailId, password: password}, function(err,contacts) {
        callback(err,contacts);
    });
}


// Use for signing up
module.exports.createBankUser = function (member, callback) {

        var newMember = new members(member);
        newMember.save(function (err) {
            callback(err, newMember);
        })
    }
