'use strict'

var mongoose = require('mongoose'),
    Hr = require('../models/hr.auth');


module.exports.getContactsFromUserNameAndId = function (username, password, callback){

    Hr.find({password: password, email: username}, function(err,contacts) {
        callback(err,contacts);
    });
}

module.exports.saveContact = function (ContactToSave,callback) {
    var contact = new Contact(ContactToSave); 
    Hr.save(function (err) {
        callback(err,contact);
    })
}
