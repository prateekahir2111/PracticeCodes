/**
 * Created by Prateek on 10/9/2016.
 */
"use strict";

var caloriesService =  require('../services/calories.server.service');

module.exports.calorieCount = function(req, res){

    var description = req.body;

    if(!description){
        res.status(400);
        res.message("You missed out information vital to calorie calculation")
    }

    var calcall =  caloriesService.calories(description.height, description.age, description.gender, description.weight)

    if(!calcall){
        console.log("this is not working");
    }
    else{
        res.status(200);
        res.json(calcall);
    }
}