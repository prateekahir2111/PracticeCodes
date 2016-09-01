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

var AccordianSchema = new Schema({

    Story: {
        type: String,
        default: '',
        trim: true,
    },

});

var accord = mongoose.model('AccordianStories', AccordianSchema);

module.exports = accord;
