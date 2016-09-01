/**
 * Created by Prateek on 8/28/2016.
 */
'use strict';
////////////////  NEED TO MAKE ACCOUNT FOR BALANCE DISPLAY AND TRANSFER BETWEEN CUSTOMERS  //////////////////////
var bankService =  require('../services/bank.server.service.js');

// Used for loging in
module.exports.logIn = function (req, res) {


    var emailId = req.params.emailId;
    var password = req.params.password;
//    var usernameAndPassword = {username: userName, password:password};

    bankService.getBankUser(emailId,password, function (err, contact) {
        if (err) {
            console.log("server controller :get contact by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in getting contact by id"}]);
        } else {
            res.status(200);
            res.json(contact);

        }

    })
}

//use for sining up
module.exports.SignUp = function (req, res) {


    var member = req.body;
    //var password = req.body.password;
//    var usernameAndPassword = {username: userName, password:password};

    if (!member) {
        res.status(400);
        res.end("error undefined in posting the contact..");
    }
    else {
        bankService.createBankUser(member, function (err, contact) {
            if (err) {
                console.log("server controller :create contact by id error : ");
                console.log(err);
                res
                    .status(400)
                    .json([{message: "error in creating contact by id"}]);
            } else {
                res.status(200);
                res.json(member);

            }

        })
    }
}