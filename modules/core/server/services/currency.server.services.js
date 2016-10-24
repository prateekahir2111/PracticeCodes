/**
 * Created by Prateek on 10/21/2016.
 */
"use strict"
var exchange = require("exchange-rates")
var fx = require('money');
var http = require('http');
var Promise = require("bluebird");
var getExchangeRates = require("get-exchange-rates");

module.exports.converter =
    Promise.try(function() {
        return getExchangeRates();
    }).then(function(rates) {

var        theRealRates = rates;
        
        return theRealRates;

    })



