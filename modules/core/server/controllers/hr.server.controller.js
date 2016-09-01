"use strict";

var hrServer =  require('../services/hr.server.services');

module.exports.getCredentials = function(req,res){
    var userName = req.params.username;
    var password = req.params.password;
//    var usernameAndPassword = {username: userName, password:password};

    hrServer.getContactsFromUserNameAndId(userName,password, function (err, contact) {
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