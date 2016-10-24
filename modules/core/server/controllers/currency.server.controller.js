/**
 * Created by Prateek on 10/21/2016.
 */

"use strict";

var currencyService =  require('../services/currency.server.services');

module.exports.currencyExch = function (req, res) {
    var curConversionReq = req.body;
//var curConversionReq = {from:"USD", to:"INR", amount: 1000};

var to = curConversionReq.to;
    var from = curConversionReq.from;
var curController  =  currencyService.converter;

    var allRates = curController._rejectionHandler0;

var toRate =     allRates[to];
var fromRate =     allRates[from];

    var amountToBeConverted = curConversionReq.amount;

    var fromToBase = amountToBeConverted/fromRate;


    var fromToBaseToTo = fromToBase*toRate;

    console.log(fromToBaseToTo)


    res.status(200)
    res.json(fromToBaseToTo)
}