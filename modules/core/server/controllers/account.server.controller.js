/**
 * Created by Prateek on 8/29/2016.
 */
'use strict';
////////////////  NEED TO MAKE ACCOUNT FOR BALANCE DISPLAY AND TRANSFER BETWEEN CUSTOMERS  //////////////////////
var bankAccount =  require('../services/account.server.service');

module.exports.verifyAcc = function (req, res) {


    var emailId1 = req.params.emailIdsender;
    var emailId2 = req.params.emailIdreceiver;
    var transferAmount = req.params.transferAmount;


    bankAccount.verifyAccount(emailId1, function (err, contact1) {
        if (err) {
            console.log("server controller :get contact by id error : ");
            console.log(err);
            res
                .status(400)
                .json([{message: "error in getting sender by id"}]);
        } else {

            bankAccount.verifyAccount(emailId2, function (err, contact2) {
                if (err) {
                    console.log("server controller :get contact by id error : ");
                    console.log(err);
                    res
                        .status(400)
                        .json([{message: "error in getting receiver by id"}]);
                } else {
                    if (contact1[0].balance<transferAmount){
                        res
                            .status(400)
                            .json([{message: "Insufficient balance"}])
                    }
                    else{
                    var bal1 = contact1[0].balance - transferAmount;
                    var bal2 = contact2[0].balance + (transferAmount*1);

                    bankAccount.updateAccountBal(contact1[0], bal1, function (err, contact1) {
                        if (err) {
                            console.log("server controller :get contact by id error : ");
                            console.log(err);
                            res
                                .status(400)
                                .json([{message: "error in getting receiver by id"}]);
                        } else {
                            bankAccount.updateAccountBal(contact2[0], bal2, function (err, contact2) {

                                if (err) {
                                    console.log("server controller :get contact by id error : ");
                                    console.log(err);
                                    res
                                        .status(400)
                                        .json([{message: "error in getting receiver by id"}]);
                                }else{
                                    res
                                        .status(200)
                                        .json([{object1: contact1, object2: contact2}])
                                }
                            })
                        }
                    })

                }}
            })
        }
    })
}