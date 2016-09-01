/**
 * Created by Prateek on 8/15/2016.
 */

"use strict";

var accServer =  require('../services/accordian.server.service');

module.exports.getStory = function(req,res){

//    var usernameAndPassword = {username: userName, password:password};

        res.status(200);
//    res.json(mockService.getContacts);
        accServer.getAllStories(function (err,contacts) {
            if (err) {
                console.log("server controller :Error in getting all contacts: " );
                console.log(err);
                res
                    .status(400)
                    .json([{message:"error in getting all contacts data"}]);
            } else {
                res.status(200);
                res.json(contacts);
            }

        })


}