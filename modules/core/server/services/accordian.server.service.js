/**
 * Created by Prateek on 8/15/2016.
 */

'use strict'

var mongoose = require('mongoose'),
    Accord = require('../models/accordian');


module.exports.getAllStories = function (callback){

    Accord.find({}, function(err,contacts) {
        callback(err,contacts);
    });
}
